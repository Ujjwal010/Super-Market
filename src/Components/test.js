const title = props.product.data[0].title;
const categoryTitle = props.product.data[0].categoryTitle;
const sellingPrice = props.product.data[0].unitPrice.sellingPrice;
const markedPrice = props.product.data[0].unitPrice.markedPrice;
const image = props.product.data[0].images[0].imageName;

title = { title };
categoryTitle = { categoryTitle };
sellingPrice = { sellingPrice };
markedPrice = { markedPrice };
image = { image };

import React from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import "./Registration.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
function Registration() {
  console.log("apple");
  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "required";
    }
    if (!values.last_name) {
      errors.last_name = "required";
    }
    if (!values.subscribe) {
      errors.subscribe = "please check the box";
    }
    if (!values.mobile_number) {
      errors.mobile_number = "enter mobile_number";
    }
    if (!values.email) {
      errors.email = "required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "required";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
    ) {
      errors.password =
        "Minimum eight characters, at least one letter and one number";
    }
    if (!values.conditions) {
      errors.condition = "please check the box";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      subscribe: "",
      mobile_number: "",
      email: "",
      password: "",
      conditions: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <BreadCrumbs page="Register Page" />

      <div className="register">
        <div className="container">
          <h2>Register Here</h2>
          <div className="login-form-grids">
            <h5>profile information</h5>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                placeholder="First Name..."
                name="first_name"
                id="first_name"
                required=" "
                {...formik.getFieldProps("first_name")}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="error">{formik.errors.first_name}</div>
              ) : null}
              <input
                type="text"
                placeholder="Last Name..."
                name="last_name"
                id="last_name"
                required=" "
                {...formik.getFieldProps("last_name")}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="error">{formik.errors.last_name}</div>
              ) : null}

              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="subscribe"
                      id="subscribe"
                      {...formik.getFieldProps("subscribe")}
                    />
                    <i> </i>Subscribe to Newsletter
                  </label>
                  {formik.touched.subscribe && formik.errors.subscribe ? (
                    <div className="error">{formik.errors.subscribe}</div>
                  ) : null}
                </div>
              </div>
              <h6>Login information</h6>

              <input
                type="phone number"
                placeholder="Phone"
                name="mobile_number"
                id="mobile_number"
                required=" "
                {...formik.getFieldProps("mobile_number")}
              />
              {formik.touched.mobile_number && formik.errors.mobile_number ? (
                <div className="error">{formik.errors.mobile_number}</div>
              ) : null}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                required=" "
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                required=" "
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <input
                type="password"
                placeholder="Password Confirmation"
                name="confirm_password"
                required=" "
              />
              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="conditions"
                      id="conditions"
                      {...formik.getFieldProps("condition")}
                    />
                    {formik.touched.conditions && formik.errors.conditions ? (
                      <div className="error">{formik.errors.conditions}</div>
                    ) : null}
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              <input type="submit" value="Register" />
            </form>
          </div>
          <div className="register-home">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

/* import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div>
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
                    <a href="single.html">
                      <img title=" " alt=" " src="images/bv3.png" />
                    </a>
                    <p>{props.title}</p>
                    <h4>
                      {props.sellingPrice}
                      <span>{props.markedPrice}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
                    <form action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="hidden"
                          name="item_name"
                          value="basmati rise"
                        />
                        <input type="hidden" name="amount" value="30.99" />
                        <input
                          type="hidden"
                          name="discount_amount"
                          value="1.00"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"
                          className="button"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
*/

