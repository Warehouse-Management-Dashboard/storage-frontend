import React, { useEffect } from "react";
import TotalCard from "../components/TotalCard";
// import "../assets/stylesheet/chartdashboard.css";
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
import { getPrice } from "../utils/getPrice";
import { pieData } from "../data/PieChart";
import { lineData } from "../data/LineChart";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { Container } from "react-bootstrap";
import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import timelineClasses from "@mui/lab/Timeline";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Dashboard = () => {
  useEffect(() => {
    ChartJS.defaults.borderColor = "#30384f";
    ChartJS.defaults.color = "#8a92a6";
  }, []);

  return (
    <Container className="py-3 px-4">
      <div className="gap-3 d-flex flex-wrap mb-3">
        <TotalCard title={"Sold"} amount={50} amountDesc={"This month"} />
        <TotalCard title={" Order"} amount={35} amountDesc={"This month"} />
        <TotalCard title={"Total Items"} amount={8} />
      </div>

      <Box
        className="d-flex gap-3"
        sx={{ flexDirection: { md: "row", xs: "column" } }}
      >
        <Box>
          <div className="c-bg-2 rounded box-shadow p-3 mb-3 ">
            <div className="bottom-line mb-3">
              <h5 className="h5 ">Finance in This Month</h5>
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
                    <h6>Profit</h6>
                    <span className="h4 text-white  ">{getPrice(1000000)}</span>
                  </span>
                </div>
                <div
                  className="flex-grow-1 d-flex justify-content-center align-items-center flex-fill"
                  style={{ minWidth: 150 }}
                >
                  <span>
                    <h6>Sold</h6>
                    <span className="h4 text-white  ">{getPrice(3000000)}</span>
                  </span>
                </div>
                <div
                  className="flex-grow-1 d-flex justify-content-center align-items-center flex-fill"
                  style={{ minWidth: 200 }}
                >
                  <span>
                    <h6>Order</h6>
                    <span className="h4 text-white  ">{getPrice(2000000)}</span>
                  </span>
                </div>
              </Box>
            </div>
          </div>
          <div className="c-bg-2 rounded box-shadow p-3">
            <div className="bottom-line mb-3">
              <h5 className="h5">Finance in One Year</h5>
            </div>
            <div className="">
              <Line data={lineData} className="w-100" />
            </div>
          </div>
        </Box>
        <Box
          className="c-bg-2 rounded box-shadow flex-grow-1 p-3 align-self-start"
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
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
