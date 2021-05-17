import React from 'react';
import PhoneBlock from '../components/PhoneBlock';
import { connect } from 'react-redux';
import { addPhoneToCart } from '../redux/actions/actions-cart';

function Home({ items, handleAddPhoneToCart, cartItems }) {
  return (
    <div className="container">
      <div className="content__top"></div>
      <div className="content__items">
        {items.map(item => <PhoneBlock onClickAddPhone={handleAddPhoneToCart} key={item.id} addedCount={cartItems[item.id] && cartItems[item.id].length} {...item} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.phones.items,
  cartItems: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  handleAddPhoneToCart: (obj) => dispatch(addPhoneToCart(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
