import { Button, Snackbar, SnackbarContent, TextField } from "@mui/material";
import React, { useState } from "react";
import { createIngredietsCategory } from "../../component/State/Ingredients/Action";
import { useDispatch, useSelector } from "react-redux";

const MiniCreateIngredientCategory = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formOpen, setFormOpen] = useState(true);

  const jwt = localStorage.getItem("jwt");
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      restaurantId: restaurant.usersRestaurant.id,
    };
    dispatch(createIngredietsCategory({ data, jwt }));
    setFormData({
      name: "",
    });
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient Category
        </h1>
        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={1000}
          onClose={() => setShowSuccessMessage(false)}
        >
          <SnackbarContent
            style={{
              backgroundColor: "black",
              color: "green",
            }}
            message="Ingredient Category created successfully!"
          />
        </Snackbar>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Enter category name"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <Button variant="contained" type="submit">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MiniCreateIngredientCategory;
