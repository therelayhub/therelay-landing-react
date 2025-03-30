import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import image3 from "../assets/images/logoapps.png";

const ServicesSection = () => {
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
          fontSize: { xs: 32, md: 48 },
          fontWeight: 600,
          color: "sand.2",
          lineHeight: { xs: "42px", md: "64px" },
          textAlign: "center",
        }}
      >
        A new way to get work done
      </Typography>

      <Stack spacing={6} width="100%">
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: "1312px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 6, md: 12 },
            px: { xs: 2, md: 4 },
            borderRadius: "15px",
            overflow: "hidden",
            backgroundImage:
              "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={image3}
            alt="Image"
            sx={{
              width: "100%",
              height: "auto",
              top: 0,
              position: "absolute",
            }}
          />

          <Box
            sx={{
              width: { xs: "90%", md: "760.7px" },
              pt: { xs: 30, md: 70 },
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: 6, md: 12 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: "sand.2",
                fontSize: { xs: 36, md: 64 },
                textAlign: "center",
                lineHeight: { xs: "44px", md: "64px" },
              }}
            >
              Make work great again
            </Typography>

            <Typography
              sx={{
                width: { xs: "90%", md: "693px" },
                fontWeight: 400,
                color: "sand.2",
                fontSize: { xs: 16, md: 20 },
                textAlign: "center",
                lineHeight: { xs: "24px", md: "28px" },
              }}
            >
              Work shouldn't be about endless emails and repetitive admin.<br />
              With The Relay, you can easily chat with and coordinate tasks
              across all your apps. Take control, simplify and reclaim your time
              and brain power.
            </Typography>
          </Box>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: "1312px",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 6, md: 12 },
            px: { xs: 2, md: 4 },
            borderRadius: "15px",
            overflow: "hidden",
            border: "none",
            backgroundImage:
              "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", md: "760.7px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: { xs: 6, md: 12 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                color: "sand.2",
                fontSize: { xs: 36, md: 64 },
                textAlign: "center",
                lineHeight: { xs: "44px", md: "64px" },
              }}
            >
              Just say the word and it will be done
            </Typography>

            <Typography
              sx={{
                width: { xs: "90%", md: "693px" },
                fontSize: { xs: 16, md: 20 },
                textAlign: "center",
                lineHeight: { xs: "24px", md: "28px" },
              }}
            >
              <Box component="span" sx={{ color: "#eae8dd", fontWeight: 400 }}>
                The Relay is powered by MCP (Model Context Protocol), an open
                source, secure and standard connector between apps that will
                allow you to command them with The Relay's inbuilt agent called
              </Box>
              <Box component="span" sx={{ fontWeight: 600, color: "#f8f7f3" }}>
                Spark
              </Box>
              .
            </Typography>

            <Button
              variant="contained"
              onClick={() => window.open("https://forms.gle/vQESmoBzFmggXtQf9", "_blank")}
              sx={{
                width: "80%",
                maxWidth: "300px",
                height: "48px",
                borderRadius: "8px",
                background:
                  "linear-gradient(180deg, rgba(248,247,244,1) 0%, rgba(154,148,118,1) 100%)",
                color: "sand.7",
                fontWeight: 600,
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(248,247,244,0.9) 0%, rgba(154,148,118,0.9) 100%)",
                },
              }}
            >
              Join Waitlist
            </Button>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
};

export default ServicesSection;
