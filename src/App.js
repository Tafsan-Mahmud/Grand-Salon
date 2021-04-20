import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import MainHome from "./Components/Home/MainHome/MainHome";
import AddAdmin from "./Components/InsideOfWeb/AddAdmin/AddAdmin";
import AddReview from "./Components/InsideOfWeb/AddReview/AddReview";
import AddService from "./Components/InsideOfWeb/AddService/AddService";
import Booking from "./Components/InsideOfWeb/Booking/Booking";
import BookingList from "./Components/InsideOfWeb/BookingList/BookingList";
import Dashboard from "./Components/InsideOfWeb/Dashboard/Dashboard";
import ManageServices from "./Components/InsideOfWeb/ManageServices/ManageServices";
import OrderList from "./Components/InsideOfWeb/OrderList/OrderList";
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
        <PrivetRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivetRoute>
        <PrivetRoute path="/addServices">
          <AddService></AddService>
        </PrivetRoute>
        <PrivetRoute path="/addreview">
          <AddReview></AddReview>
        </PrivetRoute>
        <PrivetRoute path="/booking/:id">
          <Booking></Booking>
        </PrivetRoute>
        <PrivetRoute path="/bookinglist">
          <BookingList></BookingList>
        </PrivetRoute>
        <PrivetRoute path="/makeAdmin">
          <AddAdmin></AddAdmin>
        </PrivetRoute>
        <PrivetRoute path="/orderList">
          <OrderList></OrderList>
        </PrivetRoute>
        <PrivetRoute path="/manageService">
          <ManageServices></ManageServices>
        </PrivetRoute>
      </Switch>
    </Router>
    </UserContex.Provider>
  );
}

export default App;
