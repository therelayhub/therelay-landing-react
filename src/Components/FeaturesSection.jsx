import AppsIcon from "@mui/icons-material/Apps";
import AutomateIcon from "@mui/icons-material/AutoFixHigh";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import apps from "../assets/images/apps.png";
import chat from "../assets/images/chat.png";
import automations from "../assets/images/automations.png";

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1312px",
        width: "100%",
        alignItems: "center",
        px: { xs: 3, sm: 6, md: 8 },
        py: { xs: 8, md: 12 },
        gap: { xs: 4, md: 8 },
        bgcolor: "background.default",
      }}
    >
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

      <Stack spacing={6} width="100%">
        {/* First Feature Card */}
        <Paper
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "100%",
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
              alignSelf: "flex-end",
            }}
          >
            <AppsIcon sx={{ width: 32, height: 32 }} />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                color: "text.primary",
              }}
            >
              A single hub to get shit done
            </Typography>

            <Stack spacing={2}>
              <Typography variant="body1" sx={{ color: "#eae8dd" }}>
                Stop juggling apps and doing menial work over and over. With The
                Relay, chat directly with your favorite apps in one unified
                inbox.
              </Typography>

              <Typography variant="body1" sx={{ color: "#eae8dd" }}>
                Ask questions, give instructions, and automate everyday tasks,
                all effortlessly from your phone
              </Typography>
            </Stack>
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

        {/* Bottom Feature Cards */}
        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            margin: 0,
            flexDirection: { xs: "column", sm: "row" } // Ensures row layout on larger screens
          }}
        >
          {/* Left Card */}
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                gap: 6,
                p: 6,
                borderRadius: "12px",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
              }}
            >
              <Box component="img" src={chat} sx={{ width: "100%", height: "auto" }} />
              <Box sx={{ alignItems: "flex-start", gap: 2 }}>
                <WorkIcon sx={{ width: 32, height: 32 }} />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, fontSize: "24px", color: "text.primary" }}
                >
                  Your apps are ready to work for you
                </Typography>
                <Typography variant="body1" sx={{ color: "sand.2" }}>
                  Just give your requests, and watch as your apps work together
                  intelligently to complete tasks. Say goodbye to manual labor and hello
                  to effortless orchestration.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Card */}
          <Grid item xs={12} sm={6}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                gap: 6,
                p: 6,
                borderRadius: "12px",
                overflow: "hidden",
                backgroundImage:
                  "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
              }}
            >
              <Box
                component="img"
                src={automations}
                sx={{ width: "100%", height: "auto" }}
              />
              <Box sx={{ alignItems: "flex-start", gap: 2 }}>
                <AutomateIcon sx={{ width: 32, height: 32 }} />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, fontSize: "24px", color: "text.primary" }}
                >
                  Easy automation
                </Typography>
                <Typography variant="body1" sx={{ color: "sand.2" }}>
                  Automate Tasks: Create repeatable tasks for your apps to do as you
                  want and The Relay handles the rest.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default FeaturesSection;