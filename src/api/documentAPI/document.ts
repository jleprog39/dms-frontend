// src/api/documentAPI/document.ts
import { PaginationModel } from "../../consts/types.ts";
import { API } from "../API.ts";
import { DocumentEndpoints } from "./consts.ts";
import { GetAllDocumentsResponse } from "./types.ts";
import { DocumentFilters } from "../../pages/document/types.ts";

export const getAllDocuments = async (
    headers: PaginationModel,
    filters: DocumentFilters,
    relations?: string[]
): Promise<GetAllDocumentsResponse> => {
    let transformedFilters: Record<string, any> = {};

    const setFilterParams: Map<
        string,
        { description: string; action: () => void }
    > = new Map([
        [
            'isFinal',
            {
                description: 'גרסת קובץ סופית',
                action: () => {
                    const isFinal = filters['isFinal'];
                    if (isFinal === true || isFinal === false) {
                        transformedFilters = {
                            ...transformedFilters,
                            isFinal
                        };
                    }
                },
            },
        ],
    ]);

    Object.keys(filters).forEach((field) => {
        const addToQueryParams = setFilterParams.get(field)?.action;
        if (addToQueryParams) {
            addToQueryParams();
        }
    });

    const { data } = await API.get(DocumentEndpoints.getAllDocuments, {
        params: {
            filters: JSON.stringify(transformedFilters),
            relations: JSON.stringify(relations || []),
        },
        headers: {
            "page-size": headers.pageSize,
            "page-number": headers.page
        },
    });

    return data;
};

export const uploadDocument = async (file: File) => {
    const { data } = await API.post<DocumentType[]>(DocumentEndpoints.uploadDocument, file, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return data;
};

export const getFile = async (fileName: string): Promise<Blob> => {
    const response = await API.get(`${DocumentEndpoints.getFile}${fileName}`, {
        responseType: 'blob',
    });
    return response.data;
};