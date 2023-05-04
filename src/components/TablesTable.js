import React, { useRef, useState } from "react";
import { Container, Table, ButtonGroup, Button } from "react-bootstrap";
import datas from "../data.json";
import { Pencil, Trash } from "react-bootstrap-icons";
import "../assets/stylesheet/tables.css";
import ConfirmModal from "../modal/ConfirmModal";
import MuiButton from "@mui/material/Button";
import EditModal from "../modal/EditModal";
import { getCapitalize } from "../utils/getCapitalize";
import TablePagination from "./TablePagination";
const TablesTable = () => {
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const dataEditSelected = useRef({});
  const dataDeleteSelected = useRef(" ");
  // delete product
  // 1. open confirm delete modal
  const openDeleteConfirmModal = (data) => {
    dataDeleteSelected.current = data.productName;
    setShowDeleteConfirmModal(true);
  };
  // 2. if yes, delete product
  const deleteProduct = () => {
    console.log("data deleted " + dataDeleteSelected.current);
    setShowDeleteConfirmModal(false);
  };
  // edit product
  const openEditModal = (data) => {
    dataEditSelected.current = data;
    setShowEditModal(true);
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
          dataDeleteSelected.current
        )} ?`}
        yesAction={deleteProduct}
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
            {datas.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{data.productName}</td>
                  <td>{data.productId}</td>
                  <td>{data.category}</td>
                  <td>{data.supplier}</td>
                  <td style={{ textAlign: "center" }}>{data.quantity}</td>
                  <td>{data.orderPrice}</td>
                  <td>{data.sellPrice}</td>
                  <td>{data.totalOrderPrice}</td>
                  <td>{data.totalSellPrice}</td>
                  <td>
                    <div className="d-flex gap-2">
                      {" "}
                      <MuiButton
                        variant="contained"
                        color="warning"
                        j
                        sx={{ minWidth: 0, px: 1 }}
                        onClick={() => openEditModal(data)}
                      >
                        <Pencil />
                      </MuiButton>
                      <MuiButton
                        variant="contained"
                        color="error"
                        sx={{ minWidth: 0, px: 1 }}
                        onClick={() => openDeleteConfirmModal(data)}
                      >
                        <Trash />
                      </MuiButton>
                    </div>
                  </td>
                </tr>
              );
            })}
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
