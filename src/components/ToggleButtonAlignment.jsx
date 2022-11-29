import React from "react";
import { Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { useState } from "react";
const ToggleButtonAlignment = () => {
  const [alignment, setAlignment] = useState("");
  const getAlignment = (event, alignment) => {
    setAlignment(alignment);
  };
  return (
    <div align="center">
      <Typography variant="h4"> ToggleButton Exclusive Selection</Typography>
      <ToggleButtonGroup
        color="error"
        value={alignment}
        onChange={getAlignment}
        sx={{ mt: 2 }}
        exclusive
      >
        <ToggleButton value="left" aria-label="left">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="center">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right">
          <FormatAlignRightIcon />
        </ToggleButton>
        <ToggleButton value="justify" aria-label="justify">
          <FormatAlignJustifyIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="body1" align={alignment} sx={{ mx: 3 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum vel
        ducimus omnis quas quis aspernatur incidunt repellendus officiis minus
        aut, ad eligendi enim odio magni beatae ratione fugit ea nemo. Autem,
        quisquam neque? Ipsa repellat numquam, minima soluta reiciendis esse
        deserunt repellendus neque aliquid debitis beatae qui quisquam, placeat
        facere dolores pariatur quibusdam quas odio blanditiis praesentium!
        Odit, eos nesciunt! Perferendis voluptatum reiciendis velit error quo
        dignissimos, dicta totam adipisci perspiciatis neque quia laudantium
        atque quod et, laboriosam repudiandae! Ut, in ducimus! Magnam explicabo,
        suscipit ipsum recusandae laboriosam quia fugit.
      </Typography>
    </div>
  );
};

export default ToggleButtonAlignment;
