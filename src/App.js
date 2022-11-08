import "bootstrap/dist/css/bootstrap.min.css";
import "./Font-awesome.css/Font-awesome.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Registration from "./Components/Registration/Registration";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import Groceries from "./Components/Product/Groceries/Groceries";
import Household from "./Components/Product/Household/Household";
import PersonalCare from "./Components/Product/PersonalCare/PersonalCare";
import PackagedFoods from "./Components/Product/PackagedFoods/PackagedFoods";
import Beverages from "./Components/Product/Beverages/Beverages";
import Gourmet from "./Components/Product/Gourmet/Gourmet";
import Offer from "./Components/Offer/Offer";
import AboutUs from "./Components/AboutUs/AboutUs";
import ShortCodes from "./Components/ShortCodes/ShortCodes";
import FAQ from "./Components/FAQ/FAQ";
import SpecialProduct from "./Components/Product/SpecialProduct/SpecialProduct";
import Cart from "./Components/Cart/Cart";
import SinglePage from "./Components/SinglePage/SinglePage";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store";
function App() {
  const [product, setProduct] = useState("a");
  var myHeaders = new Headers();
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

  useEffect(() => {
    fetch(
      "https://uat.ordering-farmshop.ekbana.net/api/v4/product?allProduct=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setProduct(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Provider store={store}>
        <Header />
        <Navigation />
        <Routes>
          <Route path="" element={<Home product={product.data} />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="Login" element={<Login />} />
          <Route path="Contact" element={<Contact />} />
          <Route
            path="Groceries"
            element={<Groceries product={product.data} />}
          />
          <Route
            path="Household"
            element={<Household product={product.data} />}
          />
          <Route
            path="PersonalCare"
            element={<PersonalCare product={product.data} />}
          />
          <Route
            path="PackagedFoods"
            element={<PackagedFoods product={product.data} />}
          />
          <Route
            path="Beverages"
            element={<Beverages product={product.data} />}
          />
          <Route path="Gourmet" element={<Gourmet product={product.data} />} />
          <Route path="Offer" element={<Offer product={product.data} />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ShortCodes" element={<ShortCodes />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route
            path="SpecialProduct"
            element={<SpecialProduct product={product.data} />}
          />
          <Route path="Cart" element={<Cart />} />
          <Route path="SinglePage" element={<SinglePage />} />
        </Routes>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
