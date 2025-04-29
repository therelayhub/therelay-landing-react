import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useReducer, useEffect } from "react";
import apps from "../assets/images/apps.png";
import chat from "../assets/images/chat.png";
import automations from "../assets/images/automations.png";
import AppsIcon from "../assets/icons/AppsIcon.png";
import AutomateIcon from "../assets/icons/AutomateIcon.png";
import WorkIcon from "../assets/icons/WorkIcon.png";
import FadeIn from "./FadeIn";
import { SPACING } from "../styles/spacing";

const FeaturesSection = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // Force a re-render when component mounts
  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1312px",
        width: "100%",
        alignItems: "center",
        my: SPACING.SECTION_MARGIN_Y,
        gap: SPACING.SECTION_GAP,
        bgcolor: "background.default",
      }}
    >
      <FadeIn>
        <Typography
          variant="h6"
          sx={{
            color: "sand.2",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          What is The Relay?
        </Typography>
      </FadeIn>

      <Grid
        container
        spacing={3}
        sx={{
          width: '100%',
        }}
      >
        {/* Top Card - Full Width */}
        <Grid item xs={12}>
          <FadeIn>
            <Paper
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: 6,
                p: 6,
                borderRadius: "12px",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  flex: 1,
                }}
              >
                <Box
                  component="img"
                  src={AppsIcon}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "text.primary",
                  }}
                >
                  A single hub to get work done at speed
                </Typography>
                <Typography variant="body1" sx={{ color: "#eae8dd" }}>
                  Stop juggling apps and doing menial work over and over. With The
                  Relay, chat directly with all your work apps in a unified space.
                </Typography>
                <Typography variant="body1" sx={{ color: "#eae8dd" }}>
                  Ask questions, give instructions and automate tasks so you can focus on what matters.
                </Typography>
              </Box>
              <Box
                component="img"
                src={apps}
                sx={{
                  width: { xs: "100%", md: "50%" },
                  height: "auto",
                }}
              />
            </Paper>
          </FadeIn>
        </Grid>

        {/* Bottom Left Card */}
        <Grid item xs={12} sm={6}>
          <FadeIn delay={0.2}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                p: 6,
                gap: SPACING.CARD_GAP,
                borderRadius: "15px",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
              }}
            >
              <Box component="img" src={chat} sx={{ width: "100%", height: "auto", objectFit: "contain" }} />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box
                  component="img"
                  src={WorkIcon}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, fontSize: "24px", color: "text.primary" }}
                >
                  Your apps are ready to work for you
                </Typography>
                <Typography variant="body1" sx={{ color: "sand.2" }}>
                  Just give your requests and watch as your apps work together
                  intelligently to complete tasks with our AI agent. Say goodbye to manual labor and hello
                  to effortless orchestration.
                </Typography>
              </Box>
            </Paper>
          </FadeIn>
        </Grid>

        {/* Bottom Right Card */}
        <Grid item xs={12} sm={6}>
          <FadeIn delay={0.4}>
            <Paper
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                p: 6,
                gap: SPACING.CARD_GAP,
                borderRadius: "15px",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
              }}
            >
              <Box
                component="img"
                src={automations}
                sx={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box
                  component="img"
                  src={AutomateIcon}
                  sx={{ width: 32, height: 32 }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, fontSize: "24px", color: "text.primary" }}
                >
                  Easy automation
                </Typography>
                <Typography variant="body1" sx={{ color: "sand.2" }}>
                  Create repeatable tasks for the Agent to work on at a fixed time and earn your time back in your workday. Watch The Relay transform your work force to the next level of productivity.
                </Typography>
              </Box>
            </Paper>
          </FadeIn>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;