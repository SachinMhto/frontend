import {
  Box,
  Card,
  Button,
  CardHeader,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIngredientCategoryForm from "./CreateIngredientCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredientsOfRestaurant,
  updateStockIngredient,
} from "../../component/State/Ingredients/Action";
const orders = [1, 1, 1, 1, 1];
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const IngredientsTable = () => {
  const dispatch = useDispatch();
  const { restaurant, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("ingredients", ingredients);
  useEffect(() => {
    dispatch(
      getIngredientsOfRestaurant({ jwt, id: restaurant.usersRestaurant.id })
    );
  }, []);
  const handleUpdateStock = (id) => {
    dispatch(updateStockIngredient({ id, jwt }));
  };
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          action={
            <IconButton onClick={handleOpen} aria-label="settings">
              <AddCircleIcon />
            </IconButton>
          }
          title={"Ingredients"}
          sx={{ pt: 2, alignItems: "center" }}
        />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">category</TableCell>
                <TableCell align="right">Availability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.ingredients.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.category.name}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleUpdateStock(item.id)}
                      style={{ color: item.stoke ? "green" : "red" }}
                    >
                      {item.stoke ? "In Stock" : "Out of Stock"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientCategoryForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientsTable;