/*beverage
import React, { useState, useEffect } from "react";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
function Beverages(props) {
  console.log(props.product[0].unitPrice[0].sellingPrice);
  const title = props.product[0].title;
  const categoryTitle = props.product[0].categoryTitle;
  const sellingPrice = props.product[0].unitPrice[0].sellingPrice;
  const markedPrice = props.product[0].unitPrice[0].markedPrice;
  const image = props.product[0].images[0].imageName;
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
              />
              <Card
                title={props.product[12].title}
                sellingPrice={props.product[12].unitPrice[0].sellingPrice}
                markedPrice={props.product[12].unitPrice[0].markedPrice}
                image={props.product[12].images[0].imageName}
              />
              <Card
                title={props.product[23].title}
                sellingPrice={props.product[23].unitPrice[0].sellingPrice}
                markedPrice={props.product[23].unitPrice[0].markedPrice}
                image={props.product[23].images[0].imageName}
              />
              <div className="clearfix"> </div>
            </div>

            <div className="agile_top_brands_grids">
              <Card
                title={props.product[37].title}
                sellingPrice={props.product[37].unitPrice[0].sellingPrice}
                markedPrice={props.product[37].unitPrice[0].markedPrice}
                image={props.product[37].images[0].imageName}
              />
              <Card
                title={props.product[41].title}
                sellingPrice={props.product[41].unitPrice[0].sellingPrice}
                markedPrice={props.product[41].unitPrice[0].markedPrice}
                image={props.product[41].images[0].imageName}
              />
              <Card
                title={props.product[56].title}
                sellingPrice={props.product[56].unitPrice[0].sellingPrice}
                markedPrice={props.product[56].unitPrice[0].markedPrice}
                image={props.product[56].images[0].imageName}
              />
              <div className="clearfix"> </div>
            </div>

            <div className="agile_top_brands_grids">
              <Card
                title={props.product[72].title}
                sellingPrice={props.product[72].unitPrice[0].sellingPrice}
                markedPrice={props.product[72].unitPrice[0].markedPrice}
                image={props.product[72].images[0].imageName}
              />
              <Card
                title={props.product[90].title}
                sellingPrice={props.product[90].unitPrice[0].sellingPrice}
                markedPrice={props.product[90].unitPrice[0].markedPrice}
                image={props.product[90].images[0].imageName}
              />
              <Card
                title={props.product[98].title}
                sellingPrice={props.product[98].unitPrice[0].sellingPrice}
                markedPrice={props.product[98].unitPrice[0].markedPrice}
                image={props.product[98].images[0].imageName}
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
 */

