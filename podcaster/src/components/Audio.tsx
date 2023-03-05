import { Stack, Typography } from "@mui/material";
import { useState } from "react";

type AudioPlayerProps = {
  src: string;
};

const AudioPlayer = ({ src }: AudioPlayerProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadStart = () => {
    setLoading(true);
  };

  const handleLoadedData = () => {
    setLoading(false);
  };
  return (
    <Stack textAlign="center">
      <audio
        id="audio"
        src={src}
        controls
        style={{ width: "100%" }}
        onLoadStart={handleLoadStart}
        onLoadedData={handleLoadedData}
      />
      {loading && <Typography variant="caption">Cargando audio</Typography>}
    </Stack>
  );
};

export default AudioPlayer;
