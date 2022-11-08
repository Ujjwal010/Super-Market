import React, { useState } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import "./Registration.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
function Registration() {
  /*registration css */
  const style = {
    color: "white",
    backgroundColor: "DodgerBlue",
    opacity: 0.5,
    padding: "10px",
    textAlign: "center",
    fontSize: "25px",
    fontFamily: "Arial",
  };
  /*//registration css */
  const [success, setSuccess] = useState("");
  /* registration form validation */
  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = "required";
    }
    if (!values.last_name) {
      errors.last_name = "required";
    }
    if (!values.mobile_number) {
      errors.mobile_number = "required";
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
    if (!values.confirm_password) {
      errors.confirm_password = "required";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "password did not matched ";
    }
    if (!values.conditions) {
      errors.conditions = "required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      mobile_number: "",
      email: "",
      password: "",
      confirm_password: "",
      conditions: "",
    },
    validate,
    onSubmit: (values) => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Api-Key",
        "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx"
      );

      var formdata = new FormData();
      formdata.append("first_name", values.first_name);
      formdata.append("last_name", values.last_name);
      formdata.append("email", values.email);
      formdata.append("password", values.confirm_password);
      formdata.append("mobile_number", values.mobile_number);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/auth/signup",
        requestOptions
      )
        .then((response) => {
          if (!response.ok) {
            throw Error("Sorry Unable to Register");
          }
          return response.json();
        })

        .then((result) => setSuccess("Successfully Register"))
        .catch((error) => setSuccess(error.message));
    },
  });
  /* registration form validation */
  return (
    <div>
      <BreadCrumbs page="Register Page" />
      {success !== "" ? <div style={style}>{success}</div> : null}

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

              <input
                type="text"
                placeholder="Phone Number..."
                name="mobile_number"
                id="mobile_number"
                required=" "
                {...formik.getFieldProps("mobile_number")}
              />

              {formik.touched.mobile_number && formik.errors.mobile_number ? (
                <div className="error">{formik.errors.mobile_number}</div>
              ) : null}

              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input type="checkbox" name="subscribe" />
                    <i> </i>Subscribe to Newsletter
                  </label>
                </div>
              </div>
              <h6>Login information</h6>

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
                {...formik.getFieldProps("confirm_password")}
              />

              {formik.touched.confirm_password &&
              formik.errors.confirm_password ? (
                <div className="error">{formik.errors.confirm_password}</div>
              ) : null}

              <div className="register-check-box">
                <div className="check">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      name="conditions"
                      id="conditions"
                      {...formik.getFieldProps("conditions")}
                    />
                    <i> </i>I accept the terms and conditions
                  </label>
                </div>
              </div>
              {formik.touched.conditions && formik.errors.conditions ? (
                <div className="error">{formik.errors.conditions}</div>
              ) : null}
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
