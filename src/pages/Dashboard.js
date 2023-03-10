import React from "react";
import TotalCard from "../components/TotalCard";
import "../assets/stylesheet/chartdashboard.css";
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
  return (
    <div className="p-5">
      <div className="total-container">
        <TotalCard title={"Total Items"} amount={8} />
        <TotalCard
          title={"Total Items Sold"}
          amount={50}
          amountDesc={"This month"}
        />
        <TotalCard
          title={"Total Items Order"}
          amount={35}
          amountDesc={"This month"}
        />
      </div>
      <div className="main-information">
        <div className="chart-container">
          <div className="first-chart ">
            <div className="first-chart-title px-4 pt-3 pb-2">
              <h5>Finance in This Month</h5>
            </div>
            <div className="first-chart-body">
              <div className="first-chart-pie">
                <Pie data={pieData} />
              </div>
              <div className="first-chart-profit">
                <span className="fw-bolder fs-4 text-white">
                  {getPrice(1000000)}
                </span>
                <span className="fs-5">Profit</span>
              </div>
              <div className="first-chart-sold-order">
                <div className="first-chart-sold">
                  <span className="fw-bolder fs-4 text-white">
                    {getPrice(3000000)}
                  </span>
                  <span className="fs-5">Sold</span>
                </div>
                <div className="first-chart-order">
                  <span className="fw-bolder fs-4 text-white">
                    {getPrice(2000000)}
                  </span>
                  <span className="fs-5">Order</span>
                </div>
              </div>
            </div>
          </div>
          <div className="second-chart">
            <div className="second-chart-title px-4 pt-3 pb-2">
              <h5>Finance</h5>
            </div>
            <div className="second-chart-line">
              <Line data={lineData} />;
            </div>
          </div>
        </div>
        <div className="activity-container p-3">
          <h5>Activity Log</h5>
          <div className="d-flex flex-column">
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
            <div className="d-flex mt-3">
              <span>
                <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="mx-3">
                {" "}
                <spa className="text-white fs-6">Add Items "Iphone"</spa>
                <br />
                <span>{moment().format("DD MMMM YYYY, HH:mm")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
