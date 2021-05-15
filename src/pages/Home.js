import React from 'react';
import PhoneBlock from '../components/PhoneBlock';


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

export default Home;
