import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import React from "react";
import { FileEarmarkArrowDown } from "react-bootstrap-icons";
import { Button, Container } from "react-bootstrap";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CSVLink } from "react-csv";
const sortBySelection = ["NEWEST", "OLDEST", "A-Z", "Z-A"];

const TablesAction = ({
  sortBySelect,
  setSortBySelect,
  categorySelect,
  setCategorySelect,
  filterByName,
  setFilterByName,
  productCategory,
  products,
  productDatas,
}) => {
  return (
    <Container className="p-3 c-bg-2 box-shadow rounded align-items-center justify-content-end">
      <div className="form-search-container flex-grow-1 w-100">
        <Autocomplete
          options={products.data.map((option) => option.product_name)}
          renderInput={(params) => (
            <TextField {...params} label="Product Name" value={filterByName} />
          )}
          size="small"
          sx={{ width: "100%" }}
          onInputChange={(_, value) => {
            setFilterByName(value);
          }}
          freeSolo
        />
      </div>

      <div className="d-flex justify-content-between mt-3 gap-3 flex-wrap">
        <div className="d-flex gap-3 flex-wrap">
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="sortby-select-label">Sort by</InputLabel>
            <Select
              labelId="sortby-select-label"
              id="sortby-select"
              value={sortBySelect}
              onChange={(e) => setSortBySelect(e.target.value)}
              label="Sort by"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {sortBySelection.map((item, i) => {
                return (
                  <MenuItem value={item} key={i}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              value={categorySelect}
              onChange={(e) => setCategorySelect(e.target.value)}
              labelId="category-select-label"
              id="category-select"
              label="Category"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {productCategory.data.map((item, i) => {
                return (
                  <MenuItem value={item.id} key={i}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {/* <LocalizationProvider dateAdapter={AdapterMoment} className="ms-auto">
            <DatePicker
              sx={{
                "& > div": { height: 40 },
                maxWidth: 200,
              }}
              value={date}
              inputFormat="yyyy/MM/dd"
              views={["year", "month", "day"]}
              mask="____/__/__"
              onChange={changeDate}
            />
          </LocalizationProvider> */}
        </div>

        <Button
          className="button-primary-edit"
          style={{ height: 40, flexShrink: 0 }}
        >
          <CSVLink
            className="pe-2 text-white text-decoration-none"
            data={productDatas}
          >
            Export
          </CSVLink>
          <FileEarmarkArrowDown className="d-inline-block" />
        </Button>
      </div>
    </Container>
  );
};

export default TablesAction;
