import React from "react";
import "./BreadCrumbs.css";
import { Link } from "react-router-dom";
function BreadCrumbs(props) {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <ol className="breadcrumb breadcrumb1">
            <li>
              <Link to="/">
                <span
                  className="glyphicon glyphicon-home"
                  aria-hidden="true"
                ></span>
                Home
              </Link>
            </li>
            <li className="active">{props.page}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbs;
