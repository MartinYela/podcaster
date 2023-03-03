import { Stack } from "@mui/material";
import PodcastCard from "./PodcastCard";

const PodcastSection = () => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={6}
      marginTop={10}
    >
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
      <PodcastCard />
    </Stack>
  );
};

export default PodcastSection;
