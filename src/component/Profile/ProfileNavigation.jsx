import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { AddReaction } from "@mui/icons-material";
import { Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favourites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <AddReaction /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsIcon /> },
  { title: "Events", icon: <EventIcon /> },
  {
    title: (
      <Typography
        sx={{ color: "red" }}
        className=" hover:text-blue-700 duration-300"
        variant="body1"
      >
        Logout
      </Typography>
    ),
    icon: (
      <LogoutIcon className="text-red-600  hover:text-blue-700 duration-300 " />
    ),
  },
];
const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigation = (item) => {
    if (item.title === "Logout") {
      dispatch(logout()).then(() => {
        navigate("/");
      });
    } else {
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
  };
  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: -1, position: "sticky" }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-6 pt-16">
          {menu.map((item, i) => (
            <>
              <div
                onClick={() => handleNavigation(item)}
                className="px-5 flex items-center space-x-5 cursor-pointer hover:text-blue-700 duration-300"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default ProfileNavigation;
