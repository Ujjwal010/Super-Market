import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <div className="navigation-agileits">
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header nav_2">
              <button
                type="button"
                className="navbar-toggle collapsed navbar-toggle1"
                data-toggle="collapse"
                data-target="#bs-megadropdown-tabs"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/" className="act">
                    Home
                  </Link>
                </li>

                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    DryFruit<b className="caret"></b>
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>DryFruit</h6>
                          <li>
                            <Link to="/Groceries">DryFruit</Link>
                          </li>
                          <li>
                            <Link to="/Groceries">DryFruit</Link>
                          </li>
                          <li>
                            <Link to="/Groceries">DryFruit</Link>
                          </li>
                          <li>
                            <Link to="/Groceries">DryFruit</Link>
                          </li>
                          <li>
                            <Link to="/Groceries"> DryFruit </Link>
                          </li>
                          <li>
                            <Link to="/Groceries">DryFruit</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Eats Nepal<b className="caret"></b>
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>Eats Nepal</h6>
                          <li>
                            <Link to="/Household">Eats Nepal</Link>
                          </li>
                          <li>
                            <Link to="/Household">Eats Nepal</Link>
                          </li>
                          <li>
                            <Link to="/Household">Eats Nepal</Link>
                          </li>
                          <li>
                            <Link to="/Household">Eats Nepal</Link>
                          </li>
                          <li>
                            <Link to="/Household"> Eats Nepal </Link>
                          </li>
                          <li>
                            <Link to="/Household">Eats Nepal</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Chicken<b className="caret"></b>
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>Chicken</h6>
                          <li>
                            <Link to="/PersonalCare">Chicken</Link>
                          </li>
                          <li>
                            <Link to="/PersonalCare">Chicken</Link>
                          </li>
                          <li>
                            <Link to="/PersonalCare">Chicken</Link>
                          </li>
                          <li>
                            <Link to="/PersonalCare">Chicken</Link>
                          </li>
                          <li>
                            <Link to="/PersonalCare">Chicken</Link>
                          </li>
                          <li>
                            <Link to="/PersonalCare">Chicken</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Piano Express<b className="caret"></b>
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>Piano Express</h6>
                          <li>
                            <Link to="/PackagedFoods">Piano Express</Link>
                          </li>
                          <li>
                            <Link to="/PackagedFoods">Piano Express</Link>
                          </li>
                          <li>
                            <Link to="/PackagedFoods">Piano Express</Link>
                          </li>
                          <li>
                            <Link to="/PackagedFoods">Piano Express</Link>
                          </li>
                          <li>
                            <Link to="/PackagedFoods"> Piano Express</Link>
                          </li>
                          <li>
                            <Link to="/PackagedFoods">Piano Express</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Seed<b className="caret"></b>
                  </Link>
                  <ul className="dropdown-menu multi-column columns-3">
                    <div className="row">
                      <div className="multi-gd-img">
                        <ul className="multi-column-dropdown">
                          <h6>Seed</h6>
                          <li>
                            <Link to="/Beverages">Seed</Link>
                          </li>
                          <li>
                            <Link to="/Beverages">Seed</Link>
                          </li>
                          <li>
                            <Link to="/Beverages">Seed</Link>
                          </li>
                          <li>
                            <Link to="/Beverages">Seed</Link>
                          </li>
                          <li>
                            <Link to="/Beverages">Seed</Link>
                          </li>
                          <li>
                            <Link to="/Beverages">Seed</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                </li>
                <li>
                  <Link to="/Gourmet">Milk</Link>
                </li>
                <li>
                  <Link to="/Offer">Offers</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
