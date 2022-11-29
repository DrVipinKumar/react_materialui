import React from "react";
import { Box } from "@mui/material";
const BoxEx = () => {
  return (
    <Box>
      <Box
        mt={2}
        mx={3}
        borderRadius={2}
        display="flex"
        justifyContent="center"
        color="white"
        bgcolor="secondary.main"
      >
        BoxEx
      </Box>
      <Box mx={3} component="mark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, esse in
        architecto exercitationem praesentium doloribus nam? Est exercitationem
        placeat quibusdam beatae, laudantium assumenda earum vero ducimus aut
        corporis dolores minima! Reprehenderit architecto, fugiat corrupti a
        impedit dicta magnam fugit omnis illum sint soluta consequatur ipsum
        aliquam dolorum cupiditate vitae tenetur totam. Libero voluptatibus
        quis, cum dolor placeat nesciunt nostrum beatae! Impedit consequuntur
        rerum molestias assumenda praesentium voluptatibus. Ipsam eveniet
        officiis in voluptatum quasi aut veniam quibusdam ipsa animi facere
        nobis odit, necessitatibus repellat quis laboriosam impedit corrupti
        aperiam error consequuntur?
      </Box>
    </Box>
  );
};

export default BoxEx;
