import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  sidebar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f1f2",
    height: "100vh"
  }
};
const Sidebar = props => {
  const { classes } = props;

  return <div className={classes.sidebar}>Sidebar Holder</div>;
};

export default withStyles(styles)(Sidebar);
