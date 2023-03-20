import React from "react";
import { Container, Table, ButtonGroup, Button } from "react-bootstrap";
import datas from "../data.json";
import { Pencil, Trash } from "react-bootstrap-icons";
import "../assets/stylesheet/tables.css";
const TablesTable = () => {
  return (
    <>
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
                    <Pencil className="me-2" />
                    <Trash />
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
