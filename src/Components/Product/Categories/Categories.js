import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <div>
      <div className="col-md-4 products-left">
        <div className="categories">
          <h2>Categories</h2>
          <ul className="cate">
            <li>
              <Link to="/SpecialProduct">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                Fruits And Vegetables
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Cuts & Sprouts
                </Link>
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Flowers
                </Link>
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Fresh Herbs & Seasonings
                </Link>
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Fresh Vegetables
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  International Vegetables
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Organic Fruits & Vegetables
                </Link>
              </li>
            </ul>
            <li>
              <Link to="/SpecialProduct">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                Grocery & Staples
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Dals & Pulses
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Dry Fruits
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Edible Oils & Ghee
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Flours & Sooji
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Masalas & Spices
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Organic Staples
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Rice & Rice Products
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Salt, Sugar & Jaggery
                </Link>
              </li>
            </ul>
            <li>
              <Link to="/SpecialProduct">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                PersonalCare
              </Link>
            </li>
            <ul>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Baby Care
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Cosmetics
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Deos & Perfumes
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Skin Care
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Sanitary Needs
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Oral Care
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Personal Hygiene
                </Link>{" "}
              </li>
              <li>
                <Link to="/SpecialProduct">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  Shaving Needs
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
