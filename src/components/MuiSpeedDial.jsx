import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddHomeIcon from "@mui/icons-material/AddHome";
import StarsIcon from "@mui/icons-material/Stars";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
const MuiSpeedDial = () => {
  const navigate = useNavigate();
  return (
    <SpeedDial
      ariaLabel="speedDial"
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      FabProps={{
        sx: {
          bgcolor: "secondary.main",
          "&:hover": {
            bgcolor: "secondary.main",
          },
        },
      }}
    >
      <SpeedDialAction
        tooltipTitle="Home"
        tooltipOpen
        onClick={() => navigate("/home")}
        icon={<AddHomeIcon />}
      ></SpeedDialAction>
      <SpeedDialAction
        tooltipTitle="Rating"
        onClick={() => navigate("/rating")}
        tooltipOpen
        icon={<StarsIcon />}
      ></SpeedDialAction>
      <SpeedDialAction
        tooltipTitle="Accordion"
        onClick={() => navigate("/accordion")}
        tooltipOpen
        icon={<ArrowDropDownCircleIcon />}
      ></SpeedDialAction>
    </SpeedDial>
  );
};

export default MuiSpeedDial;
