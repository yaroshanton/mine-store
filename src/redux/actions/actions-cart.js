export const addPhoneToCart = phoneObj => ({
  type: 'ADD_PHONE_CART',
  payload: phoneObj
});

export const plusCartItem = id => ({
  type: 'PLUS_CART_ITEM',
  payload: id
});

export const minusCartItem = id => ({
  type: 'MINUS_CART_ITEM',
  payload: id
});

export const removeCartItem = id => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});