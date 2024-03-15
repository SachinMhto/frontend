import {
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Typography, FormControl } from "@mui/material";
import MenuCard from "./MenuCard";

const categories = ["pizza", "biryani", "burger", "chicken"];
const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];
const menu = [1, 1, 1, 1, 1, 1];
const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const handleFilter = () => {
    console.log(e.target.value, e.target.name);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/Nepal/Nepalese fast food/3
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/750843/pexels-photo-750843.jpeg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/2079438/pexels-photo-2079438.jpeg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Nepali Fast Food.</h1>
          <p className="text-gray-500 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            porro laborum cumque commodi placeat recusandae rerum mollitia,
            minus incidunt reiciendis, ratione necessitatibus quia quaerat
            adipisci beatae unde consectetur deleniti nisi!
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Bagmati,Nepal</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarMonthIcon />
              <span>Mon-Sun: 9:00AM - 9:00 PM(Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28 ">
            <div>
              <Typography varient="h5" sx={{ paddingButtom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  className="food_type"
                  onChange={handleFilter}
                  value={foodType}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography varient="h5" sx={{ paddingButtom: "1rem" }}>
                Food Catagory
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  className="food_type"
                  onChange={handleFilter}
                  value={foodType}
                >
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.map((item) => (
            <MenuCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;