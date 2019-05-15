import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MessageHeader from "./MessageHeader";

const styles = {
  avatar: {
    width: 40,
    height: 40,
    margin: "0 8px 0 0"
  },
  content: {
    padding: 0
  },
  root: {
    display: "flex",
    border: "none",
    boxShadow: "unset",
    "&:hover": {
      backgroundColor: "#f0f1f2"
    },
    padding: 8
  }
};

const TextMessage = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Avatar className={classes.avatar}>OP</Avatar>
      <div className={classes.right}>
        <MessageHeader name={props.name} time={props.time} />
        <div>
          <Typography>{props.text}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(TextMessage);
