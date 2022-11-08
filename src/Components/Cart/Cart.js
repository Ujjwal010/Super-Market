import React, { useEffect, useState } from "react";
import "./Cart.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  /*cart image css */
  const style = {
    height: 61.9,
    width: 61.9,
  };
  /*cart image css */
  const select = useSelector((state) => state.token);
  const [data, setData] = useState("");

  /*fetching cart data*/
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${select}`);
    myHeaders.append("Warehouse-Id", "1");
    myHeaders.append(
      "Api-Key",
      "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://uat.ordering-farmshop.ekbana.net/api/v4/cart",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.data.cartProducts))
      .catch((error) => console.log("error", error));
  }, []);
  /*//fetching cart data ends*/

  /*looping cart data*/
  let cartItem = [];

  for (let i = 0; i < data.length; i++) {
    cartItem.push(
      <tr className="rem1">
        <td className="invert">{i + 1}</td>
        <td className="invert-image">
          <a href="single.html">
            <img
              src={data[i].product.images[0].imageName}
              alt=" "
              className="img-responsive"
              style={style}
            />
          </a>
        </td>
        <td className="invert">
          <div className="quantity">
            <div className="quantity-select">
              <div className="entry value-minus">&nbsp;</div>
              <div className="entry value">
                <span>{data[i].quantity}</span>
              </div>
              <div className="entry value-plus active">&nbsp;</div>
            </div>
          </div>
        </td>
        <td className="invert">{data[i].product.title}</td>

        <td className="invert">{data[i].price}</td>
        <td className="invert">
          <div className="rem">
            <div
              className="close1"
              onClick={() => deleteItem(data[i].product.id)}
            ></div>
          </div>
        </td>
      </tr>
    );
  }

  /*//looping cart data ends*/

  /*deleting cart item*/
  function deleteItem(productId) {
    console.log(productId);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${select}`);
    myHeaders.append(
      "Api-Key",
      "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx"
    );
    var formdata = new FormData();
    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `https://uat.ordering-farmshop.ekbana.net/api/v4/cart-product/${productId}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  /*//deleting cart item ends*/
  return (
    <div>
      <BreadCrumbs page="Checkout Page" />

      <div className="checkout">
        <div className="container">
          <h2>
            Your shopping cart contains: <span></span>
          </h2>
          <div className="checkout-right">
            <table className="timetable_sub">
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Product</th>
                  <th>Quality</th>
                  <th>Product Name</th>

                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              {cartItem}
            </table>
          </div>
          <div className="checkout-left">
            <div className="checkout-right-basket">
              <Link to="/SpecialProduct">
                <span
                  className="glyphicon glyphicon-menu-left"
                  aria-hidden="true"
                ></span>
                Continue Shopping
              </Link>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
