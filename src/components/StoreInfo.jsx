import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Grid,
  Avatar,
  Rating,
  Container,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function ShopCard() {
  return (
    <Container maxWidth="xl">
      <Card sx={{ maxWidth: "100%", margin: "20px auto" }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            SHREE HEMKUNT TYRES AND SERVICES
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent={"center"}
            mb={2}
          >
            <Rating name="read-only" value={4.9} readOnly />
            <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
              4.9
            </Typography>
            <Typography variant="body2" sx={{ ml: 1 }}>
              2278 Reviews
            </Typography>
            <Button variant="outlined" sx={{ ml: 2 }}>
              Rate
            </Button>
            <VerifiedIcon color="success" sx={{ ml: 2 }} />
          </Box>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            <LocationOnIcon sx={{ mr: 1 }} />
            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
            INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            <AccessTimeIcon sx={{ mr: 1 }} />
            Open - Monday to Sunday - 10:00AM to 8:00PM
          </Typography>
          <Button variant="contained" color="error" sx={{ mb: 3 }}>
            Get Directions
          </Button>
          <Typography variant="h6" sx={{ mb: 2 }}>
            2278 Google Reviews
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
