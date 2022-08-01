import React, {useEffect, useState} from "react";
import AppRouter from "components/Router";
import {authService} from "fbase"

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {

  }, [])
  // setInterval(()=>{
  //   console.log(authService.currentUser)
  // }, 2000)
  return <AppRouter isLoggedIn={isLoggedIn}/>;
}

export default App;
