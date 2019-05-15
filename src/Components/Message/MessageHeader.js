import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  root: {
    display: "flex"
  },
  userName: {
    margin: "0 12px 0 0"
  }
};
const MessageHeader = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <span>
        <Typography className={classes.userName} color="textPrimary">
          {props.name}
        </Typography>
      </span>
      <span>
        <Typography color="textSecondary">{props.time}</Typography>
      </span>
    </div>
  );
};

export default withStyles(styles)(MessageHeader);
