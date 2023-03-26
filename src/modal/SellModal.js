import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { X } from "react-bootstrap-icons";
import TextField from "@mui/material/TextField";
import ConfirmModal from "./ConfirmModal";
const SellModal = ({ showModal, closeModal, yesAction }) => {
  const [quantity, setQuantity] = useState();
  const [showSellConfirmModal, setShowSellConfirmModal] = useState(false);
  return (
    <>
      <ConfirmModal
        showModal={showSellConfirmModal}
        closeModal={() => setShowSellConfirmModal(false)}
        title="Are You Sure to Sell"
        yesAction={() => {
          yesAction(quantity);
          setShowSellConfirmModal(false);
          setQuantity(undefined);
        }}
      />
      <Modal open={showModal} onClose={closeModal} sx={{ zIndex: 99999 }}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            p: { xs: 2, sm: 3 },
            width: "min(95% , 250px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3,
              mb: 2,
            }}
          >
            <Typography variant="body1" color="white">
              Sell Product
            </Typography>
            <IconButton
              onClick={() => {
                closeModal();
                setQuantity(undefined);
              }}
            >
              <X />
            </IconButton>
          </Box>

          <Divider />
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Quantity to Sell"
              variant="outlined"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "end" }}>
            <Button
              onClick={() => {
                closeModal();
                setQuantity(undefined);
              }}
              variant="contained"
              color="secondary"
            >
              No
            </Button>
            <Button
              onClick={() => setShowSellConfirmModal(true)}
              variant="contained"
            >
              Yes
            </Button>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default SellModal;
