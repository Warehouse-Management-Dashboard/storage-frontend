import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import ConfirmModal from "../modal/ConfirmModal";
import { Container } from "react-bootstrap";
const categorySelection = ["laptop", "smartphone", "smartwatch"];
const OrderProduct = () => {
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
    <div className="px-4 py-3 vstack gap-3 align-items-center">
      <ConfirmModal
        showModal={showOrderConfirmModal}
        closeModal={() => setShowOrderConfirmModal(false)}
        title={`Do You Want to Add ${productName}?`}
        yesAction={() => {
          setShowOrderConfirmModal(false);
        }}
      />

      <Container className="c-bg-2 box-shadow rounded  p-3 overflow-hidden">
        <Stack spacing={2}>
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
            onKeyDown={(event) => {
              if (event.value.length === 0 && /\s/g.test(event.key)) {
                event.preventDefault();
              }
              if (event.value === 0) console.log(1);
              console.log(event);
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
              sx={{ width: "50%" }}
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
              sx={{ width: "50%" }}
            />
          </Stack>
        </Stack>
        <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "end" }}>
          <Button onClick={submitHandle} variant="contained">
            Submit
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default OrderProduct;
