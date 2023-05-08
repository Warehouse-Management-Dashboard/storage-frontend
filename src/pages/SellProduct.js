import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Cart2, Plus, Trash } from "react-bootstrap-icons";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ConfirmModal from "../modal/ConfirmModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, sellProduct } from "../redux/slices/productsSlice";

const SellProduct = () => {
  const [inputs, setInputs] = useState([
    {
      productName: {
        value: "",
        isError: false,
        errorMassage: "",
        productId: "",
      },
      quantity: { value: "", isError: false, errorMassage: "" },
    },
  ]);
  const addInput = () => {
    setInputs((prev) => [
      ...prev,
      {
        productName: { value: "", isError: false, errorMassage: "" },
        quantity: { value: "", isError: false, errorMassage: "" },
      },
    ]);
  };
  const [customerName, setCustomerName] = useState({
    value: "",
    isError: false,
    errorMassage: "",
  });
  const [showSellConfirmModal, setShowSellConfirmModal] = useState(false);
  const deleteInput = (i) => {
    if (inputs.length === 1) return;
    setInputs((prev) => {
      const newState = [...prev];
      newState.splice(i, 1);
      return newState;
    });
  };
  const handleProductNameInputChange = (value, productName, i) => {
    setInputs((prev) => {
      const array = [...prev];
      array[i].productName.value = value;
      return array;
    });
    if (productName.isError) {
      setInputs((prev) => {
        const array = [...prev];
        array[i].productName.isError = false;
        array[i].productName.errorMassage = "";
        return array;
      });
    }
  };
  const handleProductNameOnBlur = (e, reason, i) => {
    if (reason === "blur") {
      checkDataAvailableProductName(e, i);
    }
  };
  const checkDataAvailableProductName = (e, i) => {
    products.data.forEach((option) => {
      if (option.title === e.target.value) return;
    });
    setInputs((prev) => {
      const array = [...prev];
      array[i].productName.value = "";
      return array;
    });
  };

  const handleQuantityInputChange = (e, quantity, i) => {
    setInputs((prev) => {
      const array = [...prev];
      array[i].quantity.value = e.target.value;
      return array;
    });
    if (quantity.isError) {
      setInputs((prev) => {
        const array = [...prev];
        array[i].quantity.isError = false;
        array[i].quantity.errorMassage = "";
        return array;
      });
    }
  };
  const handleCustomerNameInputChange = (e) => {
    setCustomerName((prev) => {
      const object = { ...prev };
      object.value = e.target.value;
      return object;
    });
    if (customerName.isError) {
      setCustomerName((prev) => {
        const object = { ...prev };
        object.isError = false;
        object.errorMassage = "";
        return object;
      });
    }
  };
  const filterOptionsAutocomplete = (options, state) => {
    let newOptions = [];
    options.forEach((option) => {
      if (
        option
          .replace(",", "")
          .toLowerCase()
          .includes(state.inputValue.toLowerCase())
      )
        newOptions.push(option);
    });
    return newOptions.filter((option) => {
      let isFilter = true;
      inputs.forEach((input) => {
        if (input.productName.value === option) isFilter = false;
      });
      return isFilter;
    });
  };
  const sellProductHandler = () => {
    setShowSellConfirmModal(false);
  };
  const sellButtonHandler = () => {
    const error = validation();
    if (!error) setShowSellConfirmModal(true);
  };
  const validation = () => {
    let error = false;
    inputs.forEach((input, i) => {
      if (!input.quantity.value) {
        setInputs((prev) => {
          const array = [...prev];
          array[i].quantity.isError = true;
          array[i].quantity.errorMassage = "required!";
          return array;
        });
        error = true;
      }
      if (!input.productName.value) {
        setInputs((prev) => {
          const array = [...prev];
          array[i].productName.isError = true;
          array[i].productName.errorMassage = "required!";
          return array;
        });
        error = true;
      }
    });
    if (!customerName.value) {
      setCustomerName((prev) => {
        const object = { ...prev };
        object.isError = true;
        object.errorMassage = "required!";
        return object;
      });
      error = true;
    }
    return error;
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch]);

  const handleSellProduct = () => {
    const values = {
      customer: customerName.value,
      products: inputs.map((product) => ({
        productId: product.productName.productId,
        quantity: product.quantity.value,
      })),
    };

    console.log(values);
    // dispatch(sellProduct())
  };

  console.log(inputs);

  return (
    <div className="px-4 py-3">
      <ConfirmModal
        showModal={showSellConfirmModal}
        closeModal={() => setShowSellConfirmModal(false)}
        title={"Do you want to sell the product?"}
        yesAction={() => {
          handleSellProduct();
          sellProductHandler(false);
        }}
      />

      <Container className="c-bg-2 box-shadow rounded  p-3 overflow-hidden mb-3">
        <TextField
          label="Customer name"
          size="small"
          sx={{ width: "100%" }}
          value={customerName.value}
          onChange={(e) => handleCustomerNameInputChange(e)}
          error={customerName.isError}
          helperText={customerName.errorMassage}
        />
      </Container>
      <Container className="c-bg-2 box-shadow rounded  p-3 overflow-hidden">
        <Stack sx={{ mb: 3, gap: 2 }}>
          {inputs.map(({ productName, quantity }, i) => {
            return (
              <Box sx={{ display: "flex", gap: 2 }} key={i}>
                <Autocomplete
                  options={products.data.map((option) => option.product_name)}
                  filterOptions={(options, state) =>
                    filterOptionsAutocomplete(options, state)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Product Name"
                      error={productName.isError}
                      helperText={productName.errorMassage}
                    />
                  )}
                  size="small"
                  sx={{ width: "100%" }}
                  onInputChange={(e, value) => {
                    handleProductNameInputChange(value, productName, i);
                  }}
                  inputValue={productName.value}
                  freeSolo
                  autoHighlight
                  onClose={(e, reason) => handleProductNameOnBlur(e, reason, i)}
                />
                <TextField
                  value={quantity.value}
                  onChange={(e) => handleQuantityInputChange(e, quantity, i)}
                  label="Quantity"
                  size="small"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  error={quantity.isError}
                  helperText={quantity.errorMassage}
                />
                <Button
                  variant="contained"
                  sx={{
                    minWidth: 32,
                  }}
                  color="error"
                  onClick={() => deleteInput(i)}
                >
                  <Trash style={{ transform: "scale(1.5)" }} />
                </Button>
              </Box>
            );
          })}
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            endIcon={<Cart2 />}
            color="warning"
            sx={{ color: "white" }}
            onClick={sellButtonHandler}
          >
            Sell
          </Button>
          <Button
            variant="contained"
            sx={{
              minWidth: 32,
            }}
            onClick={addInput}
          >
            <Plus style={{ transform: "scale(2)" }} />
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default SellProduct;
