import React, { useRef, useState } from "react";
import { Container, Table, ButtonGroup, Button } from "react-bootstrap";
import datas from "../data.json";
import { CurrencyDollar, Trash } from "react-bootstrap-icons";
import "../assets/stylesheet/tables.css";
import ConfirmModal from "../modal/ConfirmModal";
import IconButton from "@mui/material/IconButton";
import SellModal from "../modal/SellModal";
const TablesTable = () => {
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [showSellModal, setShowSellModal] = useState(false);
  const dataSelected = useRef();
  // delete product
  // 1. open confirm delete modal
  const openDeleteConfirmModal = (data) => {
    dataSelected.current = data;
    setShowDeleteConfirmModal(true);
  };
  // 2. if yes, delete product
  const deleteProduct = () => {
    console.log("data deleted " + dataSelected.current);
    setShowDeleteConfirmModal(false);
  };
  // sell product
  // 1. open sell modal
  const sellButtonHandle = (data) => {
    dataSelected.current = data;
    setShowSellModal(true);
  };
  // 2. sell product
  const sellProduct = (quantity) => {
    console.log("sell product", dataSelected.current, quantity);
    setShowSellModal(false);
  };

  return (
    <>
      <ConfirmModal
        showModal={showDeleteConfirmModal}
        closeModal={() => setShowDeleteConfirmModal(false)}
        title="Are You Sure to Delete?"
        yesAction={deleteProduct}
      />

      <SellModal
        showModal={showSellModal}
        closeModal={() => setShowSellModal(false)}
        yesAction={(quantity) => sellProduct(quantity)}
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
              <th style={{ minWidth: "100px" }}>Price</th>
              <th style={{ minWidth: "100px" }}>Total Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{data.productName}</td>
                  <td>{data.productId}</td>
                  <td>{data.category}</td>
                  <td>{data.supplier}</td>
                  <td style={{ textAlign: "center" }}>{data.quantity}</td>
                  <td>{data.price}</td>
                  <td>{data.totalPrice}</td>
                  <td className="action">
                    <IconButton
                      size="small"
                      onClick={() => sellButtonHandle(data.productId)}
                    >
                      <CurrencyDollar />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => openDeleteConfirmModal(data.productId)}
                    >
                      <Trash />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <ButtonGroup className="table-navigate-button align-self-center">
        <Button>prev</Button>
        <Button className="active">1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>next</Button>
      </ButtonGroup>
    </>
  );
};

export default TablesTable;
