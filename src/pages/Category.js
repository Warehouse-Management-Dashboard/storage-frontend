import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Tag, Trash } from "react-bootstrap-icons";
import ConfirmModal from "../modal/ConfirmModal";
import { getCapitalize } from "../utils/getCapitalize";
import AddCategoryModal from "../modal/AddCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCategory } from "../redux/slices/productCategoriesSlice";
const categories = [
  { id: 1231, category: "electronic" },
  { id: 25345, category: "foods" },
  { id: 35435, category: "drinks" },
  { id: 443534, category: "box" },
  { id: 5424324, category: "davin" },
];
const Category = () => {
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const dataDeleteSelected = useRef(" ");
  const openDeleteConfirmModal = (data) => {
    dataDeleteSelected.current = data;
    setShowDeleteConfirmModal(true);
  };
  const deleteProduct = () => {
    console.log("data deleted " + dataDeleteSelected.current);
    setShowDeleteConfirmModal(false);
  };

  const dispatch = useDispatch();

  const productCategory = useSelector((state) => state.productCategory);

  useEffect(() => {
    dispatch(fetchProductCategory({}));
  }, [dispatch]);

  return (
    <>
      <AddCategoryModal
        showModal={showAddCategoryModal}
        closeModal={() => setShowAddCategoryModal(false)}
      />
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
                <th style={{}}> Id</th>
                <th style={{ width: "100%" }}> Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productCategory.isLoading ? (
                <span>loading...</span>
              ) : (
                productCategory.data.map((category, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
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
                ))
              )}
            </tbody>
          </Table>
        </Container>
        <Button
          variant="contained"
          endIcon={<Tag />}
          onClick={() => setShowAddCategoryModal(true)}
        >
          Add Category
        </Button>
      </div>
    </>
  );
};

export default Category;
