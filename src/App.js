import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Navi from "./Components/Navi/Navi";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainPanel from "./Components/MainPanel/MainPanel";
import HueThemeProvider from "./hoc/HueThemeProvider";

function App(props) {
  return (
    <HueThemeProvider>
      <div className="App">
        <Grid container>
          <Grid item xs={12}>
            <Navi />
          </Grid>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            {" "}
            <MainPanel />{" "}
          </Grid>
        </Grid>
      </div>
    </HueThemeProvider>
  );
}

export default App;
