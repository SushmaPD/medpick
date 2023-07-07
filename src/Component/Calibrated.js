import React from "react";

function Calibrated() {
  return (
    <>
      <div>
        <h5>Calibrated</h5>
        <div class="row">
          <label> Calibrated</label>
          <div class="col-11">
            {" "}
            <div
              class="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ backgroundColor: "white" }}
            >
              <div
                class="progress-bar bg-success"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div class="col-1">36</div>
        </div>

        <br />

        <div class="row">
          <label> Not Calibrated</label>
          <div class="col-11">
            <div
              class="progress"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ backgroundColor: "white" }}
            >
              <div class="progress-bar bg-info" style={{ width: "50%" }}></div>
            </div>
          </div>
          <div class="col-1">16</div>
        </div>

        <br />

        <div class="row">
          <label> Not Required</label>
          <div class="col-11">
            <div
              class="progress"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ backgroundColor: "white" }}
            >
              <div
                class="progress-bar bg-warning"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>
          <div class="col-1">16</div>
        </div>
      </div>
    </>
  );
}
export default Calibrated;
