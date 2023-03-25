import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { X } from "react-bootstrap-icons";
const ConfirmModal = ({ showModal, closeModal, title, yesAction }) => {
  return (
    <Modal open={showModal} onClose={closeModal} sx={{ zIndex: 99999 }}>
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          p: 3,
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
          <Typography variant="body1">{title}</Typography>
          <IconButton onClick={closeModal}>
            <X />
          </IconButton>
        </Box>

        <Divider />
        <Box sx={{ mt: 2, display: "flex", gap: 2, justifyContent: "center" }}>
          <Button onClick={closeModal} variant="contained" color="secondary">
            No
          </Button>
          <Button onClick={yesAction} variant="contained">
            Yes
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ConfirmModal;
