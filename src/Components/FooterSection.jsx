import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../assets/images/image.png"; // Import the image

const FooterSection = () => {
  // Footer navigation data
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Join waitlist", href: "#" },
        { name: "Enterprise enquiry", href: "#" },
        { name: "Request an app", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Discord", href: "#" },
        { name: "X", href: "#" },
        { name: "LinkedIn", href: "#" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        bgcolor: "background.default",
        p: 2,
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            pt: 3,
            pb: 6,
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.7,
              p: 0.5,
            }}
          >
            <Box
              component="img"
              src={image}
              alt="The Relay Logo"
              sx={{ width: 35, height: 31 }}
            />
            <Typography
              sx={{
                fontFamily: "'Inter-Medium', Helvetica",
                fontWeight: 500,
                color: "grey.0",
                fontSize: 15.3,
                letterSpacing: 1.22,
              }}
            >
              THE RELAY
            </Typography>
          </Box>

          {/* Footer Navigation */}
          <Grid container spacing={1} sx={{ flexGrow: 1 }}>
            {footerLinks.map((category, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Stack spacing={1}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: "text.primary",
                      fontWeight: "var(--text-sm-font-semibold-font-weight)",
                      fontSize: "var(--text-sm-font-semibold-font-size)",
                      letterSpacing:
                        "var(--text-sm-font-semibold-letter-spacing)",
                      lineHeight: "var(--text-sm-font-semibold-line-height)",
                      height: 31,
                    }}
                  >
                    {category.title}
                  </Typography>

                  {category.links.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      underline="none"
                      sx={{
                        color: "text.secondary",
                        fontWeight: "var(--text-sm-font-normal-font-weight)",
                        fontSize: "var(--text-sm-font-normal-font-size)",
                        letterSpacing:
                          "var(--text-sm-font-normal-letter-spacing)",
                        lineHeight: "var(--text-sm-font-normal-line-height)",
                        display: "block",
                      }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Footer Bottom */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1}
          sx={{ py: 1 }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              fontWeight: "var(--text-xs-font-normal-font-weight)",
              fontSize: "var(--text-xs-font-normal-font-size)",
              letterSpacing: "var(--text-xs-font-normal-letter-spacing)",
              lineHeight: "var(--text-xs-font-normal-line-height)",
            }}
          >
            © 2025 The Relay. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "text.secondary",
                fontWeight: "var(--text-xs-font-normal-font-weight)",
                fontSize: "var(--text-xs-font-normal-font-size)",
                letterSpacing: "var(--text-xs-font-normal-letter-spacing)",
                lineHeight: "var(--text-xs-font-normal-line-height)",
                whiteSpace: "nowrap",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{
                color: "text.secondary",
                fontWeight: "var(--text-xs-font-normal-font-weight)",
                fontSize: "var(--text-xs-font-normal-font-size)",
                letterSpacing: "var(--text-xs-font-normal-letter-spacing)",
                lineHeight: "var(--text-xs-font-normal-line-height)",
                whiteSpace: "nowrap",
              }}
            >
              Terms of service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterSection;
