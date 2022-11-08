import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import { useFormik } from "formik";
function Contact() {
  /*contact css */
  const style = {
    color: "white",
    backgroundColor: "DodgerBlue",
    opacity: 0.5,
    padding: "10px",
    textAlign: "center",
    fontSize: "25px",
    fontFamily: "Arial",
  };
  /*//contact css */
  /* contact form validation */
  const [success, setSuccess] = useState("");
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "required";
    }

    if (!values.contact) {
      errors.contact = "required";
    }
    if (!values.email) {
      errors.email = "required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.subject) {
      errors.subject = "required";
    }
    if (!values.message) {
      errors.message = "required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      var myHeaders = new Headers();
      myHeaders.append("Warehouse-Id", "1");
      myHeaders.append(
        "Api-Key",
        "3uxpudnPFywb4AYZjjpbhOHRV3YMTNscyRF4AiVZi2go6brJMx"
      );
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        message: values.message,

        email: values.email,
        name: values.name,
        subject: values.subject,

        contact: values.contact,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://uat.ordering-farmshop.ekbana.net/api/v4/contact-us",
        requestOptions
      )
        .then((response) => {
          if (!response.ok) {
            throw Error("Sorry Error Occur");
          }
          return response.json();
        })

        .then((result) => setSuccess("Your query has been sent"))
        .catch((error) => setSuccess(error.message));
    },
  });
  /* contact form validation */
  return (
    <div>
      <BreadCrumbs page="Contact" />
      {success !== "" ? <div style={style}>{success}</div> : null}
      <div className="about">
        <div className="w3_agileits_contact_grids">
          <div className="col-md-6 w3_agileits_contact_grid_left">
            <div className="agile_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.3905851087434!2d-34.90500565012194!3d-8.061582082752993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18d90992e4ab%3A0x8e83c4afabe39a3a!2sSport+Club+Do+Recife!5e0!3m2!1sen!2sin!4v1478684415917"
                style={{ border: 0 }}
              ></iframe>
            </div>
            <div className="agileits_w3layouts_map_pos">
              <div className="agileits_w3layouts_map_pos1">
                <h3>Contact Info</h3>
                <p>1234k Avenue, 4th block, New York City.</p>
                <ul className="wthree_contact_info_address">
                  <li>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>+(0123)
                    232 232
                  </li>
                </ul>
                <div className="w3_agile_social_icons w3_agile_social_icons_contact">
                  <ul>
                    <li>
                      <a href="#" className="icon icon-cube agile_facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="icon icon-cube agile_rss"></a>
                    </li>
                    <li>
                      <a href="#" className="icon icon-cube agile_t"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 w3_agileits_contact_grid_right">
            <h2 className="w3_agile_header">
              Leave a<span> Message</span>
            </h2>

            <form onSubmit={formik.handleSubmit}>
              <span className="input input--ichiro">
                <input
                  className="input__field input__field--ichiro"
                  type="text"
                  id="input-25"
                  name="name"
                  placeholder=" "
                  required=""
                  {...formik.getFieldProps("name")}
                />
                <label
                  className="input__label input__label--ichiro"
                  htmlFor="input-25"
                >
                  <span className="input__label-content input__label-content--ichiro">
                    Your Name
                  </span>
                </label>
              </span>
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
              <span className="input input--ichiro">
                <input
                  className="input__field input__field--ichiro"
                  type="email"
                  id="input-26"
                  name="email"
                  placeholder=" "
                  required=""
                  {...formik.getFieldProps("email")}
                />
                <label
                  className="input__label input__label--ichiro"
                  htmlFor="input-26"
                >
                  <span className="input__label-content input__label-content--ichiro">
                    Your Email
                  </span>
                </label>
              </span>
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              <input
                type="text"
                placeholder="contact number"
                name="contact"
                id="contact"
                required=" "
                class="cont-form"
                {...formik.getFieldProps("contact")}
              />
              {formik.touched.contact && formik.errors.contact ? (
                <div className="error">{formik.errors.contact}</div>
              ) : null}
              <input
                type="text"
                placeholder="subject"
                name="subject"
                id="subject"
                class="cont-form"
                required=" "
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="error">{formik.errors.subject}</div>
              ) : null}
              <textarea
                name="message"
                id="message"
                placeholder="Your message here..."
                required=""
                {...formik.getFieldProps("message")}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
              ) : null}
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
