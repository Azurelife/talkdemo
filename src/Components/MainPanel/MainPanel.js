import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SearchResultPanel from "./SearchResultPanel/SearchResultPanel";
import ConversationPanel from "./ConversationPanel/ConversationPanel";
import SearchBar from "./SearchBar/SearchBar";
import { Typography } from "@material-ui/core";
const styles = {
  root: {
    backgroundColor: "#f0f1f2",
    height: "100vh",
    padding: 32
  },
  panel: {
    display: "flex"
  }
};
const MainPanel = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h6" inline>
        Talk Tracker
      </Typography>
      <SearchBar />
      <div className={classes.panel}>
        <SearchResultPanel />
        <ConversationPanel />
      </div>
    </div>
  );
};

export default withStyles(styles)(MainPanel);
