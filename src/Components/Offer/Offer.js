import React from "react";
import "./Offer.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import BigCard from "./BigCard";
function Offer(props) {
  return (
    <div>
      <BreadCrumbs page="Offers" />

      <div className="top-brands">
        <div className="container">
          <h2>Top selling offers</h2>
          <div className="grid_3 grid_5">
            <div
              className="bs-example bs-example-tabs"
              role="tabpanel"
              data-example-id="togglable-tabs"
            >
              <ul id="myTab" className="nav nav-tabs" role="tablist">
                <li role="presentation" className="active">
                  <a
                    href="#expeditions"
                    id="expeditions-tab"
                    role="tab"
                    data-toggle="tab"
                    aria-controls="expeditions"
                    aria-expanded="true"
                  >
                    All Products
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#tours"
                    role="tab"
                    id="tours-tab"
                    data-toggle="tab"
                    aria-controls="tours"
                  >
                    Daily Offers
                  </a>
                </li>
              </ul>
              <div id="myTabContent" className="tab-content">
                <div
                  role="tabpanel"
                  className="tab-pane fade in active"
                  id="expeditions"
                  aria-labelledby="expeditions-tab"
                >
                  <div className="agile-tp">
                    <h5>All Products</h5>
                    <p className="w3l-ad">
                      We've pulled together all our advertised offers into one
                      place, so you won't miss out on a great deal.
                    </p>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[24].title}
                      sellingPrice={props.product[24].unitPrice[0].sellingPrice}
                      markedPrice={props.product[24].unitPrice[0].markedPrice}
                      image={props.product[24].images[0].imageName}
                      priceId={props.product[24].unitPrice[0].id}
                      id={props.product[24].id}
                    />
                    <BigCard
                      title={props.product[32].title}
                      sellingPrice={props.product[32].unitPrice[0].sellingPrice}
                      markedPrice={props.product[32].unitPrice[0].markedPrice}
                      image={props.product[32].images[0].imageName}
                      priceId={props.product[32].unitPrice[0].id}
                      id={props.product[32].id}
                    />
                    <BigCard
                      title={props.product[43].title}
                      sellingPrice={props.product[43].unitPrice[0].sellingPrice}
                      markedPrice={props.product[43].unitPrice[0].markedPrice}
                      image={props.product[43].images[0].imageName}
                      priceId={props.product[43].unitPrice[0].id}
                      id={props.product[43].id}
                    />

                    <div className="clearfix"> </div>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[30].title}
                      sellingPrice={props.product[30].unitPrice[0].sellingPrice}
                      markedPrice={props.product[30].unitPrice[0].markedPrice}
                      image={props.product[30].images[0].imageName}
                      priceId={props.product[30].unitPrice[0].id}
                      id={props.product[30].id}
                    />
                    <BigCard
                      title={props.product[52].title}
                      sellingPrice={props.product[52].unitPrice[0].sellingPrice}
                      markedPrice={props.product[52].unitPrice[0].markedPrice}
                      image={props.product[52].images[0].imageName}
                      priceId={props.product[52].unitPrice[0].id}
                      id={props.product[52].id}
                    />
                    <BigCard
                      title={props.product[71].title}
                      sellingPrice={props.product[71].unitPrice[0].sellingPrice}
                      markedPrice={props.product[71].unitPrice[0].markedPrice}
                      image={props.product[71].images[0].imageName}
                      priceId={props.product[71].unitPrice[0].id}
                      id={props.product[71].id}
                    />

                    <div className="clearfix"> </div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane fade"
                  id="tours"
                  aria-labelledby="tours-tab"
                >
                  <div className="agile-tp">
                    <h5>Daily Offers</h5>
                    <p className="w3l-ad">
                      We've pulled together all our advertised offers into one
                      place, so you won't miss out on a great deal.
                    </p>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[78].title}
                      sellingPrice={props.product[78].unitPrice[0].sellingPrice}
                      markedPrice={props.product[78].unitPrice[0].markedPrice}
                      image={props.product[78].images[0].imageName}
                      priceId={props.product[78].unitPrice[0].id}
                      id={props.product[78].id}
                    />
                    <BigCard
                      title={props.product[83].title}
                      sellingPrice={props.product[83].unitPrice[0].sellingPrice}
                      markedPrice={props.product[83].unitPrice[0].markedPrice}
                      image={props.product[83].images[0].imageName}
                      priceId={props.product[83].unitPrice[0].id}
                      id={props.product[83].id}
                    />
                    <BigCard
                      title={props.product[93].title}
                      sellingPrice={props.product[93].unitPrice[0].sellingPrice}
                      markedPrice={props.product[93].unitPrice[0].markedPrice}
                      image={props.product[93].images[0].imageName}
                      priceId={props.product[93].unitPrice[0].id}
                      id={props.product[93].id}
                    />
                    <div className="clearfix"> </div>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[48].title}
                      sellingPrice={props.product[48].unitPrice[0].sellingPrice}
                      markedPrice={props.product[48].unitPrice[0].markedPrice}
                      image={props.product[48].images[0].imageName}
                      priceId={props.product[48].unitPrice[0].id}
                      id={props.product[48].id}
                    />
                    <BigCard
                      title={props.product[55].title}
                      sellingPrice={props.product[55].unitPrice[0].sellingPrice}
                      markedPrice={props.product[55].unitPrice[0].markedPrice}
                      image={props.product[55].images[0].imageName}
                      priceId={props.product[55].unitPrice[0].id}
                      id={props.product[55].id}
                    />
                    <BigCard
                      title={props.product[79].title}
                      sellingPrice={props.product[79].unitPrice[0].sellingPrice}
                      markedPrice={props.product[79].unitPrice[0].markedPrice}
                      image={props.product[79].images[0].imageName}
                      priceId={props.product[79].unitPrice[0].id}
                      id={props.product[79].id}
                    />

                    <div className="clearfix"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
