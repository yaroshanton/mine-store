import React from 'react';
import { Button } from '../components';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header__cart">
        <Link to="/cart">
          <Button />
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
