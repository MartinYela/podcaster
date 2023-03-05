import { Typography, Card, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  author: string;
  url: string;
  id: number;
};

const PodcastCard: FC<Props> = ({ title, author, url, id }) => {
  return (
    <Stack marginBottom={15}>
      <Link to={`/podcast/${id}`}>
        <Stack>
          <Card
            sx={{
              width: 260,
              position: "relative",
              overflow: "visible",
              boxShadow:
                "0 0px 1px rgba(0, 0, 0, 0.1), 0 1px 0 1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Stack
              alignItems="center"
              margin="60px 0 5px 0"
              textAlign="center"
              gap={1}
            >
              <Typography variant="body2" component="div" fontWeight="bold">
                {title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Author: {author}
              </Typography>
            </Stack>
            <Img src={url} alt="Imágen Podcast" />
          </Card>
        </Stack>
      </Link>
    </Stack>
  );
};

export default PodcastCard;

const Img = styled("img")({
  borderRadius: "50%",
  top: "0%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 115,
  height: 115,
  position: "absolute",
  zIndex: 1,
});
