import React from 'react';
import PhoneBlock from '../components/PhoneBlock';
import { connect } from 'react-redux';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top"></div>
      <div className="content__items">
        {items.map(item => <PhoneBlock key={item.id} {...item} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.phones.items
});

export default connect(mapStateToProps)(Home);
