import { Stack, Divider, TextField, Typography, Chip } from "@mui/material";
import PodcastSection from "../components/PodcastSection";

const Main = () => {
  return (
    <Stack height="100vh" width="100vw" bgcolor="white">
      <Stack margin="80px">
        <Typography color="primary">Podcaster</Typography>
        <Divider />
        <Stack
          alignItems="center"
          margin="20px 0"
          direction="row"
          justifyContent="end"
          gap="10px"
        >
          <Chip label="100" color="primary" size="small" />
          <TextField
            variant="outlined"
            size="small"
            label="Filter podcast..."
          />
        </Stack>
        <PodcastSection />
      </Stack>
    </Stack>
  );
};

export default Main;
