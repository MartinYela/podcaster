import { CircularProgress, Stack } from "@mui/material";

const Loading = () => {
  return (
    <Stack
      height="100vh"
      width="100vw"
      alignItems="center"
      justifyContent="center"
      bgcolor="white"
    >
      <CircularProgress />
    </Stack>
  );
};

export default Loading;
