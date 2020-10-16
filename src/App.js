import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Authentication/Login/Login';
import PrivateRoute from './Components/Shared/PrivateRoute.js/PrivateRoute';
import AdminPanel from './Components/AdminPanel/AdminPanel/AdminPanel';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser,setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
  })
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/client">
            <AdminPanel />
          </PrivateRoute>
          <Route path="/client">
            <AdminPanel />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
