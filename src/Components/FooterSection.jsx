import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/images/logo.png"; // Import the image

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Join waitlist", href: "https://forms.gle/vQESmoBzFmggXtQf9" },
      { name: "Enterprise enquiry", href: "https://forms.gle/RYo36mSxkYK8e61z7" },
      { name: "Request a feature", href: "https://discord.gg/Sca3U4QKhH" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "https://medium.com/@advait_4835/introducing-the-relay-148304792001" },
      { name: "Blog", href: "https://medium.com/@advait_4835" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Discord", href: "https://discord.gg/XT4y4tz8" },
      { name: "X", href: "https://x.com/TheRelayHub" },
      { name: "LinkedIn", href: "https://www.linkedin.com/company/therelay" },
    ],
  },
];

const FooterLogo = () => (
  <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
    <Box component="img" src={logo} alt="The Relay Logo" sx={{ width: 35, height: 31 }} />
    <Typography sx={{ fontFamily: "'Inter-Medium', Helvetica", fontWeight: 500, fontSize: 15.3, letterSpacing: 1.22, color: "grey.0" }}>
      THE RELAY
    </Typography>
  </Box>
);

const FooterNav = () => (
  <Grid container spacing={2} justifyContent="center" textAlign="center">
    {footerLinks.map((category, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: "1rem", color: "text.primary" }}>
            {category.title}
          </Typography>
          {category.links.map((link, linkIndex) => (
            <Link key={linkIndex} href={link.href} underline="none" sx={{ color: "text.secondary", fontSize: "0.875rem", display: "block" }}>
              {link.name}
            </Link>
          ))}
        </Stack>
      </Grid>
    ))}
  </Grid>
);

const FooterBottom = () => (
  <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" spacing={1} sx={{ py: 2 }}>
    <Typography variant="caption" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
      © 2025 The Relay. All rights reserved.
    </Typography>
    <Stack direction="row" spacing={2}>
      <Link href="#" underline="none" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
        Privacy Policy
      </Link>
      <Link href="#" underline="none" sx={{ color: "text.secondary", fontSize: "0.75rem" }}>
        Terms of Service
      </Link>
    </Stack>
  </Stack>
);

const FooterSection = () => (
  <Box component="footer" sx={{ width: "100%", bgcolor: "background.default", paddingX: 6 }}>
    <Container maxWidth="lg" disableGutters>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, pt: 3, pb: 6, borderBottom: 1, borderColor: "divider" }}>
        <FooterLogo />
        <FooterNav />
      </Box>
      <FooterBottom />
    </Container>
  </Box>
);

export default FooterSection;
