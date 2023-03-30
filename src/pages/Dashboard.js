import React, { useEffect, useState } from "react";
import TotalCard from "../components/TotalCard";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { pieData } from "../data/PieChart";
import { lineData } from "../data/LineChart";
import moment from "moment";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";
import { Cash, GraphDownArrow, GraphUpArrow } from "react-bootstrap-icons";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const YEAR = [2023, 2022, 2021, 2020];
const Dashboard = () => {
  useEffect(() => {
    ChartJS.defaults.borderColor = "#30384f";
    ChartJS.defaults.color = "#8a92a6";
  }, []);
  const [yearSelect, setYearSelect] = useState();
  const [monthSelect, setMonthSelect] = useState();
  return (
    <Container className="py-3 px-4">
      <div className="gap-3 d-flex flex-wrap mb-3">
        <TotalCard
          title={"Sold"}
          price={3000000}
          Icon={GraphDownArrow}
          color="success.main"
        />
        <TotalCard
          title={"Order"}
          price={2000000}
          Icon={GraphUpArrow}
          color="error.main"
        />
        <TotalCard
          title={"Profit"}
          price={2000000}
          Icon={Cash}
          color="primary.main"
        />
      </div>

      <Box
        className="d-flex gap-3"
        sx={{ flexDirection: { md: "row", xs: "column" } }}
      >
        <Box>
          <div className="c-bg-2 rounded box-shadow p-3 mb-3 ">
            <div className="bottom-line mb-3 d-flex justify-content-between align-items-center ">
              <h5 className="h5 ">Product Report</h5>
              <FormControl
                sx={{ minWidth: 120, transform: "translateY(-8px)" }}
                size="small"
              >
                <InputLabel id="month-select-label">Month</InputLabel>
                <Select
                  labelId="month-select-label"
                  id="month-select"
                  value={monthSelect}
                  onChange={(e) => setMonthSelect(e.target.value)}
                  label="Month"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {MONTH.map((item, i) => {
                    return (
                      <MenuItem value={item} key={i}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div>
              <Box
                className=" d-flex justify-content-center  bottom-line pb-3"
                sx={{ height: 300 }}
              >
                <Pie data={pieData} className="h-100" />
              </Box>

              <Box
                className=" d-flex  gap-3   align-items-center mt-3 flex-wrap"
                sx={{ minWidth: 150 }}
              >
                <div
                  className="flex-grow-1 d-flex justify-content-center align-items-center flex-fill"
                  style={{ minWidth: 150 }}
                >
                  <span>
                    <h6>Product Total</h6>
                    <h4 className="h4 text-white text-center ">100</h4>
                  </span>
                </div>
                <div
                  className="flex-grow-1 d-flex justify-content-center align-items-center flex-fill"
                  style={{ minWidth: 150 }}
                >
                  <span>
                    <h6>Product Sold</h6>
                    <h4 className="h4 text-white text-center ">300</h4>
                  </span>
                </div>
                <div
                  className="flex-grow-1 d-flex justify-content-center align-items-center flex-fill"
                  style={{ minWidth: 200 }}
                >
                  <span>
                    <h6>Product Ordered</h6>
                    <h4 className="h4 text-white  text-center">200</h4>
                  </span>
                </div>
              </Box>
            </div>
          </div>
          <div className="c-bg-2 rounded box-shadow p-3">
            <div className="bottom-line mb-3 d-flex justify-content-between align-items-center">
              <h5 className="h5">Finance Report</h5>
              <FormControl
                sx={{ minWidth: 120, transform: "translateY(-8px)" }}
                size="small"
              >
                <InputLabel id="year-select-label">Year</InputLabel>
                <Select
                  labelId="year-select-label"
                  id="year-select"
                  value={yearSelect}
                  onChange={(e) => setYearSelect(e.target.value)}
                  label="Year"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {YEAR.map((item, i) => {
                    return (
                      <MenuItem value={item} key={i}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="">
              <Line data={lineData} className="w-100" />
            </div>
          </div>
        </Box>
        <Box
          className="c-bg-2 rounded box-shadow flex-grow-1 p-3 align-self-start d-flex flex-column"
          sx={{ minWidth: "250px", width: { xs: "100%", md: "auto" } }}
        >
          <div className="bottom-line">
            <h5>Activity Log</h5>
          </div>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <span className="text-white fs-6">Add Items "Iphone"</span>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <span className="text-white fs-6">Add Items "Iphone"</span>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <span className="text-white fs-6">Add Items "Iphone"</span>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <span className="text-white fs-6">Add Items "Iphone"</span>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <span className="text-white fs-6">Add Items "Iphone"</span>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <span className="text-white fs-6">Add Items "Iphone"</span>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <span className="text-white fs-6">Add Items "Iphone"</span>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          <Link
            to="/activity-log"
            style={{ alignSelf: "center", textDecoration: "none" }}
          >
            <Button>SEE MORE</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
