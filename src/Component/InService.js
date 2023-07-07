import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faScrewdriverWrench);

function InService() {
  return (
    <div>
      <h5>In Service</h5>
      <FontAwesomeIcon
        style={{ color: "#004f95" }}
        icon="fa-solid fa-screwdriver-wrench"
        size="6x"
        className="mt-5"
      />
      <div className="row mt-5">
        <div className="col">
          <h6>Total services</h6>
          <h4>36</h4>
        </div>
        <div className="col">
          <h6>Open services</h6>
          <h4>18</h4>
        </div>
      </div>
    </div>
  );
}
export default InService;
