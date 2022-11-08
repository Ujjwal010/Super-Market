import React from "react";
import "./Groceries";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
function DryFruit(props) {
  return (
    <div>
      <BreadCrumbs page="Groceries" />

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
                title={props.product[1].title}
                sellingPrice={props.product[1].unitPrice[0].sellingPrice}
                markedPrice={props.product[1].unitPrice[0].markedPrice}
                image={props.product[1].images[0].imageName}
                priceId={props.product[1].unitPrice[0].id}
                id={props.product[1].id}
              />
              <Card
                title={props.product[6].title}
                sellingPrice={props.product[6].unitPrice[0].sellingPrice}
                markedPrice={props.product[6].unitPrice[0].markedPrice}
                image={props.product[6].images[0].imageName}
                priceId={props.product[6].unitPrice[0].id}
                id={props.product[6].id}
              />
              <Card
                title={props.product[8].title}
                sellingPrice={props.product[8].unitPrice[0].sellingPrice}
                markedPrice={props.product[8].unitPrice[0].markedPrice}
                image={props.product[8].images[0].imageName}
                priceId={props.product[8].unitPrice[0].id}
                id={props.product[8].id}
              />

              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <Card
                title={props.product[14].title}
                sellingPrice={props.product[14].unitPrice[0].sellingPrice}
                markedPrice={props.product[14].unitPrice[0].markedPrice}
                image={props.product[14].images[0].imageName}
                priceId={props.product[14].unitPrice[0].id}
                id={props.product[14].id}
              />
              <Card
                title={props.product[16].title}
                sellingPrice={props.product[16].unitPrice[0].sellingPrice}
                markedPrice={props.product[16].unitPrice[0].markedPrice}
                image={props.product[16].images[0].imageName}
                priceId={props.product[16].unitPrice[0].id}
                id={props.product[16].id}
              />
              <Card
                title={props.product[19].title}
                sellingPrice={props.product[19].unitPrice[0].sellingPrice}
                markedPrice={props.product[19].unitPrice[0].markedPrice}
                image={props.product[19].images[0].imageName}
                priceId={props.product[19].unitPrice[0].id}
                id={props.product[19].id}
              />

              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <Card
                title={props.product[22].title}
                sellingPrice={props.product[22].unitPrice[0].sellingPrice}
                markedPrice={props.product[22].unitPrice[0].markedPrice}
                image={props.product[22].images[0].imageName}
                priceId={props.product[22].unitPrice[0].id}
                id={props.product[22].id}
              />
              <Card
                title={props.product[34].title}
                sellingPrice={props.product[34].unitPrice[0].sellingPrice}
                markedPrice={props.product[34].unitPrice[0].markedPrice}
                image={props.product[34].images[0].imageName}
                priceId={props.product[34].unitPrice[0].id}
                id={props.product[34].id}
              />
              <Card
                title={props.product[36].title}
                sellingPrice={props.product[36].unitPrice[0].sellingPrice}
                markedPrice={props.product[36].unitPrice[0].markedPrice}
                image={props.product[36].images[0].imageName}
                priceId={props.product[36].unitPrice[0].id}
                id={props.product[36].id}
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

export default DryFruit;
