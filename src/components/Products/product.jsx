import * as React from "react";
import { Grid, Container } from "@mui/material";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image:
      "https://cdn.tyreplex.net/uploads/images/tyre_model/original/mrf/zlx/img_main.png?v=2385909&tr=w-178,q-78,q-60", // Replace with actual image path
    title: "AMAZER 4G LIFE",
    size: "145/80 R12",
    price: "3,136",
    reviews: 320,
    warranty: "5 Year Warranty",
    offer: "Offer available",
    tubeless: false,
  },
  {
    id: 2,
    image:
      "https://cdn.tyreplex.net/uploads/images/tyre_model/original/mrf/zlx/img_main.png?v=2385909&tr=w-178,q-78,q-60",
    title: "MRF ZLX",
    size: "145/80 R13",
    price: "9,562",
    reviews: 320,
    warranty: "5 Year Warranty",
    offer: "Offer available",
    tubeless: true,
  },
  {
    id: 3,
    image:
      "https://cdn.tyreplex.net/uploads/images/tyre_model/original/mrf/zlx/img_main.png?v=2385909&tr=w-178,q-78,q-60",
    title: "TVS ULTRA GRIP",
    size: "145/80 R13",
    price: "6,562",
    reviews: 320,
    warranty: "5 Year Warranty",
    offer: "Offer available",
    tubeless: true,
  },
  {
    id: 4,
    image:
      "https://cdn.tyreplex.net/uploads/images/tyre_model/original/mrf/zlx/img_main.png?v=2385909&tr=w-178,q-78,q-60",
    title: "MRF ZVTV",
    size: "145/80 R13",
    price: "10,562",
    reviews: 320,
    warranty: "5 Year Warranty",
    offer: "Offer available",
    tubeless: true,
  },
  // Add more products as needed
];

export default function Product() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
