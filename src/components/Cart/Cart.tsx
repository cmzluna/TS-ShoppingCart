import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./styles";
import { CartItemType } from "../../types";
import React from "react";

interface Props {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const getTotal = (items: CartItemType[]) =>
    items.reduce((acum: number, item) => acum + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {!cartItems.length ? (
        <p>There are no items in your cart yet.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
          <h1>Total amount: $ {getTotal(cartItems)} </h1>
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;
