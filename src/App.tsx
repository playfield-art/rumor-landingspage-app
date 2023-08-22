import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "./styles.css";
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'
import { Container, Typography, Grid, Box, Stack, Link } from "@mui/material";
import { Subscribe } from "./components/Subscribe";
import SmartphoneDummy from './assets/smartphone-dummy.png'
import translations from './translations.json';

function App() {
  const [translationIndex, setTranslationIndex] = useState("en");
  const [currentTranslations, setCurrentTranslations] = useState(translations[translationIndex as keyof typeof translations]);

  useEffect(() => {
    setCurrentTranslations(translations[translationIndex as keyof typeof translations]);
  }, [translationIndex]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box mb={4} ml={2} mr={2} mt={4}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3">
                {currentTranslations.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={8}>
                <Grid item sm={7} xs={12}>
                  <Typography paragraph>
                    {currentTranslations.mainContent}
                  </Typography>
                  <Box mt={4} sx={{ padding: "2rem", color: "var(--blue-700)", backgroundColor: 'var(--blue-200)' }}>
                    <Stack direction="column" gap={3}>
                      <Typography align="center" variant="h4">{currentTranslations.shareYourEmail}</Typography>
                      <Subscribe subscribeTranslations={{
                        buttonText: currentTranslations.subscribe,
                        submittedText: currentTranslations.subscribeFinished,
                        exampleEmailText: currentTranslations.exampleMail
                      }}/>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item sm={5} xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Box component="img" sx={{ maxWidth: 300, minWidth: 200}} src={SmartphoneDummy} alt="An image of a smartphone with a preview of the rumor application" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box mt={4} mb={4} textAlign="center">
        <Typography>
          {currentTranslations.disclaimer} <Link href="https://www.playfield.be">playField.</Link>
        </Typography>
      </Box>
    </ThemeProvider>
  )
}

export default App