Home
import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  return (
    <div>
      <ul id="demo1">
        <li>
          <img src="images/11.jpg" alt="" />

          <div className="slide-desc">
            <h3>Buy Rice Products Are Now On Line With Us</h3>
          </div>
        </li>
        <li>
          <img src="images/22.jpg" alt="" />
          <div className="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>

        <li>
          <img src="images/44.jpg" alt="" />
          <div className="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>
      </ul>

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
                    Advertised offers
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
                    Today Offers
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
                    <h5>Advertised this week</h5>
                    <p className="w3l-ad">
                      We've pulled together all our advertised offers into one
                      place, so you won't miss out on a great deal.
                    </p>
                  </div>
                  <div className="agile_top_brands_grids">
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img title=" " alt=" " src="images/1.png" />
                                  </a>
                                  <p>Tata-salt</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $20.99 <span>$35.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Fortune Sunflower Oil"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="20.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img title=" " alt=" " src="images/2.png" />
                                  </a>
                                  <p>Fortune-sunflower</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $20.99 <span>$35.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="basmati rise"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="20.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img
                                      src="images/3.png"
                                      alt=" "
                                      className="img-responsive"
                                    />
                                  </a>
                                  <p>Aashirvaad-atta</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $40.99 <span>$65.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Pepsi soft drink"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="40.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="agile_top_brands_grids">
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img title=" " alt=" " src="images/4.png" />
                                  </a>
                                  <p>Sampann-toor-dal</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $35.99 <span>$55.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Fortune Sunflower Oil"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="35.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img title=" " alt=" " src="images/5.png" />
                                  </a>
                                  <p>Parryss-sugar</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $30.99 <span>$45.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="basmati rise"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="30.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img
                                      src="images/6.png"
                                      alt=" "
                                      className="img-responsive"
                                    />
                                  </a>
                                  <p>Saffola-gold</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $80.99 <span>$105.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Pepsi soft drink"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="80.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane fade"
                  id="tours"
                  aria-labelledby="tours-tab"
                >
                  <div className="agile-tp">
                    <h5>This week</h5>
                    <p className="w3l-ad">
                      We've pulled together all our advertised offers into one
                      place, so you won't miss out on a great deal.
                    </p>
                  </div>
                  <div className="agile_top_brands_grids">
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img title=" " alt=" " src="images/7.png" />
                                  </a>
                                  <p>Sona-masoori-rice</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $35.99 <span>$55.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Fortune Sunflower Oil"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="35.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img title=" " alt=" " src="images/8.png" />
                                  </a>
                                  <p>Milky-mist-paneer</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $30.99 <span>$45.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="basmati rise"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="30.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img
                                      src="images/9.png"
                                      alt=" "
                                      className="img-responsive"
                                    />
                                  </a>
                                  <p>Basmati-Rice</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $80.99 <span>$105.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Pepsi soft drink"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="80.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="agile_top_brands_grids">
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img
                                      title=" "
                                      alt=" "
                                      src="images/10.png"
                                    />
                                  </a>
                                  <p>Fortune-sunflower</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $20.99 <span>$35.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Fortune Sunflower Oil"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="20.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img
                                      title=" "
                                      alt=" "
                                      src="images/12.png"
                                    />
                                  </a>
                                  <p>Nestle-a-slim</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $20.99 <span>$35.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="basmati rise"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="20.99"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 top_brand_left">
                      <div className="hover14 column">
                        <div className="agile_top_brand_left_grid">
                          <div className="agile_top_brand_left_grid_pos">
                            <img
                              src="images/offer.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </div>
                          <div className="agile_top_brand_left_grid1">
                            <figure>
                              <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                  <a href="products.html">
                                    <img
                                      src="images/13.png"
                                      alt=" "
                                      className="img-responsive"
                                    />
                                  </a>
                                  <p>Bread-sandwich</p>
                                  <div className="stars">
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star blue-star"
                                      aria-hidden="true"
                                    ></i>
                                    <i
                                      className="fa fa-star gray-star"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <h4>
                                    $40.99 <span>$65.00</span>
                                  </h4>
                                </div>
                                <div className="snipcart-details top_brand_home_details">
                                  <form action="#" method="post">
                                    <fieldset>
                                      <input
                                        type="hidden"
                                        name="cmd"
                                        value="_cart"
                                      />
                                      <input
                                        type="hidden"
                                        name="add"
                                        value="1"
                                      />
                                      <input
                                        type="hidden"
                                        name="business"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="item_name"
                                        value="Pepsi soft drink"
                                      />
                                      <input
                                        type="hidden"
                                        name="amount"
                                        value="40.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="discount_amount"
                                        value="1.00"
                                      />
                                      <input
                                        type="hidden"
                                        name="currency_code"
                                        value="USD"
                                      />
                                      <input
                                        type="hidden"
                                        name="return"
                                        value=" "
                                      />
                                      <input
                                        type="hidden"
                                        name="cancel_return"
                                        value=" "
                                      />
                                      <input
                                        type="submit"
                                        name="submit"
                                        value="Add to cart"
                                        className="button"
                                      />
                                    </fieldset>
                                  </form>
                                </div>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <a href="beverages.html">
              <img
                className="first-slide"
                src="images/b1.jpg"
                alt="First slide"
              />
            </a>
          </div>
          <div className="item">
            <a href="personalcare.html">
              <img
                className="second-slide"
                src="images/b3.jpg"
                alt="Second slide"
              />
            </a>
          </div>
          <div className="item">
            <a href="household.html">
              <img
                className="third-slide"
                src="images/b1.jpg"
                alt="Third slide"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="ban-bottom-w3l">
        <div className="container">
          <div className="col-md-6 ban-bottom3">
            <div className="ban-top">
              <img src="images/p2.jpg" className="img-responsive" alt="" />
            </div>
            <div className="ban-img">
              <div className="ban-bottom1">
                <div className="ban-top">
                  <img src="images/p3.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="ban-bottom2">
                <div className="ban-top">
                  <img src="images/p4.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-6 ban-bottom">
            <div className="ban-top">
              <img src="images/111.jpg" className="img-responsive" alt="" />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>

      <div className="brands">
        <div className="container">
          <h3>Brand Store</h3>
          <div className="brands-agile">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-1">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-2">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>

      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="products.html">
                            <img title=" " alt=" " src="images/14.png" />
                          </a>
                          <p>Fried-gram</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $35.99 <span>$55.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="Fortune Sunflower Oil"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="35.99"
                              />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="products.html">
                            <img title=" " alt=" " src="images/15.png" />
                          </a>
                          <p>Navaratan-dal</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $30.99 <span>$45.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="basmati rise"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="30.99"
                              />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="products.html">
                            <img
                              src="images/16.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </a>
                          <p>White-peasmatar</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $80.99 <span>$105.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="Pepsi soft drink"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="80.00"
                              />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 top_brand_left-1">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <a href="products.html">
                            <img title=" " alt=" " src="images/17.png" />
                          </a>
                          <p>Channa-dal</p>
                          <div className="stars">
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star blue-star"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-star gray-star"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <h4>
                            $35.99 <span>$55.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details top_brand_home_details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="Fortune Sunflower Oil"
                              />
                              <input
                                type="hidden"
                                name="amount"
                                value="35.99"
                              />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;



/*home 
import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import BigCard from "./HomeCard/BigCard";
import SmallCard from "./HomeCard/SmallCard";
function Home() {
  return (
    <div>
      <ul id="demo1">
        <li>
          <img src="images/11.jpg" alt="" />

          <div className="slide-desc">
            <h3>Buy Rice Products Are Now On Line With Us</h3>
          </div>
        </li>
        <li>
          <img src="images/22.jpg" alt="" />
          <div className="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>

        <li>
          <img src="images/44.jpg" alt="" />
          <div className="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>
      </ul>

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
                    Advertised offers
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
                    Today Offers
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
                    <h5>Advertised this week</h5>
                    <p className="w3l-ad">
                      We've pulled together all our advertised offers into one
                      place, so you won't miss out on a great deal.
                    </p>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />

                    <div className="clearfix"></div>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />

                    <div className="clearfix"></div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane fade"
                  id="tours"
                  aria-labelledby="tours-tab"
                >
                  <div className="agile-tp">
                    <h5>This week</h5>
                    <p className="w3l-ad">
                      We've pulled together all our advertised offers into one
                      place, so you won't miss out on a great deal.
                    </p>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <div className="clearfix"></div>
                  </div>
                  <div className="agile_top_brands_grids">
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />
                    <BigCard
                      title={props.product[0].title}
                      sellingPrice={props.product[0].unitPrice[0].sellingPrice}
                      markedPrice={props.product[0].unitPrice[0].markedPrice}
                      image={props.product[0].images[0].imageName}
                      priceId={props.product[0].unitPrice[0].id}
                      id={props.product[0].id}
                    />

                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <a href="beverages.html">
              <img
                className="first-slide"
                src="images/b1.jpg"
                alt="First slide"
              />
            </a>
          </div>
          <div className="item">
            <a href="personalcare.html">
              <img
                className="second-slide"
                src="images/b3.jpg"
                alt="Second slide"
              />
            </a>
          </div>
          <div className="item">
            <a href="household.html">
              <img
                className="third-slide"
                src="images/b1.jpg"
                alt="Third slide"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="ban-bottom-w3l">
        <div className="container">
          <div className="col-md-6 ban-bottom3">
            <div className="ban-top">
              <img src="images/p2.jpg" className="img-responsive" alt="" />
            </div>
            <div className="ban-img">
              <div className="ban-bottom1">
                <div className="ban-top">
                  <img src="images/p3.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="ban-bottom2">
                <div className="ban-top">
                  <img src="images/p4.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-6 ban-bottom">
            <div className="ban-top">
              <img src="images/111.jpg" className="img-responsive" alt="" />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>

      <div className="brands">
        <div className="container">
          <h3>Brand Store</h3>
          <div className="brands-agile">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-1">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-2">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>

      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            <SmallCard
              title={props.product[0].title}
              sellingPrice={props.product[0].unitPrice[0].sellingPrice}
              markedPrice={props.product[0].unitPrice[0].markedPrice}
              image={props.product[0].images[0].imageName}
              priceId={props.product[0].unitPrice[0].id}
              id={props.product[0].id}
            />
            <SmallCard
              title={props.product[0].title}
              sellingPrice={props.product[0].unitPrice[0].sellingPrice}
              markedPrice={props.product[0].unitPrice[0].markedPrice}
              image={props.product[0].images[0].imageName}
              priceId={props.product[0].unitPrice[0].id}
              id={props.product[0].id}
            />
            <SmallCard
              title={props.product[0].title}
              sellingPrice={props.product[0].unitPrice[0].sellingPrice}
              markedPrice={props.product[0].unitPrice[0].markedPrice}
              image={props.product[0].images[0].imageName}
              priceId={props.product[0].unitPrice[0].id}
              id={props.product[0].id}
            />
            <SmallCard
              title={props.product[0].title}
              sellingPrice={props.product[0].unitPrice[0].sellingPrice}
              markedPrice={props.product[0].unitPrice[0].markedPrice}
              image={props.product[0].images[0].imageName}
              priceId={props.product[0].unitPrice[0].id}
              id={props.product[0].id}
            />
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
*/
{
  /*<div className="slider-frame">
        <div className="slider-images">
          <div className="img-container">
            <img src="images/11.jpg" alt="" />
            <h1>this is image text</h1>
          </div>
          <div className="img-container">
            <img src="images/22.jpg" alt="" />
            <h1>this is image text</h1>
          </div>
          <div className="img-container">
            <img src="images/44.jpg" alt="" />
            <h1>this is image text</h1>
          </div>
        </div>
  </div>*/
}



import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import BigCard from "./HomeCard/BigCard";
import SmallCard from "./HomeCard/SmallCard";
function Home(props) {
  return (
    <div>
      <ul id="demo1">
        <li>
          <img src="images/11.jpg" alt="" />

          <div className="slide-desc">
            <h3>Buy Rice Products Are Now On Line With Us</h3>
          </div>
        </li>
        <li>
          <img src="images/22.jpg" alt="" />
          <div className="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>

        <li>
          <img src="images/44.jpg" alt="" />
          <div className="slide-desc">
            <h3>Whole Spices Products Are Now On Line With Us</h3>
          </div>
        </li>
      </ul>

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
                    Advertised offers
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
                    Today Offers
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
                    <h5>Advertised this week</h5>
                    <p className="w3l-ad">
                      We've pulled together all our advertised offers into one
                      place, so you won't miss out on a great deal.
                    </p>
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

                    <div className="clearfix"></div>
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

                    <div className="clearfix"></div>
                  </div>
                </div>
                <div
                  role="tabpanel"
                  className="tab-pane fade"
                  id="tours"
                  aria-labelledby="tours-tab"
                >
                  <div className="agile-tp">
                    <h5>This week</h5>
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
                    <div className="clearfix"></div>
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

                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <a href="beverages.html">
              <img
                className="first-slide"
                src="images/b1.jpg"
                alt="First slide"
              />
            </a>
          </div>
          <div className="item">
            <a href="personalcare.html">
              <img
                className="second-slide"
                src="images/b3.jpg"
                alt="Second slide"
              />
            </a>
          </div>
          <div className="item">
            <a href="household.html">
              <img
                className="third-slide"
                src="images/b1.jpg"
                alt="Third slide"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="ban-bottom-w3l">
        <div className="container">
          <div className="col-md-6 ban-bottom3">
            <div className="ban-top">
              <img src="images/p2.jpg" className="img-responsive" alt="" />
            </div>
            <div className="ban-img">
              <div className="ban-bottom1">
                <div className="ban-top">
                  <img src="images/p3.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="ban-bottom2">
                <div className="ban-top">
                  <img src="images/p4.jpg" className="img-responsive" alt="" />
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-md-6 ban-bottom">
            <div className="ban-top">
              <img src="images/111.jpg" className="img-responsive" alt="" />
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>

      <div className="brands">
        <div className="container">
          <h3>Brand Store</h3>
          <div className="brands-agile">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-1">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="brands-agile-2">
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>

            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="col-md-2 w3layouts-brand">
              <div className="brands-w3l">
                <p>
                  <a href="#">Lorem</a>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>

      <div className="newproducts-w3agile">
        <div className="container">
          <h3>New offers</h3>
          <div className="agile_top_brands_grids">
            <SmallCard
              title={props.product[68].title}
              sellingPrice={props.product[68].unitPrice[0].sellingPrice}
              markedPrice={props.product[68].unitPrice[0].markedPrice}
              image={props.product[68].images[0].imageName}
              priceId={props.product[68].unitPrice[0].id}
              id={props.product[68].id}
            />
            <SmallCard
              title={props.product[94].title}
              sellingPrice={props.product[94].unitPrice[0].sellingPrice}
              markedPrice={props.product[94].unitPrice[0].markedPrice}
              image={props.product[94].images[0].imageName}
              priceId={props.product[94].unitPrice[0].id}
              id={props.product[94].id}
            />
            <SmallCard
              title={props.product[60].title}
              sellingPrice={props.product[60].unitPrice[0].sellingPrice}
              markedPrice={props.product[60].unitPrice[0].markedPrice}
              image={props.product[60].images[0].imageName}
              priceId={props.product[60].unitPrice[0].id}
              id={props.product[60].id}
            />
            <SmallCard
              title={props.product[0].title}
              sellingPrice={props.product[0].unitPrice[0].sellingPrice}
              markedPrice={props.product[0].unitPrice[0].markedPrice}
              image={props.product[0].images[0].imageName}
              priceId={props.product[0].unitPrice[0].id}
              id={props.product[0].id}
            />
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
