import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { X } from "react-bootstrap-icons";
import TextField from "@mui/material/TextField";
import ConfirmModal from "./ConfirmModal";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
const OrderModal = ({ showModal, closeModal }) => {
  const [showOrderConfirmModal, setShowOrderConfirmModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [orderPrice, setOrderPrice] = useState("");
  const [priceToSell, setPriceToSell] = useState("");
  return (
    <>
      <ConfirmModal
        showModal={showOrderConfirmModal}
        closeModal={() => setShowOrderConfirmModal(false)}
        title="Are You Sure to Order?"
        yesAction={() => {
          setShowOrderConfirmModal(false);
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
            width: { xs: "calc(100% - 16px)", sm: 500 },
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
              Order Product
            </Typography>
            <IconButton onClick={closeModal}>
              <X />
            </IconButton>
          </Box>

          <Divider />
          <Stack sx={{ mt: 2 }} spacing={2}>
            <Stack direction="row" gap={2}>
              <TextField
                label="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                sx={{ width: 120 }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="Supplier"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
                sx={{ width: "100%" }}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                label="Order Price"
                value={orderPrice}
                onChange={(e) => setOrderPrice(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <TextField
                label="Price to Sell"
                value={priceToSell}
                onChange={(e) => setPriceToSell(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Rp</InputAdornment>
                  ),
                }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </Stack>
          </Stack>
          <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "end" }}>
            <Button
              onClick={() => {
                closeModal();
              }}
              variant="contained"
              color="secondary"
            >
              No
            </Button>
            <Button
              onClick={() => setShowOrderConfirmModal(true)}
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

export default OrderModal;
