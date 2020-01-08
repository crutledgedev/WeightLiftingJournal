import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Login from "./components/login";
import Logout from "./logout";
import Register from "./components/RegisterPage";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UserLog from "./components/Forms/UserLog";
import ExerciseList from "./components/Forms/ExerciseList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Login}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/register" component={Register}/>
      <Route path="/profile" component={Profile}/>
      <PrivateRoute path="/home" component={ExerciseList}/>
    </div>
  );
}

export default App;
