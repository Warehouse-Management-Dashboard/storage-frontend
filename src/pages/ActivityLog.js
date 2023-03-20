import moment from "moment";
import "../assets/stylesheet/activitylog.css";
import React from "react";
import { Container, Table, Button, ButtonGroup } from "react-bootstrap";
import datas from "../data.json";
import "../assets/stylesheet/tables.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const ActivityLog = () => {
  return (
    <div className="py-3 px-4 vstack gap-3">
      <Container className="c-bg-2 box-shadow rounded  p-0 overflow-hidden">
        <div className="d-flex justify-content-end p-3">
          <LocalizationProvider dateAdapter={AdapterMoment} className="ms-auto">
            <DatePicker />
          </LocalizationProvider>
        </div>

        <Table responsive className="table-product w-100 bg-transparent mb-0">
          <thead>
            <tr>
              <th style={{ width: "object-fit" }}>No</th>
              <th style={{ minWidth: "100px" }}>Admin</th>
              <th style={{ minWidth: "200px" }}>Date</th>
              <th style={{ minWidth: "100px" }}>Action</th>
              <th style={{ minWidth: "400px" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>Davin Lim</td>
                  <td>
                    <span className="fs-6">
                      {moment().format("DD MMMM YYYY, HH:mm")}
                    </span>
                  </td>
                  <td>Update</td>
                  <td>
                    Admin with id 2 just assigned "Josua Yoprisyanto" (1203)
                    into "PULSE Basketball" activity (18)
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
    </div>
  );
};

export default ActivityLog;
