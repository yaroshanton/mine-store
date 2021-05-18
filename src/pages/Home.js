import React from 'react';
import PropTypes from 'prop-types';
import PhoneBlock from '../components/PhoneBlock';
import { connect } from 'react-redux';
import { addPhoneToCart } from '../redux/actions/actions-cart';
import { Header } from '../components';

function Home({ items, handleAddPhoneToCart, cartItems }) {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content__top"></div>
        <div className="content__items">
          {items.map(item => <PhoneBlock onClickAddPhone={handleAddPhoneToCart} key={item.id} addedCount={cartItems[item.id] && cartItems[item.id].length} {...item} />)}
        </div>
      </div>
    </>
  );
}

Home.propTypes = {
  totalPrice: PropTypes.number,
  cartItems: PropTypes.objectOf(PropTypes.object)
};

const mapStateToProps = (state) => ({
  items: state.phones.items,
  cartItems: state.cart.items,
});

const mapDispatchToProps = dispatch => ({
  handleAddPhoneToCart: (obj) => dispatch(addPhoneToCart(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
