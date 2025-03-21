import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "What apps can I connect to The Relay?",
  },
  {
    id: 2,
    question: "How can I get my organization on The Relay?",
  },
  {
    id: 3,
    question: "Do I need technical skills to set up The Relay?",
  },
  {
    id: 4,
    question: "Is The Relay secure?",
  },
  {
    id: 5,
    question: "What exactly can I automate with The Relay?",
  },
  {
    id: 6,
    question: "Which platforms is The Relay on?",
  },
  {
    id: 7,
    question: "What features will be added in the future?",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        py: 5,
        px: 2,
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="h6"
          align="center"
          sx={{
            width: "100%",
            color: "text.primary",
            textShadow: "0px 25px 50px rgba(0, 0, 0, 0.25)",
            mb: 1,
          }}
        >
          Answers for the curious
        </Typography>

        <Box sx={{ width: "100%" }}>
          {faqItems.map((item) => (
            <Accordion
              key={item.id}
              expanded={expanded === `panel${item.id}`}
              onChange={handleChange(`panel${item.id}`)}
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "transparent",
                backgroundImage: "none",
                borderBottom: 1,
                borderColor: "divider",
                "&:before": {
                  display: "none",
                },
                "& .MuiAccordionSummary-root": {
                  py: 1,
                  minHeight: "auto",
                  "&.Mui-expanded": {
                    minHeight: "auto",
                  },
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ width: 16, height: 16 }} />}
                sx={{
                  px: 0,
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                    "&.Mui-expanded": {
                      margin: 0,
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "text.primary",
                    fontSize: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, py: 1 }}>
                <Typography variant="body2">
                  {/* Content would go here */}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;
