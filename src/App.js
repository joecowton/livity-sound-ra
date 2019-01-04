import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ReleasePage from "./components/ReleasePage";
import Navbar from "./components/core/Navbar";
import LandingPage from "./components/LandingPage";

export default () => (
  <div>
    <Route path="/" component={Navbar} />
    <Route path="/" exact component={LandingPage} />
    <Route path="/releases" component={ReleasePage} />
  </div>
);
