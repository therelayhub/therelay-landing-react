import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import image4 from "../assets/images/Hero updated.png"; // Import the image
import { SPACING } from "../styles/spacing";

const HeroSection = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // Force a re-render when component mounts
  useEffect(() => {
    forceUpdate();
  }, []);

  // Data for the hero section
  const heroData = {
    title: "Get work done across all your enterprise apps",
    description:
      "Stop wasting hours every day switching between apps, dashboards, and databases just to get simple tasks done. Get work done in The Relay, a unified space for all your work apps and databases.",
    buttonText: "Get Early Access",
    image: image4,
  };

  // You can call forceUpdate() whenever you need to force a re-render
  
  return (
    <Box
      key={heroData.title}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        maxWidth: "1312px",
        width: "100%",
        height: "100vh",
        px: SPACING.SECTION_PADDING_X,
        my: SPACING.SECTION_MARGIN_Y,
        gap: SPACING.SECTION_GAP,
        bgcolor: "background.default",
        position: "relative",
        pt: { xs: 4, md: 6 },
      }}
    >
      <Box
        component="img"
        src={heroData.image}
        alt="Browser displaying app interface"
        key={Date.now()}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          height: "auto",
          maxHeight: {
            xs: "45vh",
            md: "60vh"
          },
          objectFit: "contain",
          mb: 10
        }}
      />

      <Stack
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          alignItems: "center"
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "sand.2",
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            lineHeight: 1,
            textAlign: "center"
          }}
        >
          {heroData.title}
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "grey.2",
            fontSize: { xs: "16px", sm: "18px" },
            px: { xs: 2, md: 0 },
            fontWeight: 400,
            lineHeight: { xs: "24px", sm: "28px" },
            letterSpacing: "0.15px",
            mt: 4,
            textAlign: "center"
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
            mt: 12,
            background:
              "linear-gradient(180deg, rgba(248,247,244,1) 0%, rgba(154,148,118,1) 100%)",
            color: "sand.7",
            fontWeight: 600,
            boxShadow: "0 4px 8px rgba(214, 210, 188, 0.8)",
            "&:hover": {
              background:
                "linear-gradient(180deg, rgba(248,247,244,0.9) 0%, rgba(154,148,118,0.9) 100%)",
              boxShadow: "0 4px 8px rgba(214, 210, 188, 1)",
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