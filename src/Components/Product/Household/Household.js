import React from "react";
import "./Household.css";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";

function Household(props) {
  return (
    <div>
      <BreadCrumbs page="Household" />

      <div className="products">
        <div className="container">
          <Categories />

          <div className="col-md-8 products-right">
            <div className="products-right-grid">
              <div className="products-right-grids">
                <div className="sorting">
                  <select
                    id="country"
                    onchange="change_country(this.value)"
                    className="frm-field required sect"
                  >
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
                  <select
                    id="country1"
                    onchange="change_country(this.value)"
                    className="frm-field required sect"
                  >
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
                title={props.product[4].title}
                sellingPrice={props.product[4].unitPrice[0].sellingPrice}
                markedPrice={props.product[4].unitPrice[0].markedPrice}
                image={props.product[4].images[0].imageName}
                priceId={props.product[4].unitPrice[0].id}
                id={props.product[4].id}
              />
              <Card
                title={props.product[27].title}
                sellingPrice={props.product[27].unitPrice[0].sellingPrice}
                markedPrice={props.product[27].unitPrice[0].markedPrice}
                image={props.product[27].images[0].imageName}
                priceId={props.product[27].unitPrice[0].id}
                id={props.product[27].id}
              />
              <Card
                title={props.product[29].title}
                sellingPrice={props.product[29].unitPrice[0].sellingPrice}
                markedPrice={props.product[29].unitPrice[0].markedPrice}
                image={props.product[29].images[0].imageName}
                priceId={props.product[29].unitPrice[0].id}
                id={props.product[29].id}
              />

              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <Card
                title={props.product[47].title}
                sellingPrice={props.product[47].unitPrice[0].sellingPrice}
                markedPrice={props.product[47].unitPrice[0].markedPrice}
                image={props.product[47].images[0].imageName}
                priceId={props.product[47].unitPrice[0].id}
                id={props.product[47].id}
              />
              <Card
                title={props.product[58].title}
                sellingPrice={props.product[58].unitPrice[0].sellingPrice}
                markedPrice={props.product[58].unitPrice[0].markedPrice}
                image={props.product[58].images[0].imageName}
                priceId={props.product[58].unitPrice[0].id}
                id={props.product[58].id}
              />
              <Card
                title={props.product[63].title}
                sellingPrice={props.product[63].unitPrice[0].sellingPrice}
                markedPrice={props.product[63].unitPrice[0].markedPrice}
                image={props.product[63].images[0].imageName}
                priceId={props.product[63].unitPrice[0].id}
                id={props.product[63].id}
              />

              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <Card
                title={props.product[69].title}
                sellingPrice={props.product[69].unitPrice[0].sellingPrice}
                markedPrice={props.product[69].unitPrice[0].markedPrice}
                image={props.product[69].images[0].imageName}
                priceId={props.product[69].unitPrice[0].id}
                id={props.product[69].id}
              />
              <Card
                title={props.product[70].title}
                sellingPrice={props.product[70].unitPrice[0].sellingPrice}
                markedPrice={props.product[70].unitPrice[0].markedPrice}
                image={props.product[70].images[0].imageName}
                priceId={props.product[70].unitPrice[0].id}
                id={props.product[70].id}
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

export default Household;
