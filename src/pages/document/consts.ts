import {GridColDef} from "@mui/x-data-grid";
import { formatDate } from "../../utils/formatDate";


export const COLUMNS: GridColDef[] = [
    {
        field: "name",
        headerName: "שם",
        headerAlign: "center",
        align: "center",
        width: 150,
    },
    {
        field: "projectCode",
        headerName: "קוד פרויקט",
        headerAlign: "center",
        align: "center",
        width: 150,
    },
    {
        field: "updateDate",
        headerName: "תאריך עדכון",
        headerAlign: "center",
        align: "center",
        width: 150,
        valueGetter: (params) => formatDate(params.value),
    },
    {
        field: "revision",
        headerName: "גרסה",
        headerAlign: "center",
        align: "center",
        width: 150,
    },
    {
        field: "isFinal",
        headerName: "סופי",
        headerAlign: "center",
        align: "center",
        type: "boolean",
        width: 150,
    },
    {
        field: "revisionGroup",
        headerName: "קבוצת גרסאות",
        headerAlign: "center",
        align: "center",
        width: 150,
    },
    {
        field: "isFinal",
        headerName: "הא סופי",
        type: "boolean",
        headerAlign: "center",
        align: "center",
        width: 150,
    },
];