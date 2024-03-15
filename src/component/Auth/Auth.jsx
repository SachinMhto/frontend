import React from "react";
import { Box, Modal } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import RegisterForm from "../Auth/RegisterForm";
import Login from "../Auth/Login";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};
const Auth = () => {
  const handleOnClose = () => {
    navigate("/");
  };
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Modal
        onClose={handleOnClose}
        open={
          location.pathname === "/account/register" ||
          location.pathname === "/account/login"
        }
      >
        <Box sx={style}>
          {location.pathname === "/account/register" ? (
            <RegisterForm />
          ) : (
            <Login />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Auth;
