import { Stack, Typography, Divider } from "@mui/material";
import PodcastList from "../components/PodcastList";
import AppLayout from "../layout/AppLayout";

const Main = () => {
  return (
    <AppLayout>
      <PodcastList />
    </AppLayout>
  );
};

export default Main;
