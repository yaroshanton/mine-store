import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CartItem, Form } from '../components';
import { minusCartItem, plusCartItem, removeCartItem } from '../redux/actions/actions-cart';

function Cart({ totalPrice, items, minusItem, plusItem, removeCartItem }) {

  const addedPhones = Object.keys(items).map(key => {
    return items[key].items[0];
  });

  const handleSubmit = (values) => {
    console.log("Recipient :", values, "Order :", items);
    alert("Thanks, Order Added");
    localStorage.clear();
    console.log("Переброс на главную через 15 сек. из pages/Cart.js");
    setTimeout(() => window.location.href = "/", 15000);
  };
  console.log(items);
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
                  key={obj.id}
                  id={obj.id}
                  name={obj.name}
                  imageUrl={obj.imageUrl}
                  totalCount={items[obj.id].items.length}
                  minusItem={minusItem}
                  plusItem={plusItem}
                  removeItem={removeCartItem}
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

const mapDispatchToProps = dispatch => ({
  minusItem: (id) => dispatch(minusCartItem(id)),
  plusItem: (id) => dispatch(plusCartItem(id)),
  removeCartItem: (id) => dispatch(removeCartItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
