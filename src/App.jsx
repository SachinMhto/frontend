import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import { Navbar } from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restsurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRouter from "./Routers/CustomerRouter";
import { useEffect } from "react";
import { getUser } from "./component/State/Authentication/Action";
import { useDispatch, useSelector } from "react-redux";
import { findCart } from "./component/State/Cart/Action";
import Routers from "./Routers/Routers";
import { getAllRestaurantByUserId } from "./component/State/Restaurant/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [auth.jwt]);
  useEffect(() => {
    dispatch(getAllRestaurantByUserId(auth.jwt || jwt));
  }, [auth.user]);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
