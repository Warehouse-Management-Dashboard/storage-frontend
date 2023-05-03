import moment from "moment";
import "../assets/stylesheet/activitylog.css";
import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  Button,
  ButtonGroup,
  Spinner,
} from "react-bootstrap";
import datas from "../data.json";
import "../assets/stylesheet/tables.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminLogs } from "../redux/slices/adminLogsSlice";
import { TextField } from "@mui/material";
const action = ["CREATE", "UPDATE", "DELETE"];
const admin = ["davin lim", "davin kyun kyun", "davin kun", "davin saja"];
const ActivityLog = () => {
  const [filterByAction, setFilterByAction] = useState("");
  const [filterByAdmin, setFilterByAdmin] = useState("");

  const [date, setDate] = useState();

  const changeDate = (newDate) => {
    if (newDate) {
      setDate(newDate);
    }
  };

  const dispatch = useDispatch();

  const adminLogs = useSelector((state) => state.adminLogs);

  console.log(adminLogs);

  useEffect(() => {
    dispatch(
      fetchAdminLogs({
        limit: 1000,
        offset: 0,
        action: filterByAction,
        date: date ? moment(date._d).format("YYYY-MM-DD") : "",
      })
    );
  }, [dispatch, filterByAction, date]);

  return (
    <div className="py-3 px-4 vstack gap-3">
      <Container className="vstack gap-3 p-0 ">
        <div className="d-flex justify-content-end p-3 c-bg-2 box-shadow rounded gap-3  flex-wrap">
          <FormControl size="small">
            <InputLabel id="FilterByAdmin-select-label">Admin</InputLabel>
            <Select
              value={filterByAdmin}
              onChange={(e) => setFilterByAdmin(e.target.value)}
              labelId="FilterByAdmin-select-label"
              id="FilterByAdmin-select"
              label="Admin"
              sx={{ minWidth: 120 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {admin.map((item, i) => {
                return (
                  <MenuItem value={item} key={i}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="filterByAction-select-label">Action</InputLabel>
            <Select
              labelId="filterByAction-select-label"
              id="filterByAction-select"
              value={filterByAction}
              onChange={(e) => setFilterByAction(e.target.value)}
              label="Action"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {action.map((item, i) => {
                return (
                  <MenuItem value={item} key={i}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterMoment} className="ms-auto">
            <DatePicker
              sx={{
                "& > div": { height: 40 },
                maxWidth: 200,
              }}
              value={date}
              inputFormat="yyyy/MM/dd"
              views={["year", "month", "day"]}
              mask="____/__/__"
              onChange={changeDate}
            />
          </LocalizationProvider>
        </div>

        {adminLogs.isLoading ? (
          <Spinner />
        ) : (
          <Table
            responsive
            className="table-product w-100 mb-0 c-bg-2 box-shadow rounded overflow-hidden"
          >
            <thead>
              <tr>
                <th style={{ width: "object-fit" }}>No</th>
                <th style={{ minWidth: "100px" }}>Admin</th>
                <th style={{ minWidth: "100px" }}>id</th>
                <th style={{ minWidth: "200px" }}>Date</th>
                <th style={{ minWidth: "100px" }}>Action</th>
                <th style={{ minWidth: "400px" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {adminLogs.data.map((log, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{log.admin.email}</td>
                    <td>{log.admin.id}</td>
                    <td>
                      <span className="fs-6">
                        {moment().format("DD MMMM YYYY, HH:mm")}
                      </span>
                    </td>

                    <td>{log.action_name}</td>
                    <td>{log.action_description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Container>
      <ButtonGroup className="table-navigate-button align-self-center mt-3">
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
