import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useTheme,
  Box,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const HowItWorks = () => {
  const theme = useTheme();
  return (
    <Box>
      <Divider />
      <Accordion
        sx={{
          borderTop: `1px solid ${theme.palette.grey}`,
          py: 1
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
          <Typography variant="body1">Como funciona?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: 0 }}>
          <Typography variant="body2">
            Agora você tem a opção de parcelar suas compras no Pix, assim
            como é feito no cartão de crédito ou no carnê.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </Box>
  );
};
