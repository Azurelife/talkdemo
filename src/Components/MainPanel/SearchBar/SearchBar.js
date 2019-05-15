import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = {
  searchBar: {
    backgroundColor: "#263340",
    height: 30,
    width: "60%",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "12px 0"
  }
};
const SearchBar = props => {
  const { classes } = props;

  return (
    <div className={classes.searchBar}>
      SearchBar Holder{" "}
      {/* <Button variant="contained" color="primary">
        Search
      </Button> */}
    </div>
  );
};

export default withStyles(styles)(SearchBar);
