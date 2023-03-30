import React, { useEffect, useState } from "react";
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
import { getCapitalize } from "../utils/getCapitalize";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
const categorySelection = ["laptop", "smartphone", "smartwatch"];
const EditModal = ({ showModal, closeModal, data }) => {
  const [showOrderConfirmModal, setShowOrderConfirmModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [orderPrice, setOrderPrice] = useState();
  const [sellPrice, setSellPrice] = useState();
  useEffect(() => {
    setProductName(data.productName);
    setQuantity(data.quantity);
    setCategory(data.category);
    setSupplier(data.supplier);
    setOrderPrice(data.orderPrice);
    setSellPrice(data.sellPrice);
  }, [data]);
  return (
    <>
      <ConfirmModal
        showModal={showOrderConfirmModal}
        closeModal={() => setShowOrderConfirmModal(false)}
        title="Are You Sure to Edit?"
        yesAction={() => {
          setShowOrderConfirmModal(false);
        }}
      />

      <Modal open={showModal} onClose={closeModal} sx={{ zIndex: 1300 }}>
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
              Edit {getCapitalize(data.productName)}
            </Typography>
            <IconButton onClick={closeModal}>
              <X />
            </IconButton>
          </Box>

          <Divider />
          <Stack sx={{ mt: 2 }} spacing={2}>
            <TextField
              label="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              sx={{ width: "100%" }}
            />

            <TextField
              label="Supplier"
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              sx={{ width: "100%" }}
            />
            <Stack direction="row" gap={2}>
              <FormControl sx={{ minWidth: 120, width: "100%" }}>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categorySelection.map((item) => {
                    return <MenuItem value={item}>{item}</MenuItem>;
                  })}
                </Select>
              </FormControl>
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
                value={sellPrice}
                onChange={(e) => setSellPrice(e.target.value)}
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

export default EditModal;
