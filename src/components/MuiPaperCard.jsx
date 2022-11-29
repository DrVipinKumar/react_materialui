import React from "react";
import video from "./video.mp4";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
const MuiPaperCard = () => {
  return (
    <Box>
      <Typography variant="h4" align="center">
        MUI Paper Example
      </Typography>
      <Stack spacing={1} direction="row" m={3}>
        <Box width={450}>
          <Paper sx={{ p: 2 }}>
            <Typography gutterBottom variant="h5">
              Paper Heading
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              veniam, autem est sint perferendis corrupti molestiae odit earum
              nesciunt eveniet itaque et expedita id dolor cupiditate sed illo
              placeat distinctio.
            </Typography>
          </Paper>
        </Box>
        <Box width={450}>
          <Paper elevation={24} sx={{ p: 2 }}>
            <Typography gutterBottom variant="h5">
              Paper Heading
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              veniam, autem est sint perferendis corrupti molestiae odit earum
              nesciunt eveniet itaque et expedita id dolor cupiditate sed illo
              placeat distinctio.
            </Typography>
          </Paper>
        </Box>
      </Stack>
      <Stack spacing={1} direction="row" width={450} m={3}>
        <Card elevation={10}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Card Heading
            </Typography>
            <Typography variant="body2" align="justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, reprehenderit dicta. Dolore sunt numquam, quis quod
              libero doloremque sit pariatur commodi fuga odit cumque at
              officiis, impedit iste animi atque.
            </Typography>
          </CardContent>
          {/* <CardMedia
            component="img"
            height={140}
            image="https://source.unsplash.com/random"
            alt="Pic is not found"
            sx={{ width: 420, m: 2, borderRadius: 2 }}
          /> */}
          {/* <CardMedia
            component="video"
            height={140}
            controls
            src={video}
            alt="Pic is not found"
            sx={{ width: 420, m: 2, borderRadius: 2 }}
          /> */}
          <CardMedia
            component="iframe"
            height={140}
            controls
            src="http://localhost:3000/"
            alt="Pic is not found"
            sx={{ width: 420, m: 2, borderRadius: 2 }}
          />

          <CardActions>
            <Button color="secondary" variant="contained">
              Show
            </Button>
            <Button color="secondary" variant="contained">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
};

export default MuiPaperCard;
