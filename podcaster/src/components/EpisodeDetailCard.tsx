import { Card, Typography, Stack } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

import AudioPlayer from "./Audio";

const EpisodeDetailCard: FC<Props> = ({ episodes }) => {
  const { episodeId } = useParams();
  const filteredResults = episodes?.filter((_: any, i: number) => i > 0);
  const episode = filteredResults.filter(
    (episode: any) => episode.trackId == episodeId
  )[0];

  return (
    <Card
      sx={{
        width: "70%",
        minWidth: "600px",
        boxShadow:
          "0 0px 1px rgba(0, 0, 0, 0.1), 0 1px 0 1px rgba(0, 0, 0, 0.1)",
        marginTop: "30px",
        padding: "20px",
      }}
    >
      <Stack gap={2} justifyContent="space-between" height="100%">
        <Typography variant="h5" fontWeight="bold">
          {episode.collectionName}
        </Typography>
        <Typography variant="body1">{episode.description}</Typography>
        <AudioPlayer
          src={episode.episodeUrl}
        />
      </Stack>
    </Card>
  );
};

export default EpisodeDetailCard;

type Props = {
  episodes: any;
};
