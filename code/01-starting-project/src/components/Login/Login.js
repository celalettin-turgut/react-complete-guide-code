import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return { ...state, enteredEmail: action.payload };
  }
  if (action.type === "CHECK_VALIDITY") {
    return {
      ...state,
      emailIsValid: state.enteredEmail.includes("@"),
    };
  }

  return state;
};

const passwordReducer = (state, action) => {
  if (action.type === "INPUT_PASSWORD") {
    return { ...state, enteredPassword: action.payload };
  }
  if (action.type === "CHECK_VALIDITY") {
    return {
      ...state,
      passwordIsValid: state.enteredPassword.trim().length > 6,
    };
  }

  return state;
};

const Login = (props) => {
  console.log("Re-render");
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [stateEmail, dispatchEmail] = useReducer(emailReducer, {
    enteredEmail: "",
    emailIsValid: false,
  });

  const [statePassword, dispatchPassword] = useReducer(passwordReducer, {
    enteredPassword: "",
    passwordIsValid: false,
  });

  React.useEffect(() => {
    console.log(stateEmail);
    console.log(statePassword);
  }, [stateEmail, statePassword]);

  React.useEffect(() => {
    setFormIsValid(stateEmail.emailIsValid && statePassword.passwordIsValid);
  }, [stateEmail?.emailIsValid, statePassword.passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "INPUT_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    console.log("Email validation");
    dispatchEmail({ type: "CHECK_VALIDITY" });
  };

  const validatePasswordHandler = () => {
    console.log("Password validation");
    dispatchPassword({ type: "CHECK_VALIDITY" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(stateEmail.enteredEmail, statePassword.enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            stateEmail?.emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={stateEmail?.enteredEmail}
            onChange={(e) => {
              emailChangeHandler(e);
              validateEmailHandler();
            }}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            statePassword.passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={statePassword.enteredPassword}
            onChange={(e) => {
              passwordChangeHandler(e);
              validatePasswordHandler();
            }}
            //onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
