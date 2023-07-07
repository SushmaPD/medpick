import React from "react";
import Sidebar from "./Sidebar";
import TotalIncidentsRecorded from "./TotalIncidentsRecorded";
import Expenses from "./Expenses";
import TotalAssets from "./TotalAssets";
import Departments from "./Departments";
import InService from "./InService";
import Calibrated from "./Calibrated";
import IncidentManagement from "./IncidentManagement";
import NavBar from "./NavBar";

function Home() {
  return (
    <div class="container-fluid pb-5" style={{ backgroundColor: "whitesmoke" }}>
      <div class="row">
        <div class="col-md-1 " style={{ backgroundColor: "#f0f8ff" }}>
          <Sidebar />
        </div>
        <div class="col-md-11">
          <NavBar />
          <div class="row">
            <TotalIncidentsRecorded />
          </div>
          <br />
          <div class="row">
            <div class="col">
              <div
                class="card border-2 rounded-3 p-2"
                style={{ height: "320px" }}
              >
                <Expenses />
              </div>
            </div>
            <div class="col">
              <div
                class="card border-2 rounded-3 p-2"
                style={{ height: "320px" }}
              >
                <InService />
              </div>
            </div>
            <div class="col">
              <div
                class="card border-2 rounded-3 p-2"
                style={{ height: "320px" }}
              >
                <TotalAssets />
              </div>
            </div>
            <div class="col">
              <div
                class="card border-2 rounded-3 p-2"
                style={{ height: "320px" }}
              >
                <IncidentManagement />
              </div>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-sm-1"> </div>
            <div class="col-sm-3 card border-2 rounded-3  ">
              <div className="card-body">
                <Departments />
              </div>
            </div>
            <div class="col-sm-1"> </div>

            <div class="col-sm-5 card border-2 rounded-3 ">
              <div className="card-body">
                <Calibrated />
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
