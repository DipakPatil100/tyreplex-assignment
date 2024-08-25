// src/components/Footer.js
import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        paddingY: 2,
        marginTop: 4,
      }}
    >
      <Container>
        <Typography variant="body2" align="center">
          © 2024 TyrePlex. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
