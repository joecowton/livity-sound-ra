import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import ReleasePage from "./components/ReleasePage";
import Navbar from "./components/core/Navbar";
import LandingPage from "./components/LandingPage";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(aws_exports);

const App = () => (
  <div>
    <Route path="/" component={Navbar} />
    <Route path="/" exact component={LandingPage} />
    <Route path="/releases" component={withAuthenticator(ReleasePage, true)} />
  </div>
);

export default App;
