import React, { useEffect, useCallback, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import { useRouts } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Loader } from "./components/Loader";

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  
  const isAuthenticated = !!token;
  const routes = useRouts(isAuthenticated);

  

  

  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
  
        <Router>
          <div className="App">{routes}</div>
        </Router>
     
    </AuthContext.Provider>
  );
}

export default App;
