import { Button, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../State/Authentication/Action";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ErrorIcon from "@mui/icons-material/Error";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { success, error } = auth;
  console.log("success message:", auth.error);
  useEffect(() => {
    if (error === "Email or Password didnot match") {
      setDisplay(true);
      const timer = setTimeout(() => {
        setDisplay(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = (values) => {
    dispatch(loginUser({ userData: values, navigate }));
  };

  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      {success && (
        <Typography variant="body1" className="text-right text-green-600">
          <TaskAltIcon /> {success}
        </Typography>
      )}
      {display && (
        <Typography variant="body1" className="text-center text-red-600">
          <ErrorIcon /> {error}
        </Typography>
      )}
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            required
          />
          <Field
            as={TextField}
            name="password"
            label="password"
            fullWidth
            variant="outlined"
            margin="normal"
            type="password"
            required
          />
          <Button
            sx={{ mt: 2, padding: "1rem" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an account?
        <Button size="small" onClick={() => navigate("/account/register")}>
          Register here
        </Button>
        <Button size="small" onClick={() => navigate("/account/register")}>
          Forgot Password
        </Button>
      </Typography>
    </div>
  );
};

export default Login;
