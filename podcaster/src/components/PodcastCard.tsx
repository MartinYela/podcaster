import { Typography, Card, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";

type Props = {
  title: string;
  author: string;
  url: string;
};

const PodcastCard: FC<Props> = ({ title, author, url }) => {
  return (
    <Stack height={240}>
      <Card sx={{ width: 240, position: "relative", overflow: "visible" }}>
        <Stack alignItems="center" margin="65px 0 5px 0" textAlign="center" gap={1}>
          <Typography variant="body2" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Author: {author}
          </Typography>
        </Stack>
        <Img src={url} alt="Imágen Podcast" />
      </Card>
    </Stack>
  );
};

export default PodcastCard;

const Img = styled("img")({
  borderRadius: "50%",
  top: "0",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 115,
  height: 115,
  position: "absolute",
  zIndex: 1,
});
