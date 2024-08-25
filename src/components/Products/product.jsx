import * as React from "react";
import { Grid, Container, Button, Box } from "@mui/material";
import ProductCard from "./ProductCard";
import { products } from "../../utils/productsJson";

export default function Product() {
  const [visibleProducts, setVisibleProducts] = React.useState(4);

  const handleViewMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 4);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={0} justifyContent="center">
        {products.slice(0, visibleProducts).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
      {visibleProducts < products.length && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" onClick={handleViewMore}>
            View More
          </Button>
        </Box>
      )}
    </Container>
  );
}
