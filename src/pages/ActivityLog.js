import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import "../assets/stylesheet/activitylog.css";

const ActivityLog = () => {
  return (
    <div className="p-5">
      <div className="log-container">
        <table className="p-5 w-100">
          <thead>
            <tr>
              <th style={{ width: "50px" }}></th>
              <th style={{ width: "200px" }}>Admin</th>
              <th style={{ width: "100px" }}>Actions</th>
              <th>Log</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td className="py-3 ">
                <span className="fw-bolder ">Josua Yoprisyanto</span>
                <br />
                <span className="fs-6">
                  {moment().format("DD MMMM YYYY, HH:mm")}
                </span>
              </td>
              <td>UPDATE</td>
              <td>
                Admin with id 2 just assigned "Josua Yoprisyanto" (1203) into
                "PULSE Basketball" activity (18)
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td className="py-3 ">
                <span className="fw-bolder ">Josua Yoprisyanto</span>
                <br />
                <span className="fs-6">
                  {moment().format("DD MMMM YYYY, HH:mm")}
                </span>
              </td>
              <td>UPDATE</td>
              <td>
                Admin with id 2 just assigned "Josua Yoprisyanto" (1203) into
                "PULSE Basketball" activity (18)
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td className="py-3 ">
                <span className="fw-bolder ">Josua Yoprisyanto</span>
                <br />
                <span className="fs-6">
                  {moment().format("DD MMMM YYYY, HH:mm")}
                </span>
              </td>
              <td>CREATE</td>
              <td>
                Admin with id 2 just assigned "Josua Yoprisyanto" (1203) into
                "PULSE Basketball" activity (18)
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td className="py-3 ">
                <span className="fw-bolder ">Josua Yoprisyanto</span>
                <br />
                <span className="fs-6">
                  {moment().format("DD MMMM YYYY, HH:mm")}
                </span>
              </td>
              <td>UPDATE</td>
              <td>
                Admin with id 2 just assigned "Josua Yoprisyanto" (1203) into
                "PULSE Basketball" activity (18)
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td className="py-3 ">
                <span className="fw-bolder ">Josua Yoprisyanto</span>
                <br />
                <span className="fs-6">
                  {moment().format("DD MMMM YYYY, HH:mm")}
                </span>
              </td>
              <td>DELETE</td>
              <td>
                Admin with id 2 just assigned "Josua Yoprisyanto" (1203) into
                "PULSE Basketball" activity (18)
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td className="py-3 ">
                <span className="fw-bolder ">Josua Yoprisyanto</span>
                <br />
                <span className="fs-6">
                  {moment().format("DD MMMM YYYY, HH:mm")}
                </span>
              </td>
              <td>UPDATE</td>
              <td>
                Admin with id 2 just assigned "Josua Yoprisyanto" (1203) into
                "PULSE Basketball" activity (18)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
