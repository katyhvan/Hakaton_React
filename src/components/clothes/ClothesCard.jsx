import React from "react";
import { useClothes } from "../../contexts/ClothesContextProvider";
import { useNavigate } from "react-router-dom";

import "../../styles/ClothesCard.css";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ClothesCard = ({ item }) => {
  // const navigate = useNavigate();

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            className="card-image"
            component="img"
            alt="clothe image"
            height="350"
            image={item.img}
          />
          <CardContent>
            <Typography
              className="card-title"
              gutterBottom
              variant="h5"
              component="div"
            >
              {item.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              className="card-body"
            >
              <strong>{item.price}</strong>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-body card-desc"
            >
              {item.desc}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-body"
            >
              <i>Type: {item.type}</i>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="card-body"
            >
              <i>Category: {item.category}</i>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className="btn-details"
              size="small"
              // onClick={() => navigate(`/details/${item.id}`)}
            >
              Details
            </Button>
            <Button
              className="btn-edit"
              size="small"
              // onClick={() => navigate(`/edit/${item.id}`)}
            >
              Edit
            </Button>
            <Button
              className="btn-delete"
              size="small"
              // onClick={() => deleteProduct(item.id)}
            >
              Delete
            </Button>
            <Button
              className="btn-cart"
              size="small"
              // onClick={() => addProductToCart(item)}
            >
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ClothesCard;