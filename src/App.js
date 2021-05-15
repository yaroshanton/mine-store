import React, { useState, useEffect } from 'react';
import { Header } from './components';
import { Cart, Home } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setPhones(data.phones));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={phones} />} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div >
  );
}

export default App;
