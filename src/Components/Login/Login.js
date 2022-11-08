import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
/*import { loginToken } from "../../Redux/Login/LoginAction";*/
function Login() {
  /*login css */
  const style = {
    color: "white",
    backgroundColor: "DodgerBlue",
    opacity: 0.5,
    padding: "10px",
    textAlign: "center",
    fontSize: "25px",
    fontFamily: "Arial",
  };
  /*login css */

  const [success, setSuccess] = useState("");
  const [token, setToken] = useState("");

  useSelector((state) => (state.token = token));

  /*form validation*/
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (value) => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Api-Key",
        "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx"
      );

      var formdata = new FormData();
      formdata.append("client_id", "2");
      formdata.append(
        "client_secret",
        "2TJrcyMbXT6gDQXVqeSlRbOKvtTfMsuxfuK6vpey"
      );
      formdata.append("grant_type", "password");
      formdata.append("username", value.email);
      formdata.append("password", value.password);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };
      fetch(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/login",
        requestOptions
      )
        .then((response) => {
          if (!response.ok) {
            throw Error("The user credentials were incorrect.");
          }
          return response.json();
        })

        .then((result) => setToken(result.access_token))
        .then((result) => setSuccess("successfully logged in"))

        .catch((error) => setSuccess(error.message));
    },
  });
  /*form validation*/
  return (
    <div>
      <BreadCrumbs page="Login Page" />
      {success !== "" ? <div style={style}>{success}</div> : null}
      <div className="login">
        <div className="container">
          <h2>Login Form</h2>

          <div
            className="login-form-grids animated wow slideInUp"
            data-wow-delay=".5s"
          >
            <form onSubmit={formik.handleSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                required=" "
                name="email"
                id="email"
                {...formik.getFieldProps("email")}
              />

              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                placeholder="Password"
                required=" "
                name="password"
                id="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <div className="forgot">
                <a href="#">Forgot Password?</a>
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>
          <h4>For New People</h4>
          <p>
            <Link to="/Registration">Register Here</Link> (Or) go back to{" "}
            <Link to="/">
              Home
              <span
                className="glyphicon glyphicon-menu-right"
                aria-hidden="true"
              ></span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
