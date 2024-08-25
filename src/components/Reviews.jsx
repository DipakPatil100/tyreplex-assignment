// src/components/Reviews.js
import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

const reviews = [
  {
    name: "Md Nasir",
    text: "Excellent service from start to finish. 100% satisfaction with the job, professionalism, and overall service.",
  },
  {
    name: "Rohit Bhati",
    text: "Went for Tyre change. Ultimate service by shoppe boys. Owner behavior very cool. Guide as per your budget. Highly recommend.",
  },
  {
    name: "Pradeep Kumar",
    text: "Best tyre shop in Indirapuram. Good dealing with customer. All types of tyre available here. Price also responsible.",
  },
];

const Reviews = () => {
  return (
    <Container sx={{ marginY: 4 }}>
      <Grid container spacing={4}>
        {reviews.map((review, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
