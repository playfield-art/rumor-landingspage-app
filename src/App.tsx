import { ThemeProvider } from "@mui/material/styles";
import "./styles.css";
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'
import { Container, Typography, Grid, Box, Stack } from "@mui/material";
import { Subscribe } from "./components/Subscribe";
import SmartphoneDummy from './assets/smartphone-dummy.png'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box mb={4} ml={2} mr={2} mt={4}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3">
                Take me with you...
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={8}>
                <Grid item sm={7} xs={12}>
                  <Typography paragraph>
                    Waar droom jij van? Naar welke toekomst ben jij op zoek? Zonder je af in mijn kamers, luister naar mijn stem en beken wat je verlangt. Je bent helemaal alleen, enkel ik kan je horen. Ik verzamel toekomstdromen.
                  </Typography>
                  <Typography paragraph>
                    RUMOR // Unfolding Futures is een installatie die wortels heeft in het idee dat een beeld van een toekomstige, andere wereld botst met onze huidige wereld. Een droom voor de toekomst is soms ook de aankondiging van verandering. Maar wat als blijkt dat de een zijn droom de ander zijn nachtmerrie is?
                  </Typography>
                  <Box mt={4} sx={{ padding: "2rem", color: "var(--blue-700)", backgroundColor: 'var(--blue-200)' }}>
                    <Stack direction="column" gap={3}>
                      <Typography align="center" variant="h4">Share your e-mail and I will keep you informed</Typography>
                      <Subscribe />
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
    </ThemeProvider>
  )
}

export default App
