import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple
  },
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        borderRadius: 8
      }
    }
  },
  typography: { useNextVariants: true }
});

const HueThemeProvider = props => (
  <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
);

export default HueThemeProvider;
