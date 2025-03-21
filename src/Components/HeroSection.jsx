import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import image4 from "../assets/images/image-4.png"; // Import the image

const HeroSection = () => {
  // Data for the hero section
  const heroData = {
    title: "Make your apps do the work you hate",
    description:
      "Bring all your work apps together. Chat, automate, and get work done right from your phone with The Relay",
    buttonText: "Join Waitlist",
    image: image4,
  };

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1312px",
        height: "784px",
        alignItems: "center",
        gap: 6,
        pt: 5,
        pr: 2,
        pb: 5,
        pl: 2,
        width: "100%",
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={heroData.image}
        alt="Phone displaying app interface"
        sx={{
          width: "609px",
          height: "784px",
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: 1,
          objectFit: "cover",
        }}
      />

      <Stack
        spacing={3}
        sx={{
          width: "667px",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Inter-SemiBold', Helvetica",
              fontWeight: 600,
              color: "sand.2",
              fontSize: "48px",
              lineHeight: "72px",
              textShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
              mt: -0.25,
            }}
          >
            {heroData.title}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              width: "544px",
              color: "text.secondary",
            }}
          >
            {heroData.description}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          sx={{
            width: "300px",
            height: "48px",
            borderRadius: "8px",
            background:
              "linear-gradient(180deg, rgba(248,247,244,1) 0%, rgba(154,148,118,1) 100%)",
            boxShadow: "0 0 10px rgba(255,255,255,0.2)",
            color: "sand.7",
            fontWeight: 600,
            "&:hover": {
              background:
                "linear-gradient(180deg, rgba(248,247,244,0.9) 0%, rgba(154,148,118,0.9) 100%)",
            },
          }}
        >
          {heroData.buttonText}
        </Button>
      </Stack>
    </Box>
  );
};

export default HeroSection;
