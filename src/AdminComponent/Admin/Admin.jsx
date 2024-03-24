import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import RestaurantDashboard from "../RestaurantDashboard/RestaurantDashboard";
import Orders from "../Orders/Orders";
import Menu from "../Menu/Menu";
import Ingredients from "../Ingredients/Ingredients";
import FoodCategory from "../FoodCategory/FoodCategory";
import Events from "../Events/Events";
import Details from "../Details/Details";
import { DetailsSharp } from "@mui/icons-material";
import DetailsTable from "../Details/DetailsTable";
import CreateMenuForm from "../Menu/CreateMenuForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRestaurantById,
  getRestaurantCategory,
} from "../../component/State/Restaurant/Action";
import { getMenuItemsByRestaurantIdRequest } from "../../component/State/Menu/Action";
import { fetchRestaurantOrder } from "../../component/State/RestaurantOrder/Action";

const Admin = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { restaurant } = useSelector((store) => store);
  const handleClose = () => {};
  useEffect(() => {
    dispatch(
      getRestaurantCategory({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );
    dispatch(
      fetchRestaurantOrder({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      })
    );
  }, []);
  return (
    <div>
      <div className="lg:flex justify-between">
        <AdminSidebar handleClose={handleClose} />
        <div className="lg:w-4/5">
          <Routes>
            <Route path="/" element={<RestaurantDashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/category" element={<FoodCategory />} />
            <Route path="/events" element={<Events />} />
            <Route path="/details" element={<DetailsTable />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
