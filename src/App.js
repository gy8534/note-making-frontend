import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NewNote from "./components/NewNote/NewNote";
import Submitted from "./components/Submitted/Submitted";
import ViewNote from "./components/ViewNote/ViewNote";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      title: "",
      author: "",
      body: "",
    };
  }


  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleClick = () => {
    const note = {
      title: this.state.title,
      author: this.state.author,
      body: this.state.body,
    };
    console.log(note);

    axios.post("http://localhost:5000/notes", note).then((res) => {
      this.setState({ id: res.data });
    });

  };

  render() {
    const { title, author, body } = this.state;
    const value = { title, author, body };
    return (
      <Router>
        <Navbar />
        <Switch>
          {this.state.id === "" ?
          <Route
          path="/"
          exact
          render={() => (
            <NewNote
              values={value}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
            />
          )}
        />:
        <Route
            path="/"
            exact
            render={() => <Submitted id={this.state.id} />}
          />
        } 
          
          <Route exact path="/viewnotes/:id" component={ViewNote} />
        </Switch>
      </Router>
    );
  }
}

export default App;
