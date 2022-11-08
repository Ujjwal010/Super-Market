import React from "react";
import "../Groceries/Groceries.css";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";

function PackagedFoods(props) {
  return (
    <div>
      <BreadCrumbs page="Packaged Foods" />

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
                title={props.product[2].title}
                sellingPrice={props.product[2].unitPrice[0].sellingPrice}
                markedPrice={props.product[2].unitPrice[0].markedPrice}
                image={props.product[2].images[0].imageName}
                priceId={props.product[2].unitPrice[0].id}
                id={props.product[2].id}
              />
              <Card
                title={props.product[3].title}
                sellingPrice={props.product[3].unitPrice[0].sellingPrice}
                markedPrice={props.product[3].unitPrice[0].markedPrice}
                image={props.product[3].images[0].imageName}
                priceId={props.product[3].unitPrice[0].id}
                id={props.product[3].id}
              />
              <Card
                title={props.product[9].title}
                sellingPrice={props.product[9].unitPrice[0].sellingPrice}
                markedPrice={props.product[9].unitPrice[0].markedPrice}
                image={props.product[9].images[0].imageName}
                priceId={props.product[9].unitPrice[0].id}
                id={props.product[9].id}
              />

              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <Card
                title={props.product[13].title}
                sellingPrice={props.product[13].unitPrice[0].sellingPrice}
                markedPrice={props.product[13].unitPrice[0].markedPrice}
                image={props.product[13].images[0].imageName}
                priceId={props.product[13].unitPrice[0].id}
                id={props.product[13].id}
              />
              <Card
                title={props.product[17].title}
                sellingPrice={props.product[17].unitPrice[0].sellingPrice}
                markedPrice={props.product[17].unitPrice[0].markedPrice}
                image={props.product[17].images[0].imageName}
                priceId={props.product[17].unitPrice[0].id}
                id={props.product[17].id}
              />
              <Card
                title={props.product[20].title}
                sellingPrice={props.product[20].unitPrice[0].sellingPrice}
                markedPrice={props.product[20].unitPrice[0].markedPrice}
                image={props.product[20].images[0].imageName}
                priceId={props.product[20].unitPrice[0].id}
                id={props.product[20].id}
              />

              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <Card
                title={props.product[25].title}
                sellingPrice={props.product[25].unitPrice[0].sellingPrice}
                markedPrice={props.product[25].unitPrice[0].markedPrice}
                image={props.product[25].images[0].imageName}
                priceId={props.product[25].unitPrice[0].id}
                id={props.product[25].id}
              />
              <Card
                title={props.product[26].title}
                sellingPrice={props.product[26].unitPrice[0].sellingPrice}
                markedPrice={props.product[26].unitPrice[0].markedPrice}
                image={props.product[26].images[0].imageName}
                priceId={props.product[26].unitPrice[0].id}
                id={props.product[26].id}
              />
              <Card
                title={props.product[28].title}
                sellingPrice={props.product[28].unitPrice[0].sellingPrice}
                markedPrice={props.product[28].unitPrice[0].markedPrice}
                image={props.product[28].images[0].imageName}
                priceId={props.product[28].unitPrice[0].id}
                id={props.product[28].id}
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

export default PackagedFoods;
