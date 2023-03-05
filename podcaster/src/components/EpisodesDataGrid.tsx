import { FC } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid";

import { formatDate, formatTime } from "../helpers/transformData";

const columns: GridColDef[] = [
  {
    flex: 0.7,
    field: "trackName",
    headerName: "Title",
    renderCell: ({ row }: CellType) => (
      <Typography color="primary">{row.trackName}</Typography>
    ),
  },
  {
    flex: 0.15,
    field: "releaseDate",
    headerName: "Date",
    align: "center",
    headerAlign: "center",
  },
  {
    flex: 0.15,
    field: "trackTimeMillis",
    headerName: "Duration",
    align: "right",
    headerAlign: "right",
    type: "number",
  },
];

const EpisodesDataGrid: FC<Props> = ({ episodes }) => {
  const filteredResults = episodes.results.filter((_: any, i: number) => i > 0);
  const episodesArray = filteredResults.map((episode: any) => ({
    id: episode.trackName,
    trackName: episode.trackName,
    releaseDate: formatDate(episode.releaseDate),
    trackTimeMillis: formatTime(episode.trackTimeMillis),
  }));

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        rows={episodesArray}
        columns={columns}
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        sx={{
          border: "none",
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: "#f5f5f5",
          },
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            fontWeight: "bold",
            fontSize: "20px",
          },
        }}
      />
    </Box>
  );
};

export default EpisodesDataGrid;

interface CellType {
  row: PermissionRowType;
}
type PermissionRowType = {
  trackName: string;
  releaseDate: string;
  trackTimeMillis: string;
};

type Props = {
  episodes: any;
};
