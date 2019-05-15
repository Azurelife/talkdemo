import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  navi: {
    backgroundColor: "#263340",
    height: 60,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
const Navi = props => {
  const { classes } = props;

  return <div className={classes.navi}>Navi Holder</div>;
};

export default withStyles(styles)(Navi);
