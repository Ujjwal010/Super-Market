import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="w3_footer_grids">
            <div className="col-md-3 w3_footer_grid">
              <h3>Contact</h3>

              <ul className="address">
                <li>
                  <i
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  ></i>
                  1234k Avenue, 4th block, <span>New York City.</span>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <Link to="/">info@example.com</Link>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  +1234 567 567
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Information</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Contact">Contact Us</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="ShortCodes">Short Codes</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/FAQ">FAQ's</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/SpecialProduct">Special Products</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Category</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Groceries">Groceries</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Household">Household</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/PersonalCare">Personal Care</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/PackagedFoods">Packaged Foods</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Beverages">Beverages</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 w3_footer_grid">
              <h3>Profile</h3>
              <ul className="info">
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/SpecialProduct">Store</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Cart">My Cart</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Login">Login</Link>
                </li>
                <li>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <Link to="/Registration">Create Account</Link>
                </li>
              </ul>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>

        <div className="footer-copy">
          <div className="container">
            <p>
              © 2017 Super Market. All rights reserved | Design by{" "}
              <Link to="/">W3layouts</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-botm">
        <div className="container">
          <div className="w3layouts-foot">
            <ul>
              <li>
                <Link to="#" className="w3_agile_facebook">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="agile_twitter">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="w3_agile_dribble">
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="w3_agile_vimeo">
                  <i className="fa fa-vimeo" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="payment-w3ls">
            <img src="images/card.png" alt=" " className="img-responsive" />
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
