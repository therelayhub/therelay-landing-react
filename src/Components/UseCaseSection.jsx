import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import FadeIn from "./FadeIn";
import { SPACING } from "../styles/spacing";

// Import icons
import searchIcon from "../assets/icons/search for information icon.png";
import createReportsIcon from "../assets/icons/create reports icon.png";
import analyzeDocumentsIcon from "../assets/icons/analyze documents icon.png";
import fillDataIcon from "../assets/icons/fill data icon.png";
import sendToColleaguesIcon from "../assets/icons/send to colleagues icon.png";
import manageProjectsIcon from "../assets/icons/manage projects icon.png";

const IconWrapper = ({ src }) => (
  <Box
    component="img"
    src={src}
    sx={{
      width: 48,
      height: 48,
      objectFit: "contain"
    }}
  />
);

const UseCaseSection = () => {
  const useCases = [
    {
      icon: <IconWrapper src={searchIcon} />,
      title: "Search for information",
      description: "Get information that you need across all your apps within seconds",
    },
    {
      icon: <IconWrapper src={createReportsIcon} />,
      title: "Create reports",
      description: "Create documents or reports that summarize your work on the fly",
    },
    {
      icon: <IconWrapper src={analyzeDocumentsIcon} />,
      title: "Analyze documents",
      description: "Analyze data from any app and send it across as emails or a Slack message",
    },
    {
      icon: <IconWrapper src={fillDataIcon} />,
      title: "Fill data",
      description: "Fill timesheets or spreadsheets by just typing it in chat",
    },
    {
      icon: <IconWrapper src={sendToColleaguesIcon} />,
      title: "Send to colleagues",
      description: "Draft emails, messages and invites without going into those apps",
    },
    {
      icon: <IconWrapper src={manageProjectsIcon} />,
      title: "Manage projects",
      description: "Create and update project related tasks in project management apps like Asana",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1312px",
        width: "100%",
        alignItems: "center",
        my: SPACING.SECTION_MARGIN_Y,
        px: SPACING.SECTION_PADDING_X,
        gap: SPACING.SECTION_GAP,
        bgcolor: "background.default",
      }}
    >
      <FadeIn>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: 32, md: 48 },
            fontWeight: 600,
            color: "sand.2",
            textAlign: "center",
          }}
        >
          Use cases of The Relay
        </Typography>
      </FadeIn>

      <Grid container spacing={3} sx={{ width: '100%' }}>
        {useCases.map((useCase, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FadeIn delay={index * 0.1}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: 4.5,
                  borderRadius: "12px",
                  backgroundImage: "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  }
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {useCase.icon}
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 3 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: "sand.2",
                        fontSize: { xs: 20, md: 24 }
                      }}
                    >
                      {useCase.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "sand.3",
                        fontSize: { xs: 14, md: 16 },
                        lineHeight: 1.5
                      }}
                    >
                      {useCase.description}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </FadeIn>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UseCaseSection; 