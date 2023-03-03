import { Stack } from "@mui/material";
import PodcastCard from "./PodcastCard";
import { FC } from "react";

type Props = {
  podcasts: any;
};

const PodcastSection: FC<Props> = ({ podcasts }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={6}
      marginTop={10}
    >
      {podcasts.map((podcast: any) => {
        return (
          <PodcastCard
            key={podcast["im:name"].label}
            title={podcast["im:name"].label}
            author={podcast["im:artist"].label}
            url={podcast["im:image"][2].label}
          />
        );
      })}
    </Stack>
  );
};

export default PodcastSection;
