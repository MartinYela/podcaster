import { Stack } from "@mui/material";
import { useQueryClient } from "react-query";
import { useParams } from "react-router";
import CardDescription from "../components/CardDescription";
import Episodes from "../components/Episodes";
import AppLayout from "../layout/AppLayout";

const PodcastDetail = () => {
  const { podcastId } = useParams();
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
        />
        <Episodes podcastId={parseInt(podcastId!)}/>
      </Stack>
    </AppLayout>
  );
};

export default PodcastDetail;
