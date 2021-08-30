import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.handleErrorOkay} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Errorrrrr!!!!!!</h2>
        </header>
        <div className={classes.content}>
          {props.error.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.handleErrorOkay}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
