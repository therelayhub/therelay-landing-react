import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import image4 from "../assets/images/heroimage.png"; // Import the image

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
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1312px",
        width: "100%",
        minHeight: "100vh",
        px: { xs: 3, sm: 6, md: 8 },
        py: { xs: 8, md: 12 },
        gap: { xs: 4, md: 8 },
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "sand.2",
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            lineHeight: { xs: "40px", sm: "56px", md: "72px" },
          }}
        >
          {heroData.title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "16px", sm: "18px" },
            px: { xs: 2, md: 0 },
          }}
        >
          {heroData.description}
        </Typography>

        <Button
          variant="contained"
          onClick={() => window.open("https://forms.gle/vQESmoBzFmggXtQf9", "_blank")}
          sx={{
            width: { xs: "100%", sm: "300px" },
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

      <Box
        component="img"
        src={heroData.image}
        alt="Phone displaying app interface"
        sx={{
          width: { xs: "90%", sm: "70%", md: "50%" },
          maxWidth: "609px",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default HeroSection;