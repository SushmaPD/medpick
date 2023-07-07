import React from "react";

function Departments() {
  return (
    <>
      <h5>Departments</h5>
      <div class="progress-stacked">
        <div
          class="progress"
          role="progressbar"
          aria-label="Segment one"
          aria-valuenow="15"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "20%" }}
        >
          <div class="progress-bar"></div>
        </div>

        <div
          class="progress"
          role="progressbar"
          aria-label="Segment two"
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "20%" }}
        >
          <div class="progress-bar bg-success"></div>
        </div>

        <div
          class="progress"
          role="progressbar"
          aria-label="Segment three"
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "20%" }}
        >
          <div class="progress-bar bg-info"></div>
        </div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Segment three"
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "20%" }}
        >
          <div class="progress-bar bg-warning"></div>
        </div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Segment three"
          aria-valuenow="20"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "20%" }}
        >
          <div class="progress-bar bg-danger"></div>
        </div>
      </div>
      <br />

      <div class="row">
        {" "}
        <label>Laboratory</label>
        <div class="col-sm-10">
          <div
            class="progress"
            role="progressbar"
            aria-label="Success example"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar " style={{ width: "85%" }}></div>
          </div>
        </div>
        <div class="col-sm-2">91</div>
      </div>

      <br />
      <label>Radiology</label>
      <div class="row">
        <div class="col-sm-10">
          <div
            class="progress"
            role="progressbar"
            aria-label="Info example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-success" style={{ width: "58%" }}></div>
          </div>
        </div>
        <div class="col-sm-2">53</div>
      </div>

      <br />
      <label>ICU</label>
      <div class="row">
        <div class="col-sm-10">
          <div
            class="progress"
            role="progressbar"
            aria-label="Warning example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-info" style={{ width: "98%" }}></div>
          </div>
        </div>
        <div class="col-sm-2">98</div>
      </div>

      <br />
      <label>Operation theater</label>
      <div class="row">
        <div class="col-sm-10">
          {" "}
          <div
            class="progress"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-warning" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div class="col-sm-2">75</div>
      </div>

      <br />
      <label>OPD</label>
      <div class="row">
        <div class="col-sm-10">
          {" "}
          <div
            class="progress"
            role="progressbar"
            aria-label="Danger example"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar bg-danger" style={{ width: "36%" }}></div>
          </div>
        </div>
        <div class="col-sm-2">36</div>
      </div>
    </>
  );
}
export default Departments;
