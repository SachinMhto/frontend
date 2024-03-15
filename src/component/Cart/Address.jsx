import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Card } from "@mui/material";

const Address = ({ item, showButtton, handleSelectAddress }) => {
  return (
    <Card className="flex gap-5 w-64 p-5 ">
      <HomeIcon />
      <div className="space-y-3 text-gray-400">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>provinance no:3,Bharatpur 27 meghauli ,Chitwan Nepal</p>
        {showButtton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelectAddress(item)}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Address;
