import React from "react";
import { Navbar } from "../component/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../component/Home/Home";
import RestaurantDetails from "../component/Restsurant/RestaurantDetails";
import Cart from "../component/Cart/Cart";
import Profile from "../component/Profile/Profile";
import Auth from "../component/Auth/Auth";
import PaymentSuccess from "../component/PaymentSuccess/PaymentSuccess";
import Footer from "../component/Footer/Footer";

const CustomerRouter = () => {
  const location = useLocation();
  const excludeNavbarPaths = ["/my-profile/", "/my-profile", "/cart"];

  const shouldRenderFooter = !excludeNavbarPaths.some((path) =>
    location.pathname.startsWith(path)
  );
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route
          path="/restaurant/:city/:title/:id"
          element={<RestaurantDetails />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
        <Route path="/payment/success/:id" element={<PaymentSuccess />} />
      </Routes>
      <Auth />
      {shouldRenderFooter && <Footer />}
    </div>
  );
};

export default CustomerRouter;
