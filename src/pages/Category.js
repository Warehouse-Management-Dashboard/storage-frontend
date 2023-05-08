import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Pen, Tag, Trash } from "react-bootstrap-icons";
import ConfirmModal from "../modal/ConfirmModal";
import { getCapitalize } from "../utils/getCapitalize";
import AddCategoryModal from "../modal/AddCategoryModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductCategory,
  fetchProductCategory,
} from "../redux/slices/productCategoriesSlice";

const Category = () => {
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  const openDeleteConfirmModal = (id, name) => {
    setSelectedCategory({
      id: id,
      name: name,
    });
    setShowDeleteConfirmModal(true);
  };
  const deleteProduct = () => {
    dispatch(deleteProductCategory(selectedCategory.id))
      .unwrap()
      .then(() => {
        console.log("hi");
        setSelectedCategory();
        dispatch(fetchProductCategory({}));
        setShowDeleteConfirmModal(false);
      });
  };

  const updateCategory = (id, name) => {
    setSelectedCategory({
      id: id,
      name: name,
    });
    setShowAddCategoryModal(true);
  };

  const handleCloseConfirmModal = () => {
    setSelectedCategory();
    setShowAddCategoryModal(false);
  };

  const dispatch = useDispatch();

  const productCategory = useSelector((state) => state.productCategory);

  useEffect(() => {
    dispatch(fetchProductCategory({}));
  }, [dispatch]);

  const TableRow = (props) => {
    const { id, name, index } = props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <Button
            variant="contained"
            color="warning"
            sx={{ minWidth: 0, px: 1 }}
            onClick={() => updateCategory(id, name)}
          >
            <Pen />
          </Button>
        </td>
        <td>
          <Button
            variant="contained"
            color="error"
            sx={{ minWidth: 0, px: 1 }}
            onClick={() => openDeleteConfirmModal(id, name)}
          >
            <Trash />
          </Button>
        </td>
      </tr>
    );
  };

  return (
    <>
      <AddCategoryModal
        showModal={showAddCategoryModal}
        closeModal={() => handleCloseConfirmModal()}
        selectedCategory={selectedCategory}
      />
      <ConfirmModal
        showModal={showDeleteConfirmModal}
        closeModal={() => setShowDeleteConfirmModal(false)}
        title={`Are You Sure to Delete ${getCapitalize(
          selectedCategory?.name
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productCategory.isLoading ? (
                <span>loading...</span>
              ) : (
                productCategory.data.map((category, i) => (
                  <TableRow key={category.id} {...category} index={i} />
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
