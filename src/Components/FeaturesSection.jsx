import AppsIcon from "@mui/icons-material/Apps";
import AutomateIcon from "@mui/icons-material/AutoFixHigh";
import CloseIcon from "@mui/icons-material/Close";
import WorkIcon from "@mui/icons-material/Work";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

// Since we don't have access to the original icons, I'll use MUI icons as placeholders
// and use the image URLs that were provided in the original code

const appLogos = [
  { id: 1, name: "App Logo 1" },
  { id: 2, name: "App Logo 2" },
  { id: 3, name: "App Logo 3" },
  { id: 4, name: "App Logo 4" },
  { id: 5, name: "App Logo 5" },
  { id: 6, name: "App Logo Node" },
];

const automationSteps = [
  {
    id: 1,
    title: "Gather this week's complaints",
    description: "Gathering complaint emails of this week from your inbox",
    status: "Completed",
    icon: "appObject.svg",
    appLogo: 4,
  },
  {
    id: 2,
    title: "Creating bug summary for devs",
    description: "Drafting a message to send into the developer channel",
    status: "In Progress",
    progress: 40,
    icon: "appObject2.svg",
    appLogo: 5,
  },
];

const automationTasks = [
  { id: 1, image: "appObject.svg" },
  { id: 2, image: "image.svg" },
  { id: 3, image: "appObject2.svg" },
  { id: 4, image: "appObject3.svg" },
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "1312px",
        width: "100%",
        alignItems: "center",
        gap: 12,
        py: 20,
        px: 8,
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
            minWidth: "360px",
            height: "424px",
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
              maxWidth: "460px",
              gap: 2,
              flex: 1,
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
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "716px",
              height: "376px",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box sx={{ position: "relative", width: "430px", height: "193px" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  height: "83px",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "15px",
                  position: "absolute",
                  top: "38px",
                  left: 0,
                  bgcolor: "sand.7",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px #d6d2bc",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    bgcolor: "grey.400",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "83px",
                  height: "83px",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "15px",
                  position: "absolute",
                  top: "38px",
                  left: "224px",
                  bgcolor: "sand.7",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px #d6d2bc",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    bgcolor: "grey.400",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "83px",
                  height: "83px",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "15px",
                  position: "absolute",
                  top: 0,
                  left: "338px",
                  bgcolor: "sand.7",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px #d6d2bc",
                }}
              >
                <Box
                  sx={{
                    width: "45px",
                    height: "45.43px",
                    bgcolor: "grey.400",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "83px",
                  height: "83px",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "15px",
                  position: "absolute",
                  top: "111px",
                  left: "338px",
                  bgcolor: "sand.7",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px #d6d2bc",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Inter-Bold', Helvetica",
                    fontWeight: 700,
                    color: "common.white",
                    fontSize: "24px",
                  }}
                >
                  +50
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "83px",
                  height: "83px",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "15px",
                  position: "absolute",
                  top: "112px",
                  left: "112px",
                  bgcolor: "sand.7",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px #d6d2bc",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    bgcolor: "grey.400",
                    borderRadius: "8px",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "inline-flex",
                  flexDirection: "column",
                  height: "83px",
                  alignItems: "center",
                  justifyContent: "center",
                  p: "15px",
                  position: "absolute",
                  top: 0,
                  left: "112px",
                  bgcolor: "sand.7",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 4px #d6d2bc",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    bgcolor: "grey.400",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Bottom Feature Cards */}
        <Grid container spacing={3} sx={{ height: "656px" }}>
          {/* Left Card */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
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
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "409px",
                    alignItems: "flex-end",
                    gap: 4,
                    bgcolor: "sand.7",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 4px #d6d2bc",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 4,
                      p: 6,
                    }}
                  >
                    <Box sx={{ width: "329px", height: "84px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          maxWidth: "329px",
                          width: "329px",
                          alignItems: "flex-end",
                          gap: 1,
                          p: 3,
                          bgcolor: "sand.7",
                          borderRadius: "12px",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.primary",
                            textAlign: "right",
                          }}
                        >
                          Gather all customer complaint emails from this week
                          and send the technical ones to the devs in dev chat
                        </Typography>
                      </Box>
                    </Box>

                    {automationSteps.map((step) => (
                      <Box
                        key={step.id}
                        sx={{
                          height: step.id === 1 ? "99px" : "85px",
                          width: "361px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            width: "361px",
                            alignItems: "center",
                            gap: 2.5,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              width: "320px",
                              alignItems: "center",
                              gap: 3,
                              p: 3,
                              bgcolor: "sand.6",
                              borderRadius: "8px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "40px",
                                height: "40px",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "8px",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "30px",
                                  height: step.id === 1 ? "23px" : "30px",
                                  bgcolor: "grey.400",
                                  borderRadius: "4px",
                                }}
                              />
                            </Box>

                            <Stack spacing={3} sx={{ flex: 1 }}>
                              <Stack spacing={1}>
                                <Typography
                                  variant="h4"
                                  sx={{ color: "sand.2" }}
                                >
                                  {step.title}
                                </Typography>

                                <Typography
                                  variant="caption"
                                  sx={{ color: "grey.2" }}
                                >
                                  {step.description}
                                </Typography>
                              </Stack>

                              {step.status === "Completed" ? (
                                <Typography
                                  variant="caption"
                                  sx={{ color: "sand.5" }}
                                >
                                  Completed
                                </Typography>
                              ) : (
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 4,
                                    width: "100%",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      position: "relative",
                                      flex: 1,
                                      height: "4px",
                                      bgcolor: "sand.7",
                                      borderRadius: "4px",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        width: `${step.progress}%`,
                                        height: "4px",
                                        bgcolor: "sand.3",
                                        borderRadius: "4px",
                                      }}
                                    />
                                  </Box>
                                </Box>
                              )}
                            </Stack>
                          </Box>

                          {step.id === 2 && (
                            <Box
                              sx={{
                                display: "flex",
                                width: "24px",
                                height: "24px",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 2.5,
                              }}
                            >
                              <CloseIcon
                                sx={{ width: "14px", height: "14px" }}
                              />
                            </Box>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "460px",
                  width: "460px",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <WorkIcon sx={{ width: 32, height: 32 }} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "text.primary",
                  }}
                >
                  Your apps are ready to work for you
                </Typography>

                <Typography variant="body1" sx={{ color: "sand.2" }}>
                  Just give your requests, and watch as your apps work together
                  intelligently to complete tasks. Say goodbye to manual labor
                  and hello to effortless orchestration.
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Card */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
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
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "432px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "361px",
                    height: "292px",
                    top: "70px",
                    left: "99px",
                  }}
                >
                  {automationTasks.map((task, index) => (
                    <Box
                      key={task.id}
                      component="img"
                      src={task.image}
                      sx={{
                        position: "absolute",
                        width: "361px",
                        height: "64px",
                        top: `${index * 76}px`,
                        left: 0,
                      }}
                      alt={`Automation task ${task.id}`}
                    />
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "460px",
                  width: "460px",
                  height: "152px",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <AutomateIcon sx={{ width: 32, height: 32 }} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "text.primary",
                  }}
                >
                  Easy automation
                </Typography>

                <Typography variant="body1" sx={{ color: "sand.2" }}>
                  Automate Tasks: Create repeatable tasks for your apps to do as
                  you want and The Relay handles the rest.
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
