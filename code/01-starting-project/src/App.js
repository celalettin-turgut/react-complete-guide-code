import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    //localStorage.setItem("isLoggedIn", "1");
    console.log(email, password);
    setIsLoggedIn(true);
  };

  // useEffect(() => {
  //   if (localStorage.getItem("isLoggedIn") == 1) {
  //     setIsLoggedIn(true);
  //   }
  // }, [isLoggedIn]);

  const logoutHandler = () => {
    // localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
