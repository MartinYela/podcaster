import itunesApi from "../../config/api";

export const get100Podcast = async () => {
  const response = await itunesApi.get(
    "/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  return response.data.feed.entry;
};
