import React, { useState, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { userContext } from "../../context/userContext";
import Input from "../UI/Input/Input";

const reducer = (state, action) => {
  if (action.type === "INPUT_EMAIL") {
    return { ...state, enteredEmail: action.payload };
  }
  if (action.type === "INPUT_PASSWORD") {
    return { ...state, enteredPassword: action.payload };
  }
  if (action.type === "CHECK_VALIDITY") {
    return {
      ...state,
      emailIsValid: state.enteredEmail.includes("@"),
      passwordIsValid: state.enteredPassword.trim().length > 6,
      formIsValid: state.emailIsValid && state.passwordIsValid,
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
  const { user, setUser } = useContext(userContext);
  const [state, dispatch] = useReducer(reducer, {
    enteredEmail: "",
    enteredPassword: "",
    passwordIsValid: false,
    emailIsValid: false,
  });

  React.useEffect(() => {
    console.log("form validation");
    setFormIsValid(state.emailIsValid && state.passwordIsValid);
  }, [state.emailIsValid, state.passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatch({ type: "INPUT_EMAIL", payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: "INPUT_PASSWORD", payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatch({ type: "CHECK_VALIDITY" });
  };

  const validatePasswordHandler = () => {
    console.log("Password validation");
    dispatch({ type: "CHECK_VALIDITY" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(state.enteredEmail, state.enteredPassword);
    console.log(user);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          className={`${
            state.passwordIsValid === false ? classes.invalid : ""
          }`}
          value={state.enteredEmail}
          id="email"
          type="email"
          onChange={(e) => {
            emailChangeHandler(e);
            validateEmailHandler();
          }}
        >
          Email
        </Input>
        <Input
          className={`${
            state.passwordIsValid === false ? classes.invalid : ""
          }`}
          id="password"
          value={state.enteredPassword}
          type="password"
          onChange={(e) => {
            passwordChangeHandler(e);
            validatePasswordHandler();
          }}
        >
          Password
        </Input>

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
