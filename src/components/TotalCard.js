import React from "react";
import { Box } from "react-bootstrap-icons";
import "../assets/stylesheet/total-card.css";

const TotalCard = ({ title, amount, amountDesc }) => {
  return (
    <div className="total-card">
      <div className="total-icon">
        <Box size={30} color={"white"} />
      </div>
      <div className="total-item">
        <h6>{title}</h6>
        <span>
          <span className="fw-bolder fs-4 text-white">{amount}</span>
          {"  "}
          {amountDesc}
        </span>
      </div>
    </div>
  );
};

export default TotalCard;
