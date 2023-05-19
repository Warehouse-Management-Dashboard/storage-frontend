import React, { useRef, useState } from "react";
import { Container, Table } from "react-bootstrap";
import datas from "../data.json";
import { Pencil, Trash } from "react-bootstrap-icons";
import "../assets/stylesheet/tables.css";
import ConfirmModal from "../modal/ConfirmModal";
import MuiButton from "@mui/material/Button";
import EditModal from "../modal/EditModal";
import { getCapitalize } from "../utils/getCapitalize";
import { getPrice } from "../utils/getPrice";
import { Pagination } from "@mui/material";
import TablePagination from "./TablePagination";
import { useDispatch } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/slices/productsSlice";

const TablesTable = ({ products }) => {
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const dataEditSelected = useRef({});
  const dataDeleteSelected = useRef(" ");

  const dispatch = useDispatch();
  // delete product
  // 1. open confirm delete modal
  const openDeleteConfirmModal = (data) => {
    dataDeleteSelected.current = data;
    setShowDeleteConfirmModal(true);
  };
  // 2. if yes, delete product
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(dataDeleteSelected.current.id))
      .unwrap()
      .then(() => {
        dispatch(fetchProducts({}));
        setShowDeleteConfirmModal(false);
      });
  };
  // edit product
  const openEditModal = (data) => {
    dataEditSelected.current = data;
    setShowEditModal(true);
  };

  const TableRow = (props) => {
    const {
      index,
      product_name,
      order_price,
      sell_price,
      quantity,
      product_category,
      id,
      supplier,
      total_order_price,
      total_sell_price,
    } = props;

    return (
      <tr>
        <td>{index + 1}</td>

        <td>{product_name}</td>
        <td>{id}</td>
        <td>{product_category?.name}</td>
        <td>{supplier}</td>
        <td style={{ textAlign: "center" }}>{quantity}</td>
        <td>{getPrice(order_price)}</td>
        <td>{getPrice(sell_price)}</td>
        <td>{getPrice(total_order_price)}</td>
        <td>{getPrice(total_sell_price)}</td>
        <td>
          <div className="d-flex gap-2">
            {" "}
            <MuiButton
              variant="contained"
              color="warning"
              j
              sx={{ minWidth: 0, px: 1 }}
              onClick={() => openEditModal(props)}
            >
              <Pencil />
            </MuiButton>
            <MuiButton
              variant="contained"
              color="error"
              sx={{ minWidth: 0, px: 1 }}
              onClick={() => openDeleteConfirmModal(props)}
            >
              <Trash />
            </MuiButton>
          </div>
        </td>
      </tr>
    );
  };

  //---------table pagination------------//
  const [currentPage, setCurrentPage] = useState(5);
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ConfirmModal
        showModal={showDeleteConfirmModal}
        closeModal={() => setShowDeleteConfirmModal(false)}
        title={`Are You Sure to Delete  ${getCapitalize(
          dataDeleteSelected.current.product_name
        )} ?`}
        yesAction={handleDeleteProduct}
      />
      <EditModal
        showModal={showEditModal}
        closeModal={() => setShowEditModal(false)}
        data={dataEditSelected.current}
      />
      <Container className="c-bg-2 box-shadow rounded  p-0 overflow-hidden">
        <Table responsive className="table-product w-100 m-0 bg-transparent ">
          <thead>
            <tr>
              <th>No</th>
              <th style={{ minWidth: "150px" }}>Product Name</th>
              <th style={{ minWidth: "90px" }}>Product Id</th>
              <th style={{ minWidth: "100px" }}>Category</th>
              <th style={{ minWidth: "100px" }}>Supplier</th>
              <th>Quantity</th>
              <th style={{ minWidth: "100px" }}>Order Price</th>
              <th style={{ minWidth: "100px" }}>Sell Price</th>
              <th style={{ minWidth: "100px" }}>Total Order Price</th>
              <th style={{ minWidth: "100px" }}>Total Sell Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.data.map((data, i) => (
              <TableRow key={i} {...data} index={i} />
            ))}
          </tbody>
        </Table>
      </Container>

      <TablePagination
        totalPages={30}
        currentPage={currentPage}
        onPageChange={(pageNumber) => handleChangePage(pageNumber)}
      />
    </>
  );
};

export default TablesTable;
