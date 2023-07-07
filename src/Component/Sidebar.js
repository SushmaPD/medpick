import React from "react";
import vajra from "./../static/Vajra-logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faUsersLine,
  faSitemap,
  faClipboard,
  faRightFromBracket,
  faHeadset,
  faNoteSticky,
  faFilePen,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faHouse,
  faUser,
  faUsersLine,
  faSitemap,
  faClipboard,
  faRightFromBracket,
  faHeadset,
  faNoteSticky,
  faFilePen,
  faSquareCheck
);

function Sidebar() {
  return (
    <>
      <div class="card">
        <div class="card-body">
          <img src={vajra} alt="logo" height="50" />
        </div>
        <div>
          <ul class="nav  mb-4 flex-column">
            <li class="nav-item mt-4">
              <button type="button" class="btn btn-primary">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-house"
                  size="2x"
                />
              </button>
            </li>
            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-user"
                  size="2x"
                />
              </button>
            </li>
            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-users-line"
                  size="2x"
                />
              </button>
            </li>
            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-sitemap"
                  size="2x"
                />
              </button>
            </li>

            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-screwdriver-wrench"
                  size="2x"
                />
              </button>
            </li>
            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-file-pen"
                  size="2x"
                />
              </button>
            </li>
            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-square-check"
                  size="2x"
                />
              </button>
            </li>

            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-headset"
                  size="2x"
                />
              </button>
            </li>
            <li class="nav-item mt-4">
              <button type="button" class="btn btn-light">
                <FontAwesomeIcon
                  style={{ color: "#f78117" }}
                  icon="fa-solid fa-right-from-bracket"
                  size="2x"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
