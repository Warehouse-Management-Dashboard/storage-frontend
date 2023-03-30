import Button from "@mui/material/Button";
import React, { useRef, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Tag, Trash } from "react-bootstrap-icons";
import ConfirmModal from "../modal/ConfirmModal";
import { getCapitalize } from "../utils/getCapitalize";
const categories = [
  { id: 1, category: "electronic" },
  { id: 2, category: "foods" },
  { id: 3, category: "drinks" },
  { id: 4, category: "box" },
  { id: 5, category: "davin" },
];
const Category = () => {
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const dataDeleteSelected = useRef(" ");
  const openDeleteConfirmModal = (data) => {
    dataDeleteSelected.current = data;
    setShowDeleteConfirmModal(true);
  };

  const deleteProduct = () => {
    console.log("data deleted " + dataDeleteSelected.current);
    setShowDeleteConfirmModal(false);
  };
  return (
    <>
      <ConfirmModal
        showModal={showDeleteConfirmModal}
        closeModal={() => setShowDeleteConfirmModal(false)}
        title={`Are You Sure to Delete  ${getCapitalize(
          dataDeleteSelected.current.category
        )} ?`}
        yesAction={deleteProduct}
      />
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
              {categories.map((category, i) => {
                return (
                  <tr key={i}>
                    <td>{category.id}</td>
                    <td>{category.category}</td>
                    <td>
                      <Button
                        variant="contained"
                        color="error"
                        sx={{ minWidth: 0, px: 1 }}
                      >
                        <Trash
                          onClick={() => openDeleteConfirmModal(category)}
                        />
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
    </>
  );
};

export default Category;
