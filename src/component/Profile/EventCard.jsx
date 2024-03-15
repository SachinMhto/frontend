import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 300 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="https://images.pexels.com/photos/3581878/pexels-photo-3581878.jpeg"
        />
        <CardContent>
          <Typography variant="h6">Nepali Fast Food</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"Bharatpur"}</p>
            <p className="text-sm text-blue-800">March 15,2024 12:00 AM</p>
            <p className="text-sm text-red-800">March 16,2024 12:00 AM</p>
          </div>
        </CardContent>
        {false && (
          <CardActions>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
