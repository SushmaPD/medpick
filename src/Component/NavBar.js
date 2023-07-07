import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCirclePlus);

function NavBar() {
  return (
    <div className="row  mt-2">
      <div className="col-md-6">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      <div className="col-md-2">
        <button type="button" class="btn btn-primary btn-lg">
          <FontAwesomeIcon
            icon="fa-solid fa-circle-plus"
            style={{ marginRight: "3px" }}
          />
          Add new
        </button>
      </div>
      <div className="col-md-2">
        <button type="button" class="btn btn-primary mr-5">
          Sign in
        </button>
      </div>
      <div className="col-md-2">
        <button type="button" class="btn btn-warning">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default NavBar;
