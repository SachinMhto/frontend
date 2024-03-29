import React, { useEffect } from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { green } from "@mui/material/colors";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clearCartAction } from "../State/Cart/Action";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearCartAction());
    console.log("running...");
  }, []);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-5">
      <div className="flex flex-col items-center justify-center h-[90vh]">
        <Card className="box w-full lg:w-1/4 flex flex-col     items-center rounded-md">
          <TaskAltIcon sx={{ fontSize: "5rem", color: green[500] }} />
          <h1 className="py-5 text-2xl font-semibold">Payment Success</h1>
          <p className="py-2 text-center text-gray-200 text-lg">
            Thank you for choosing our restaurant!
          </p>
          <p className="py-2 text-center text-gray-200 text-lg">
            Your payment was successfully processed.
          </p>
          <p className="py-2 text-center text-gray-200 text-lg">
            We have received your order and will begin preparing it shortly.
          </p>
          <p className="py-2 text-center text-gray-200 text-lg">
            If you have any questions or concerns, please feel free to contact
            us.
          </p>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            className="py-5"
            sx={{ margin: "1rem 0rem" }}
          >
            Go To Home
          </Button>
        </Card>
      </div>
    </div>
  );
};
export default PaymentSuccess;
