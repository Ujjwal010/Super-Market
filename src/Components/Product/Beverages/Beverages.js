import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
function Beverages(props) {
  return (
    <div>
      <BreadCrumbs page="Beverages" />

      <div className="products">
        <div className="container">
          <Categories />

          <div className="col-md-8 products-right">
            <div className="products-right-grid">
              <div className="products-right-grids">
                <div className="sorting">
                  <select id="country" className="frm-field required sect">
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      Default sorting
                    </option>
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      Sort by popularity
                    </option>
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      Sort by average rating
                    </option>
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      Sort by price
                    </option>
                  </select>
                </div>
                <div className="sorting-left">
                  <select id="country1" className="frm-field required sect">
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      Item on page 9
                    </option>
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      Item on page 18
                    </option>
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      Item on page 32
                    </option>
                    <option value="null">
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      All
                    </option>
                  </select>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>

            <div className="agile_top_brands_grids">
              <Card
                title={props.product[0].title}
                sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                markedPrice={props.product[0].unitPrice[0].markedPrice}
                image={props.product[0].images[0].imageName}
                priceId={props.product[0].unitPrice[0].id}
                id={props.product[0].id}
              />
              <Card
                title={props.product[12].title}
                sellingPrice={props.product[12].unitPrice[0].sellingPrice}
                markedPrice={props.product[12].unitPrice[0].markedPrice}
                image={props.product[12].images[0].imageName}
                priceId={props.product[12].unitPrice[0].id}
                id={props.product[12].id}
              />
              <Card
                title={props.product[23].title}
                sellingPrice={props.product[23].unitPrice[0].sellingPrice}
                markedPrice={props.product[23].unitPrice[0].markedPrice}
                image={props.product[23].images[0].imageName}
                priceId={props.product[23].unitPrice[0].id}
                id={props.product[23].id}
              />
              <div className="clearfix"> </div>
            </div>

            <div className="agile_top_brands_grids">
              <Card
                title={props.product[37].title}
                sellingPrice={props.product[37].unitPrice[0].sellingPrice}
                markedPrice={props.product[37].unitPrice[0].markedPrice}
                image={props.product[37].images[0].imageName}
                priceId={props.product[37].unitPrice[0].id}
                id={props.product[37].id}
              />
              <Card
                title={props.product[41].title}
                sellingPrice={props.product[41].unitPrice[0].sellingPrice}
                markedPrice={props.product[41].unitPrice[0].markedPrice}
                image={props.product[41].images[0].imageName}
                priceId={props.product[41].unitPrice[0].id}
                id={props.product[41].id}
              />
              <Card
                title={props.product[56].title}
                sellingPrice={props.product[56].unitPrice[0].sellingPrice}
                markedPrice={props.product[56].unitPrice[0].markedPrice}
                image={props.product[56].images[0].imageName}
                priceId={props.product[56].unitPrice[0].id}
                id={props.product[56].id}
              />
              <div className="clearfix"> </div>
            </div>

            <div className="agile_top_brands_grids">
              <Card
                title={props.product[72].title}
                sellingPrice={props.product[72].unitPrice[0].sellingPrice}
                markedPrice={props.product[72].unitPrice[0].markedPrice}
                image={props.product[72].images[0].imageName}
                priceId={props.product[72].unitPrice[0].id}
                id={props.product[72].id}
              />
              <Card
                title={props.product[90].title}
                sellingPrice={props.product[90].unitPrice[0].sellingPrice}
                markedPrice={props.product[90].unitPrice[0].markedPrice}
                image={props.product[90].images[0].imageName}
                priceId={props.product[90].unitPrice[0].id}
                id={props.product[90].id}
              />
              <Card
                title={props.product[98].title}
                sellingPrice={props.product[98].unitPrice[0].sellingPrice}
                markedPrice={props.product[98].unitPrice[0].markedPrice}
                image={props.product[98].images[0].imageName}
                priceId={props.product[98].unitPrice[0].id}
                id={props.product[98].id}
              />
              <div className="clearfix"> </div>
            </div>

            <nav className="numbering">
              <ul className="pagination paging">
                <li>
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    1<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}
export default Beverages;
