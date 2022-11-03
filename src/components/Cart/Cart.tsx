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
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {!cartItems.length ? (
        <p>no items</p>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </Wrapper>
  );
};

export default Cart;
