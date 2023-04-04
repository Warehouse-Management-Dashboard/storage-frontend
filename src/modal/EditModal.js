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
import { FormHelperText } from "@mui/material";
const categorySelection = ["laptop", "smartphone", "smartwatch"];
const EditModal = ({ showModal, closeModal, data }) => {
  const [showOrderConfirmModal, setShowOrderConfirmModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [supplier, setSupplier] = useState("");
  const [orderPrice, setOrderPrice] = useState();
  const [sellPrice, setSellPrice] = useState();
  const [error, setError] = useState({
    productName: { isError: false, helperText: "" },
    quantity: { isError: false, helperText: "" },
    category: { isError: false, helperText: "" },
    supplier: { isError: false, helperText: "" },
    orderPrice: { isError: false, helperText: "" },
    sellPrice: { isError: false, helperText: "" },
  });
  useEffect(() => {
    setProductName(data.productName);
    setQuantity(data.quantity);
    setCategory(data.category);
    setSupplier(data.supplier);
    setOrderPrice(data.orderPrice);
    setSellPrice(data.sellPrice);
  }, [data]);
  const submitHandle = () => {
    if (
      productName &&
      quantity &&
      category &&
      supplier &&
      orderPrice &&
      sellPrice
    ) {
      setShowOrderConfirmModal(true);
    } else {
      if (!productName) {
        setError((prev) => ({
          ...prev,
          productName: { isError: true, helperText: "required!" },
        }));
      }
      if (!quantity) {
        setError((prev) => ({
          ...prev,
          quantity: { isError: true, helperText: "required!" },
        }));
      }
      if (!category) {
        setError((prev) => ({
          ...prev,
          category: { isError: true, helperText: "required!" },
        }));
      }
      if (!supplier) {
        setError((prev) => ({
          ...prev,
          supplier: { isError: true, helperText: "required!" },
        }));
      }
      if (!orderPrice) {
        setError((prev) => ({
          ...prev,
          orderPrice: { isError: true, helperText: "required!" },
        }));
      }
      if (!sellPrice) {
        setError((prev) => ({
          ...prev,
          sellPrice: { isError: true, helperText: "required!" },
        }));
      }
    }
  };
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
              onChange={(e) => {
                setProductName(e.target.value);
                if (error.productName.isError) {
                  setError((prev) => ({
                    ...prev,
                    productName: {
                      isError: false,
                      helperText: "",
                    },
                  }));
                }
              }}
              sx={{ width: "100%" }}
              error={error.productName.isError}
              helperText={error.productName.helperText}
            />

            <TextField
              label="Supplier"
              value={supplier}
              onChange={(e) => {
                setSupplier(e.target.value);
                if (error.supplier.isError) {
                  setError((prev) => ({
                    ...prev,
                    supplier: {
                      isError: false,
                      helperText: "",
                    },
                  }));
                }
              }}
              sx={{ width: "100%" }}
              error={error.supplier.isError}
              helperText={error.supplier.helperText}
            />
            <Stack direction="row" gap={2}>
              <FormControl
                sx={{ minWidth: 120, width: "100%" }}
                error={error.category.isError}
              >
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    if (error.category.isError) {
                      setError((prev) => ({
                        ...prev,
                        category: {
                          isError: false,
                          helperText: "",
                        },
                      }));
                    }
                  }}
                  label="Category"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categorySelection.map((item, i) => {
                    return (
                      <MenuItem value={item} key={i}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
                <FormHelperText>{error.category.helperText}</FormHelperText>
              </FormControl>
              <TextField
                label="Quantity"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                  if (error.quantity.isError) {
                    setError((prev) => ({
                      ...prev,
                      quantity: {
                        isError: false,
                        helperText: "",
                      },
                    }));
                  }
                }}
                sx={{ width: 120 }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                error={error.quantity.isError}
                helperText={error.quantity.helperText}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                label="Order Price"
                value={orderPrice}
                onChange={(e) => {
                  setOrderPrice(e.target.value);
                  if (error.orderPrice.isError) {
                    setError((prev) => ({
                      ...prev,
                      orderPrice: {
                        isError: false,
                        helperText: "",
                      },
                    }));
                  }
                }}
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
                error={error.orderPrice.isError}
                helperText={error.orderPrice.helperText}
              />
              <TextField
                label="Price to Sell"
                value={sellPrice}
                onChange={(e) => {
                  setSellPrice(e.target.value);
                  if (error.sellPrice.isError) {
                    setError((prev) => ({
                      ...prev,
                      sellPrice: {
                        isError: false,
                        helperText: "",
                      },
                    }));
                  }
                }}
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
                error={error.sellPrice.isError}
                helperText={error.sellPrice.helperText}
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
              Cancel
            </Button>
            <Button onClick={submitHandle} variant="contained">
              Submit
            </Button>
          </Box>
        </Paper>
      </Modal>
    </>
  );
};

export default EditModal;
