import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";
import { Funnel, FileEarmarkArrowDown } from "react-bootstrap-icons";
import { Button, Container } from "react-bootstrap";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const categorySelection = ["laptop", "smartphone", "smartwatch"];
const sortBySelection = [
  "sort by newest",
  "sort by oldest",
  "sort A to Z",
  "sort Z to A",
];

const TablesAction = () => {
  const [sortBySelect, setSortBySelect] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [filterByName, setFilterByName] = useState("");

  return (
    <Container className="p-3 c-bg-2 box-shadow rounded align-items-center justify-content-end">
      <div className="form-search-container flex-grow-1 w-100">
        <input
          type="text"
          id="filter-by-name"
          placeholder="Filter by Name"
          className="form-search"
          value={filterByName}
          onChange={(e) => setFilterByName(e.target.value)}
        />
        <label htmlFor="filter-by-name" className="form-search-icon">
          <Funnel />
        </label>
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
              {categorySelection.map((item, i) => {
                return (
                  <MenuItem value={item} key={i}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterMoment} className="ms-auto">
            <DatePicker sx={{ "& > div": { height: 40 }, maxWidth: 200 }} />
          </LocalizationProvider>
        </div>

        <Button
          className="button-primary-edit"
          style={{ height: 40, flexShrink: 0 }}
        >
          <span className="pe-2">Export</span>
          <FileEarmarkArrowDown className="d-inline-block" />
        </Button>
      </div>
    </Container>
  );
};

export default TablesAction;
