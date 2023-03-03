import axios from "axios";

const itunesApi = axios.create({
  baseURL: "https://itunes.apple.com/",
});

export default itunesApi;
