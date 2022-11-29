import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import mypic from "../image/mypic.png";
const MuiSkeleton = () => {
  const [load, setLoad] = useState(false);
  return (
    <Box align="center">
      <Typography variant="h5" color="secondary" align="center">
        MUI Skeleton Example
      </Typography>
      <Card sx={{ width: 400, mt: 2 }}>
        <CardContent>
          <Stack direction="row" spacing={2}>
            {load ? (
              <Avatar src={mypic} />
            ) : (
              <Skeleton variant="circular" animation="wave">
                <Avatar />
              </Skeleton>
            )}
            {load ? (
              <Typography
                variant="subtitle1"
                component="b"
                color="secondary"
                sx={{ pt: 1 }}
              >
                Dr. Vipin Classes
              </Typography>
            ) : (
              <Skeleton variant="text" animation="wave" width={200}>
                <Typography variant="subtitle1">...</Typography>
              </Skeleton>
            )}
          </Stack>
        </CardContent>
        {load ? (
          <CardMedia
            component="img"
            height="140"
            alt="Pic not fount"
            image="https://source.unsplash.com/random"
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width="95%"
            height={140}
            animation="wave"
          ></Skeleton>
        )}
        <CardContent>
          {load ? (
            <Typography variant="body2" color="secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              porro, hic accusamus, temporibus nisi voluptatum distinctio sit
              cumque quas quibusdam sequi debitis voluptas quis nam nihil illum
              culpa, minus aliquam?
            </Typography>
          ) : (
            <>
              <Skeleton
                variant="text"
                animation="wave"
                width="100%"
                height={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="90%"
                height={10}
              />
              <Skeleton
                variant="text"
                animation="wave"
                width="80%"
                height={10}
              />
            </>
          )}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setLoad(!load)}
          >
            Load
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiSkeleton;
