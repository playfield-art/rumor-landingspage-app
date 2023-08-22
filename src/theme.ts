import { createTheme } from "@mui/material/styles";
import SawtonIndustrialRegular from './assets/fonts/SawtonIndustrial-Regular.woff2';

export default createTheme({
  typography: {
    fontFamily: 'Sawton Industrial, Helvetica, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: "#253772",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
    },
    background: {
      default: "var(--blue-700)",
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Sawton Industrial';
          src: url(${SawtonIndustrialRegular}) format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "var(--white)",
          border: "none",
          backgroundColor: "var(--blue-700)",
          height: "3.5rem",
          "&:hover": {
            backgroundColor: "var(--blue-600)",
            color: "var(--white)",
          },
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          display: "block",
          color: "var(--blue-700)",
          fontSize: "1rem",
          borderRadius: "20px",
          border: "1px solid var(--blue-700)",
          padding: "0.7rem 0.5rem",
          height: "3.5rem"
        },
        input: {
          boxSizing: "border-box",
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "var(--white)",
          borderBottom: "1px solid var(--white)",
          "&:visited": {
            color: "var(--white)",
          },
          "&:hover": {
            textDecoration: "none",
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
      },
    },
  },
});
