import { createTheme } from "@mui/material";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#0288d1",
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
});
