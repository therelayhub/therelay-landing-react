import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import group1 from "../assets/images/logo.png";

const NavbarSection = () => {
  const navItems = [
    { id: 1, label: "About", link: "https://medium.com/@advait_4835/introducing-the-relay-148304792001 " },
    { id: 2, label: "Request an app", link: "https://forms.gle/vQESmoBzFmggXtQf9" },
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
        px: { xs: 2, sm: 4, md: 6 },
        py: 3,
      }}
    >
      <Stack direction="row" spacing={5} alignItems="center">
        <Box sx={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box component="img" src={group1} alt="Logo" sx={{ width: 36, height: 36 }} />
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 10 }}>
          {navItems.map((item) => (
            <Box
              key={item.id}
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: 1,
                "&:hover": {
                  cursor: "pointer",
                  bgcolor: "background.paper",
                  opacity: 0.8,
                },
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "text.primary", whiteSpace: "nowrap" }} onClick={() => window.open(item.link, "_blank")} >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>

      <Button
        onClick={() => window.open("https://forms.gle/vQESmoBzFmggXtQf9", "_blank")}
        variant="contained"
        sx={{
          height: "36px",
          px: 2,
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
  );
};

export default NavbarSection;