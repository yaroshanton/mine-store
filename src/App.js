import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { Header } from './components';
import { Cart, Home } from './pages';
import { setPhones } from './redux/actions/phones';

class App extends Component {
  componentDidMount() {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => {
        this.props.setPhones(data.phones);
      });
  };

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div >
    );
  }
};

const mapDispatchToProps = dispatch => ({
  setPhones: (items) => dispatch(setPhones(items))
});

export default connect(null, mapDispatchToProps)(App);
