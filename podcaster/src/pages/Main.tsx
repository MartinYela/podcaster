import { Stack, CircularProgress, Typography, Divider } from "@mui/material";
import Error from "../components/Error";
import { usePodcastOperations } from "../data/podcast/hooks";
import FilteredPage from "../components/FilteredPage";

const Main = () => {
  const { podcasts, isLoading, error } = usePodcastOperations();

  return (
    <Stack minHeight="100vh" width="100vw" bgcolor="white">
      <Stack margin="80px">
        <Typography color="primary">Podcaster</Typography>
        <Divider />
        <>
          {isLoading ? (
            <Stack alignItems="center" marginTop={15}>
              <CircularProgress />
            </Stack>
          ) : podcasts && !error ? (
            <FilteredPage podcasts={podcasts} />
          ) : (
            error && <Error error={error as string} />
          )}
        </>
      </Stack>
    </Stack>
  );
};

export default Main;
