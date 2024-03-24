import { Button, Snackbar, SnackbarContent, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../component/State/Restaurant/Action";

const CreateFoodCategoryForm = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });
  const [formOpen, setFormOpen] = useState(true); // State to track whether the form is open or closed

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: 1,
      },
    };
    dispatch(
      createCategoryAction({ reqData: data, jwt: localStorage.getItem("jwt") })
    );
    console.log(data);
    setFormData({
      categoryName: "",
      restaurantId: "",
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
          Create Food Category
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
            message="Category created successfully!"
          />
        </Snackbar>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="categoryName"
            name="categoryName"
            label="Food Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.categoryName}
          ></TextField>
          <Button variant="contained" type="submit">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateFoodCategoryForm;
