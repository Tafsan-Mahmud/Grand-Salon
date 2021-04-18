import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import MainHome from "./Components/Home/MainHome/MainHome";
import AddService from "./Components/InsideOfWeb/AddService/AddService";
import Booking from "./Components/InsideOfWeb/Booking/Booking";
import Dashboard from "./Components/InsideOfWeb/Dashboard/Dashboard";
import PlaceOrder from "./Components/InsideOfWeb/PlaceOrder/PlaceOrder";
import Login from "./Components/Login/Login";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";


export const UserContex = createContext()


function App() {
  const [LogegInUser, setLogedInUser] = useState({});
  return (<UserContex.Provider value={[LogegInUser, setLogedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
        <MainHome></MainHome>
        </Route>
        <Route exact path="/">
          <MainHome></MainHome>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivetRoute path="/placeOrder">
          <PlaceOrder></PlaceOrder>
        </PrivetRoute>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/addServices">
          <AddService></AddService>
        </Route>
        <PrivetRoute path="/booking/:id">
          <Booking></Booking>
        </PrivetRoute>
      </Switch>
    </Router>
    </UserContex.Provider>
  );
}

export default App;
