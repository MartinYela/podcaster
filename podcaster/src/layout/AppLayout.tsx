import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Divider } from "@mui/material";
import { Badge } from "@mui/material";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [startNavigation, setStartNavigation] = useState(true);

  window.onbeforeunload = function () {
    setStartNavigation(true);
  };

  if (startNavigation) {
    setTimeout(() => {
      setStartNavigation(false);
    }, 1000); // 1 segundo
  }

  return (
    <Stack minHeight="100vh" width="100%" bgcolor="white">
      <Stack margin="50px">
        <Stack direction="row" justifyContent="space-between">
          <Link to={`/`} style={{ textDecoration: "none", color: "inherit" }}>
            <Typography color="primary">Podcaster</Typography>
          </Link>
          {startNavigation && (
            <Badge
              variant="dot"
              color="primary"
              overlap="circular"
              sx={{ bgcolor: "primary", width: "10px", height: "10px" }}
            />
          )}
        </Stack>
        <Divider />
        {children}
      </Stack>
    </Stack>
  );
};

export default AppLayout;
