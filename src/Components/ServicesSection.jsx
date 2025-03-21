import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import image3 from "../assets/images/image-3.png";

const ServicesSection = () => {
  return (
    <Stack
      spacing={12}
      alignItems="center"
      sx={{
        width: "100%",
        maxWidth: "1312px",
        py: 20,
        px: 8,
        bgcolor: "background.default",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: 48,
          fontWeight: 600,
          color: "sand.2",
          lineHeight: "64px",
        }}
      >
        A new way to get work done
      </Typography>

      <Stack spacing={6}>
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: "1312px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: 12,
            px: 2,
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
              width: "1087px",
              height: "252px",
              position: "absolute",
              top: 0,
              left: "81px",
              zIndex: 1,
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              width: "760.7px",
              pt: 44,
              zIndex: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontFamily: "'Inter-SemiBold', Helvetica",
                fontWeight: 600,
                color: "sand.2",
                fontSize: "64px",
                textAlign: "center",
                lineHeight: "64px",
                textShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
                boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
              }}
            >
              Make work great again
            </Typography>

            <Typography
              sx={{
                width: "693px",
                fontFamily: "'Inter-Regular', Helvetica",
                fontWeight: 400,
                color: "sand.2",
                fontSize: "20px",
                textAlign: "center",
                lineHeight: "28px",
              }}
            >
              Work shouldn't be about endless emails and repetitive admin.{" "}
              <br />
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
            height: "555px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            py: 12,
            px: 2,
            borderRadius: "15px",
            overflow: "hidden",
            border: "none",
            backgroundImage:
              "linear-gradient(270deg, rgba(72,68,52,0.2) 0%, rgba(173,165,127,0.5) 100%)",
          }}
        >
          <Box
            sx={{
              width: "760.7px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontFamily: "'Inter-SemiBold', Helvetica",
                fontWeight: 600,
                color: "sand.2",
                fontSize: "64px",
                textAlign: "center",
                lineHeight: "64px",
                textShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
                boxShadow: "0px 25px 50px -12px rgba(0,0,0,0.25)",
              }}
            >
              Just say the word and it will be done
            </Typography>

            <Typography
              sx={{
                width: "693px",
                fontFamily: "'Inter-Regular', Helvetica",
                fontSize: "20px",
                textAlign: "center",
                lineHeight: "28px",
              }}
            >
              <Box component="span" sx={{ color: "#eae8dd", fontWeight: 400 }}>
                The Relay is powered by MCP (Model Context Protocol),
                <br /> an open source, secure and standard connector between
                apps that will allow you to command them with The Relay's
                inbuilt agent called{" "}
              </Box>

              <Box
                component="span"
                sx={{
                  fontFamily: "'Inter-SemiBold', Helvetica",
                  fontWeight: 600,
                  color: "#f8f7f3",
                }}
              >
                Spark
              </Box>

              <Box component="span" sx={{ color: "#eae8dd" }}>
                .{" "}
              </Box>
            </Typography>

            <Button
              variant="contained"
              sx={{
                width: "300px",
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
    </Stack>
  );
};

export default ServicesSection;
