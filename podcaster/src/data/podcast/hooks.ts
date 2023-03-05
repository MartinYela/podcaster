import { useQuery } from "react-query";
import { get100Podcast, getDetailByPodcastId } from "./podcast";

export const usePodcastGet100 = () => {
  const { data, isLoading, error } = useQuery(
    ["podcasts"],
    () => get100Podcast(),
    { cacheTime: 24 * 60 * 60 * 1000 }
  );

  return {
    podcasts: data,
    isLoading,
    error,
  };
};

export const usePodcastGetById = (podcastId: number) => {
  const { data, isLoading, error } = useQuery(
    [`podcastsById/${podcastId}`],
    () => getDetailByPodcastId(podcastId),
    { cacheTime: 24 * 60 * 60 * 1000 }
  );

  return {
    episodes: data,
    isLoading,
    error,
  };
};
