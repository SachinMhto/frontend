import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CreateRestaurantForm from "../AdminComponent/CreateRestaurantForm/CreateRestaurantForm";
import Admin from "../AdminComponent/Admin/Admin";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { restaurant } = useSelector((store) => store);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // Check if restaurant.msg is present, if yes, setLoad to true to trigger a redirect
    if (restaurant.msg === "created successfully") {
      setLoad(true);
    }
  }, [restaurant.msg]);

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            // Redirect to Admin if load is true or if restaurant.usersRestaurant exists
            load || restaurant.usersRestaurant ? (
              <Admin />
            ) : (
              <CreateRestaurantForm />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRoute;
