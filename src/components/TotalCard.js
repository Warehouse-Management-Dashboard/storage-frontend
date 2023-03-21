import React from "react";
import { Box as BoxIcon } from "react-bootstrap-icons";
import Box from "@mui/material/Box";
const TotalCard = ({ title, amount, amountDesc }) => {
  return (
    <Box className="c-bg-2 box-shadow rounded d-flex flex-fill" minWidth={220}>
      <Box
        className="c-primary d-flex justify-content-center align-items-center rounded"
        sx={{ height: "100%", aspectRatio: "1 / 1" }}
      >
        <BoxIcon size={30} color={"white"} />
      </Box>
      <Box className="d-flex flex-column p-3 gap-2 justify-content-center">
        <span>{title}</span>
        <span>
          <span className="h4 text-white">{amount}</span>{" "}
          <span style={{ fontSize: "12px" }}>{amountDesc}</span>
        </span>
      </Box>
    </Box>
  );
};

export default TotalCard;
