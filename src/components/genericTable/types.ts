import { GridColDef, GridRowParams } from "@mui/x-data-grid";
import { GridPaginationModel } from "@mui/x-data-grid-pro";
import { SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import {JSX} from "react";

export interface GenericTableProps {
  columns: GridColDef[];
  rows: any[];
  toolBar?: any;
  loading: boolean;
  disableColumnMenu?: boolean;
  disableColumnFilter?: boolean;
  disableColumnSelector?: boolean;
  sx?: SxProps<Theme> | undefined;
  onPaginationModelChange: (model: GridPaginationModel) => void;
  StyledComponent?: any;
  pageSize?: number;
  initialPage?: number;
  hideFooterPagination?: boolean;
  getDetailPanelHeight?: (params: GridRowParams) => number | "auto";
  getDetailPanelContent?: ({ row }: GridRowParams) => JSX.Element;
  rowCount?: number;
}
