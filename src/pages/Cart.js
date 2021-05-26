import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CartItem, Form } from '../components';

function Cart({ totalPrice, items }) {

  const addedPhones = Object.keys(items).map(key => {
    return items[key].items[0];
  });

  const handleSubmit = (values) => {
    console.log("Recipient :", values, "Order :", items);
    alert("Thanks, Order Added, Watch console!");
    console.log("Переброс на главную через 15 сек. из pages/Cart.js");
    setTimeout(() => window.location.href = "/", 15000);
  };

  return (
    <div className="container container--cart">
      {totalPrice ?
        <>
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">CART</h2>
            </div>
            <div className="content__items">
              {addedPhones.map(obj =>
                <CartItem
                  totalCount={items[obj.id].items.length}
                  data={obj}
                />)}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>TOTAL: <b>{totalPrice}$</b> </span>
              </div>
            </div>
          </div>
          <Form onSubmit={handleSubmit} />
        </> : <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>CART IS EMPTY</h2>
          </div>
        </div>}
    </div>
  );
}

Cart.propTypes = {
  totalPrice: PropTypes.number,
  items: PropTypes.objectOf(PropTypes.object),
};

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.totalPrice,
  items: cart.items,
});

export default connect(mapStateToProps)(Cart);
