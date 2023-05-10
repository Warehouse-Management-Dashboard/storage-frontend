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
import { getPieData } from "../data/PieChart";
import { getLineData } from "../data/LineChart";
import moment from "moment";
import { Container, Spinner } from "react-bootstrap";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchOverview } from "../redux/slices/overviewSlice";
import { fetchAdminLogs } from "../redux/slices/adminLogsSlice";

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
  const dispatch = useDispatch();

  const overviews = useSelector((state) => state.overviews);
  const adminLogs = useSelector((state) => state.adminLogs);

  const cardData = overviews.data.cardData;
  const financeReport = overviews.data.financeReport;
  const productReport = overviews.data.productReport;

  useEffect(() => {
    dispatch(fetchOverview({}));
    dispatch(
      fetchAdminLogs({
        limit: 10,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    ChartJS.defaults.borderColor = "#30384f";
    ChartJS.defaults.color = "#8a92a6";
  }, []);
  const [yearSelect, setYearSelect] = useState();
  const [monthSelect, setMonthSelect] = useState();

  if (overviews.isLoading) {
    return <Spinner />;
  }

  return (
    <Container className="py-3 px-4">
      <div className="gap-3 d-flex flex-wrap mb-3">
        <TotalCard
          title={"Sold"}
          price={cardData.totalSold}
          Icon={GraphUpArrow}
          color="success.main"
        />
        <TotalCard
          title={"Order"}
          price={cardData.totalOrdered}
          Icon={GraphDownArrow}
          color="error.main"
        />
        <TotalCard
          title={"Profit"}
          price={cardData.profit}
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
                <Pie data={getPieData(productReport)} className="h-100" />
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
                    <h4 className="h4 text-white text-center ">
                      {productReport.total}
                    </h4>
                  </span>
                </div>
                <div
                  className="flex-grow-1 d-flex justify-content-center align-items-center flex-fill"
                  style={{ minWidth: 150 }}
                >
                  <span>
                    <h6>Product Sold</h6>
                    <h4 className="h4 text-white text-center ">
                      {productReport.sold}
                    </h4>
                  </span>
                </div>
                <div
                  className="flex-grow-1 d-flex justify-content-center align-items-center flex-fill"
                  style={{ minWidth: 200 }}
                >
                  <span>
                    <h6>Product Ordered</h6>
                    <h4 className="h4 text-white  text-center">
                      {productReport.order}
                    </h4>
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
              <Line data={getLineData(financeReport)} className="w-100" />
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
            style={{ height: 785, overflow: "auto" }}
          >
            {adminLogs.data.map((logs, i) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <span className="text-white fs-6">
                    {logs.action_description}
                  </span>
                  <br />
                  <span>
                    {moment(logs.created_at).format("DD MMMM YYYY, HH:mm")}
                  </span>
                </TimelineContent>
              </TimelineItem>
            ))}
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
