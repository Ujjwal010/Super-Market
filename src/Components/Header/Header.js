import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className="agileits_header">
        <div className="container">
          <div className="w3l_offers">
            <p>
              SALE UP TO 70% OFF. USE CODE "SALE70%" .
              <Link to="/SpecialProduct">SHOP NOW</Link>
            </p>
          </div>
          <div className="agile-login">
            <ul>
              <li>
                <Link to="/Registration"> Create Account </Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Contact">Help</Link>
              </li>
            </ul>
          </div>
          <div className="product_list_header">
            <input type="hidden" name="cmd" value="_cart" />
            <input type="hidden" name="display" value="1" />
            <button className="w3view-cart" onClick={() => navigate("Cart")}>
              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </button>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="logo_products">
        <div className="container">
          <div className="w3ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>Order online
                or call us : (+0123) 234 567
              </li>
            </ul>
          </div>
          <div className="w3ls_logo_products_left">
            <h1>
              <Link to="/">super Market</Link>
            </h1>
          </div>
          <div className="w3l_search">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                name="Search"
                placeholder="Search for a Product..."
                required=""
              />
              <button
                type="submit"
                className="btn btn-default search"
                aria-label="Left Align"
              >
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
              <div className="clearfix"></div>
            </form>
          </div>

          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
