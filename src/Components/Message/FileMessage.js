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
  },
  img: {
    width: "auto",
    height: 150,
    maxWidth: 200,
    minWidth: 36,
    border: "1px solid #dadde0",
    borderRadius: 18
  }
};

const FileMessage = props => {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Avatar className={classes.avatar}>OP</Avatar>
      <div className={classes.right}>
        <MessageHeader name={props.name} time={props.time} />
        <div>
          <img
            className={classes.img}
            src="http://cdn.osxdaily.com/wp-content/uploads/2016/09/search-preview-mac-pdf-1.jpg"
          />
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(FileMessage);
