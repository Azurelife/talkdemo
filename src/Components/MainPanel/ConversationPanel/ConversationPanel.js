import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextMessage from "../../Message/TextMessage";
import FileMessage from "../../Message/FileMessage";
import { Button } from "@material-ui/core";

const styles = {
  root: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "40%",
    margin: "12px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    height: 80
  }
};
const ConversationPanel = props => {
  const { classes } = props;

  const renderHeader = () => {
    return (
      <div className={classes.header}>
        Headers Holder
        <Button variant="contained" color="primary">
          Export
        </Button>
      </div>
    );
  };
  return (
    <div className={classes.root}>
      {renderHeader()}
      <TextMessage
        name="Chen Peng"
        time="5:12 PM"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis sed quam non suscipit."
      />
      <FileMessage name="Chen Peng" time="5:12 PM" />
      <TextMessage
        name="Chen Peng"
        time="5:12 PM"
        text="Pariatur magna consequat amet cupidatat consectetur Lorem esse sit labore sint reprehenderit."
      />
      <TextMessage
        name="Chen Peng"
        time="5:12 PM"
        text="Mollit eiusmod in reprehenderit excepteur voluptate minim."
      />
      <TextMessage
        name="Chen Peng"
        time="5:12 PM"
        text="Aliquip anim qui laborum cillum incididunt esse est commodo."
      />
      <TextMessage
        name="Chen Peng"
        time="5:12 PM"
        text="Minim incididunt aliqua elit tempor veniam aliqua et ut exercitation eu eu ea."
      />
      <TextMessage
        name="Chen Peng"
        time="5:12 PM"
        text="Ipsum sit velit nulla labore et sint velit occaecat tempor ipsum sunt labore."
      />
    </div>
  );
};

export default withStyles(styles)(ConversationPanel);
