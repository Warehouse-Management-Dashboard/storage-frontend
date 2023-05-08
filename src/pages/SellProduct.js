import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Cart2, Plus, Trash } from "react-bootstrap-icons";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ConfirmModal from "../modal/ConfirmModal";

const SellProduct = () => {
  const [inputs, setInputs] = useState([
    {
      productName: { value: "", isError: false, errorMassage: "" },
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
    top100Films.forEach((option) => {
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

  return (
    <div className="px-4 py-3">
      <ConfirmModal
        showModal={showSellConfirmModal}
        closeModal={() => setShowSellConfirmModal(false)}
        title={"Do you want to sell the product?"}
        yesAction={() => {
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
                  options={top100Films.map((option) => option.title)}
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
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
export default SellProduct;
