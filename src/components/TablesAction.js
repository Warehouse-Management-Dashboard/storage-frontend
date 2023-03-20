import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import React from "react";
import {
  Funnel,
  FileEarmarkArrowDown,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import { Button, Container, Row, Col } from "react-bootstrap";

const sortBySelection = [
  "sort by newest",
  "sort by oldest",
  "sort A to Z",
  "sort Z to A",
];
const categorySelection = ["laptop", "smartphone", "smartwatch"];
const TablesAction = () => {
  return (
    <Container className="p-3 c-bg-2 box-shadow rounded align-items-center justify-content-end">
      <Row>
        <Col lg="5" sm="8" xs="10" className="align-self-center">
          <div className="form-search-container flex-grow-1 w-100">
            <input
              type="text"
              id="filter-by-name"
              placeholder="Filter by Name"
              className="form-search"
            />
            <label htmlFor="filter-by-name" className="form-search-icon">
              <Funnel />
            </label>
          </div>
        </Col>
        <Col
          lg="7"
          className="gap-3 justify-content-end align-items-center d-none d-lg-flex"
        >
          <FormControl variant="standard" sx={{ minWidth: 120 }} size="small">
            <InputLabel id="sortby-select-label">Sort by</InputLabel>
            <Select
              labelId="sortby-select-label"
              id="sortby-select"
              //   value={age}
              //   onChange={handleChange}
              label="Sort by"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {sortBySelection.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 100 }} size="small">
            <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
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

          <Button className="button-primary-edit">
            <span className="pe-2">Export</span>
            <FileEarmarkArrowDown className="d-inline-block" />
          </Button>
        </Col>
        <Col className=" d-flex justify-content-end align-items-center d-lg-none">
          <div className="p-1  c-bg-hover   rounded">
            <ThreeDotsVertical />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TablesAction;
