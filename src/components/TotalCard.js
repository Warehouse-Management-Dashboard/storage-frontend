import React from "react";
import Box from "@mui/material/Box";
import { getPrice } from "../utils/getPrice";
const TotalCard = ({ title, price, Icon, color }) => {
  return (
    <Box className="c-bg-2 box-shadow rounded d-flex flex-fill" minWidth={220}>
      <Box
        className="d-flex justify-content-center align-items-center rounded"
        sx={{ height: "100%", aspectRatio: "1 / 1", bgcolor: color }}
      >
        <Icon size={30} color={"white"} />
      </Box>
      <Box className="d-flex flex-column p-3 gap-2 justify-content-center">
        <span>{title}</span>

        <span className="h5  text-white">{getPrice(price)}</span>
      </Box>
    </Box>
  );
};

export default TotalCard;
