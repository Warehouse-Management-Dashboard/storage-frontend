import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { X } from "react-bootstrap-icons";
import TextField from "@mui/material/TextField";
import ConfirmModal from "./ConfirmModal";
const AddCategoryModal = ({ showModal, closeModal }) => {
  const [category, setCategory] = useState();
  const [error, setError] = useState({ isError: false, helperText: "" });
  const [showConfirmModal, setShowConfirmModal] = useState();
  const submitHandle = () => {
    if (category) {
      setShowConfirmModal(true);
    } else {
      setError((prevState) => ({
        ...prevState,
        isError: true,
        helperText: "harus diisi!",
      }));
    }
  };
  const addCategory = () => {
    console.log("add " + category);
    setShowConfirmModal(false);
    closeModal();
  };
  return (
    <>
      <ConfirmModal
        showModal={showConfirmModal}
        closeModal={() => setShowConfirmModal(false)}
        title={`Are You Sure to add ${category} to Category?`}
        yesAction={addCategory}
      />
      <Modal open={showModal} onClose={closeModal} sx={{ zIndex: 1300 }}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: { xs: 2, sm: 3 },
            width: "min(95% , 300px)",
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
            <Typography variant="body1">Add Category</Typography>
            <IconButton onClick={closeModal}>
              <X />
            </IconButton>
          </Box>

          <Divider />
          <Box sx={{ mt: 2 }}>
            <TextField
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                if (error.isError) {
                  setError((prevState) => ({
                    ...prevState,
                    isError: false,
                    helperText: "",
                  }));
                }
              }}
              label="Category"
              error={error.isError}
              helperText={error.helperText}
              sx={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ mt: 2, display: "flex", gap: 2, justifyContent: "end" }}>
            <Button onClick={closeModal} variant="contained" color="secondary">
              Cancel
            </Button>
            <Button variant="contained" onClick={submitHandle}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default AddCategoryModal;
