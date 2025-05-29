import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../Components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // consistent import
import { tokens } from '../../Theme';

const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange."
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order using the tracking link sent to your email after shipment."
  },
  {
    question: "Can I purchase items again?",
    answer: "Yes, you can reorder items by going to your order history and selecting 'Buy Again'."
  }
];

function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      {faqData.map((item, index) => (
        <Accordion key={index} defaultExpanded={index === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQ;
