import { Stack, Typography, Divider } from "@mui/material";
import { ReactNode } from "react";

interface AppLayoutProps {
    children: ReactNode;
  }

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Stack minHeight="100vh" width="100%" bgcolor="white">
      <Stack margin="50px">
        <Typography color="primary">Podcaster</Typography>
        <Divider />
        {children}
      </Stack>
    </Stack>
  );
};

export default AppLayout;
