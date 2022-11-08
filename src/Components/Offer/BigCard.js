import React from "react";
import { useSelector } from "react-redux";
function BigCard(props) {
  const select = useSelector((state) => state.token);
  console.log(select);
  const product = {};

  function handleSubmit(event) {
    event.preventDefault();
    product.productId = event.target[0].value;
    product.priceId = event.target[3].value;
    product.quantity = event.target[1].value;
    console.log(product);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${select}`);
    myHeaders.append("Warehouse-Id", "1");
    myHeaders.append(
      "Api-Key",
      "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      productId: product.productId,
      priceId: product.priceId,
      quantity: product.quantity,
      note: "testing",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="col-md-4 top_brand_left">
      <div className="hover14 column">
        <div className="agile_top_brand_left_grid">
          <div className="agile_top_brand_left_grid_pos">
            <img src="images/offer.png" alt=" " className="img-responsive" />
          </div>
          <div className="agile_top_brand_left_grid1">
            <figure>
              <div className="snipcart-item block">
                <div className="snipcart-thumb">
                  <a href="products.html">
                    <img
                      title=" "
                      alt=" "
                      src={props.image}
                      style={{ height: 150, width: 150 }}
                    />
                  </a>
                  <p
                    style={{
                      height: 63,
                      width: 163.33,
                    }}
                  >
                    {props.title}
                  </p>
                  <div className="stars">
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star blue-star" aria-hidden="true"></i>
                    <i className="fa fa-star gray-star" aria-hidden="true"></i>
                  </div>
                  <h4>
                    {props.sellingPrice} <span>{props.sellingPrice}</span>
                  </h4>
                </div>
                <div className="snipcart-details top_brand_home_details">
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="quantity" value={props.id} />
                    <input type="hidden" name="quantity" value={1} />

                    <input type="hidden" name="item_name" value={props.title} />
                    <input type="hidden" name="amount" value={props.priceId} />

                    <input
                      type="submit"
                      name="submit"
                      value="Add to cart"
                      className="button"
                    />
                  </form>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
