import { Stack } from "@mui/material";
import { useQueryClient } from "react-query";
import { useParams } from "react-router";
import CardDescription from "../components/CardDescription";
import { usePodcastGetById } from "../data/podcast/hooks";
import AppLayout from "../layout/AppLayout";
import EpisodeDetailCard from "../components/EpisodeDetailCard";

const EpisodeDetail = () => {
  const { podcastId } = useParams();
  const { episodes, isLoading } = usePodcastGetById(parseInt(podcastId!));
  const queryClient = useQueryClient();
  const podcasts: any = queryClient.getQueryData("podcasts");
  const actualPodcast = podcasts.filter(
    (podcast: any) => podcastId === podcast["id"].attributes["im:id"]
  )[0];
  return (
    <AppLayout>
      <Stack direction="row" justifyContent="space-around" flexWrap="wrap">
        <CardDescription
          title={actualPodcast["im:name"].label}
          author={actualPodcast["im:artist"].label}
          url={actualPodcast["im:image"][2].label}
          summary={actualPodcast.summary.label}
          podcastId={podcastId!}
        />
        {!isLoading && episodes && <EpisodeDetailCard episodes={episodes.results}/>}
        
      </Stack>
    </AppLayout>
  );
};

export default EpisodeDetail;
