import { Typography, Card, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const PodcastCard = () => {
  return (
    <Stack height={220}>
      <Card sx={{ width: 220, position: "relative", overflow: "visible" }}>
        <Stack alignItems="center" margin="55px 0 5px 0">
          <Typography variant="body2" component="div" fontWeight="bold">
            ALL SONGS CONSIDERED
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Author: NPR
          </Typography>
        </Stack>
        <Img
          src="https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png"
          alt="Imágen Podcast"
        />
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
