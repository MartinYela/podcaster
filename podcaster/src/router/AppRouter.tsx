import { Route, Routes } from "react-router-dom";
import { usePodcastGet100 } from "../data/podcast/hooks";

import Main from "../pages/Main";
import PodcastDetail from "../pages/PodcastDetail";
import Error from "../components/Error";
import Loading from "../pages/Loading";
import EpisodeDetail from "../pages/EpisodeDetail";

const AppRouter = () => {
  const { isLoading, error } = usePodcastGet100();

  return (
    <Routes>
      {isLoading ? (
              <Route path="/*" element={<Loading />} />
      ) : (
        <>
          {error ? (
            <Route path="/*" element={<Error error={error as string} />} />
          ) : (
            <>
              <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
              <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />} />
              <Route path="/*" element={<Main />} />
            </>
          )}
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
