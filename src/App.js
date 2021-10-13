import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Tasks from "./components/Tasks";
import TaskDetail from "./components/TaskDetail";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App flex">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tasks" exact component={Tasks} />
          <Route path="/tasks/:id" component={TaskDetail}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
