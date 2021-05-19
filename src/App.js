import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Cart, Home } from './pages';
import { fetchPhones } from './redux/actions/actions-phones';

class App extends Component {
  componentDidMount() {
    this.props.fetchPhone();
  };

  render() {
    return (
      <div className="wrapper">

        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div >
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPhone: () => dispatch(fetchPhones())
});

export default connect(null, mapDispatchToProps)(App);
