import itunesApi from "../../config/api";
import axios from 'axios';

export const get100Podcast = async () => {
  const response = await itunesApi.get(
    "/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  return response.data.feed.entry;
};

export const getDetailByPodcastId = async (podcastId: number) => {
  const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10`)}`);

  return JSON.parse(response.data.contents);
};
