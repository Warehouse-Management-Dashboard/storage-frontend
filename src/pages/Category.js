import Button from "@mui/material/Button";
import React from "react";
import { Container, Table } from "react-bootstrap";
import { Tag, Trash } from "react-bootstrap-icons";
const category = [
  { id: 1, category: "electronic" },
  { id: 2, category: "foods" },
  { id: 3, category: "drinks" },
  { id: 4, category: "box" },
  { id: 5, category: "davin" },
];
const Category = () => {
  return (
    <div className="px-4 py-3 vstack gap-3 align-items-center">
      <Container className="c-bg-2 box-shadow rounded  p-0 overflow-hidden">
        <Table responsive className="table-product w-100 m-0 bg-transparent ">
          <thead>
            <tr>
              <th style={{ textAlign: "center", width: 40 }}>No</th>
              <th style={{ width: "100%" }}> Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {category.map(({ id, category }, i) => {
              return (
                <tr>
                  <td>{id}</td>
                  <td>{category}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ minWidth: 0, px: 1 }}
                    >
                      <Trash />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Button variant="contained" endIcon={<Tag />}>
        Add Category
      </Button>
    </div>
  );
};

export default Category;
