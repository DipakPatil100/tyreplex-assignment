import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Badge,
  Rating,
} from "@mui/material";

const ProductCard = ({
  image,
  title,
  size,
  price,
  reviews,
  rating,
  warranty,
  offer,
  tubeless,
}) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent
        sx={{
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={"18px"}
            gutterBottom
            variant="h6"
            component="div"
          >
            {title}
          </Typography>
          <Badge
            sx={{
              height: "20px",
              lineHeight: "20px",
            }}
            badgeContent={warranty}
            color="warning"
          />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {size}
        </Typography>
        <Typography variant="h6" component="div">
          ₹ {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box
            component="span"
            sx={{
              color: "green",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <span>{reviews} Reviews</span>
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tubeless ? "Tubeless" : "Tube Type"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
