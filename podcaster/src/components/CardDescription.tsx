import { FC } from "react";
import { Link } from "react-router-dom";
import { Card, Divider, Stack, styled, Typography } from "@mui/material";

type Props = {
  title: string;
  author: string;
  url: string;
  summary: string;
  podcastId: string;
};

const CardDescription: FC<Props> = ({
  title,
  author,
  url,
  summary,
  podcastId,
}) => {
  const summarySmall = summary?.split(".")[0]
    ? summary?.split(".")[0]
    : summary;

  return (
    <Card
      sx={{
        width: 250,
        position: "relative",
        overflow: "visible",
        boxShadow:
          "0 0px 1px rgba(0, 0, 0, 0.1), 0 1px 0 1px rgba(0, 0, 0, 0.1)",
        marginTop: "30px",
        padding: "10px",
      }}
    >
      <Link to={`/podcast/${podcastId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Stack alignItems="center" padding="0 0 15px 0">
          <Img src={url} alt="Imágen Podcast" />
        </Stack>
        <Divider sx={{ mb: "15px" }} />
        <Typography variant="body2" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          <Typography
            variant="inherit"
            component="span"
            sx={{ fontStyle: "italic" }}
          >
            by
          </Typography>{" "}
          {author}
        </Typography>
      </Link>
      <Divider sx={{ margin: "15px 0" }} />
      <Typography variant="subtitle2" gutterBottom fontWeight="bold">
        Description:
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {summarySmall}
      </Typography>
    </Card>
  );
};

export default CardDescription;

const Img = styled("img")({
  borderRadius: "5px",
  width: 150,
  height: 150,
});
