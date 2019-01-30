// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Containers
import Home from '../../containers/Home/Home';
import About from '../../containers/About/About';
import NotFound from '../../containers/Error/404';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
