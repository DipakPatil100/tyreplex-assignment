// src/components/Reviews.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
  {
    name: "Sanjay Mehta",
    text: "Quick and efficient service. They have a good range of tyres at reasonable prices.",
  },
  {
    name: "Amit Sharma",
    text: "Friendly staff and great service. Would definitely recommend to others.",
  },
  {
    name: "Rahul Verma",
    text: "Very happy with the service. The staff was knowledgeable and helpful.",
  },
];

const chunkReviews = (array, size) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};

const Reviews = () => {
  const chunkedReviews = chunkReviews(reviews, 3);

  return (
    <Container sx={{ marginY: 4 }}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {chunkedReviews.map((chunk, chunkIndex) => (
          <Grid container spacing={3} key={chunkIndex}>
            {chunk.map((review, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardContent
                    sx={{ border: "0.5px solid lightgrey", borderRadius: "5px" }}
                  >
                    <Box>
                      <AccountCircleIcon sx={{ pt: 2, fontSize: "38px" }} />
                    </Box>
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
        ))}
      </Carousel>
    </Container>
  );
};

export default Reviews;
