import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import group1 from "../assets/images/group-1.png";

const NavbarSection = () => {
  // Navigation items data
  const navItems = [
    { id: 1, label: "About" },
    { id: 2, label: "Request an app" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: (theme) => `${theme.spacing(1)} ${theme.spacing(2)}`,
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box
          sx={{
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={group1}
            alt="Logo"
            sx={{ width: 36, height: 32.03 }}
          />
        </Box>

        {navItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              padding: (theme) => `${theme.spacing(0.5)} ${theme.spacing(1)}`,
              borderRadius: (theme) => theme.shape.borderRadius / 3,
              "&:hover": {
                cursor: "pointer",
                bgcolor: "background.paper",
                opacity: 0.8,
              },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "text.primary",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Button
        variant="contained"
        sx={{
          height: 36,
          padding: (theme) => `${theme.spacing(0.75)} ${theme.spacing(1)}`,
          borderRadius: (theme) => theme.shape.borderRadius / 1.5,
          background:
            "linear-gradient(180deg, rgba(248,247,244,1) 0%, rgba(154,148,118,1) 100%)",
          color: "sand.7",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          fontWeight: 600,
          "&:hover": {
            background:
              "linear-gradient(180deg, rgba(248,247,244,0.9) 0%, rgba(154,148,118,0.9) 100%)",
          },
        }}
      >
        Join Waitlist
      </Button>
    </Box>
  );
};

export default NavbarSection;
