import React from "react";

function IncidentManagement() {
  return (
    <>
      <h5>Incident management</h5>
      <label>Cleared</label>

      <div class="row">
        <div class="col-10">
          {" "}
          <div
            class="progress"
            role="progressar"
            aria-label="Success example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "35px", backgroundColor: "white" }}
          >
            <div
              class="progress-bar bg-success"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
        <div class="col-2">
          <p1>36</p1>
        </div>
      </div>

      <br />
      <label>Not cleared</label>
      <div class="row">
        <div class="col-10">
          <div
            class="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "35px", backgroundColor: "white" }}
          >
            <div class="progress-bar bg-info" style={{ width: "25%" }}></div>
          </div>
        </div>
        <div class="col-2">
          <p1>16</p1>
        </div>
      </div>
    </>
  );
}
export default IncidentManagement;
