import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "60%",
    margin: "12px"
  }
};
const SearchResultPanel = props => {
  const { classes } = props;

  return <div className={classes.root}>SearchResultPanel Holder</div>;
};

export default withStyles(styles)(SearchResultPanel);
