import { Stack, Card, Typography, CircularProgress } from "@mui/material";
import { FC } from "react";
import EpisodesDataGrid from "./EpisodesDataGrid";
import { usePodcastGetById } from "../data/podcast/hooks";

const Episodes: FC<Props> = ({ podcastId }) => {
  const { episodes, isLoading } = usePodcastGetById(podcastId);

  return (
    <Stack width="70%" minWidth="600px">
      <Card
        sx={{
          width: "100%",
          boxShadow:
            "0 0px 1px rgba(0, 0, 0, 0.1), 0 1px 0 1px rgba(0, 0, 0, 0.1)",
          marginTop: "30px",
          padding: "10px",
        }}
      >
        <Typography variant="h6" component="div" fontWeight="bold">
          Episodes {episodes ? episodes?.resultCount - 1 : ""}
        </Typography>
      </Card>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          boxShadow:
            "0 0px 1px rgba(0, 0, 0, 0.1), 0 1px 0 1px rgba(0, 0, 0, 0.1)",
          marginTop: "20px",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {episodes ? (
          <EpisodesDataGrid episodes={episodes} />
        ) : (
          <CircularProgress />
        )}
      </Card>
    </Stack>
  );
};

export default Episodes;

type Props = {
  podcastId: number;
};
