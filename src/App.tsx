import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, CircularProgress, Grid, Badge } from "@mui/material";
import { StyledButton, Wrapper } from "./styles";
import { CartItemType } from "./types";
import getProducts from "./api/getProducts/getProducts";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  console.log("******", data);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const handleAddToCart = (clickedItem: CartItemType) => {
    const foundIndex = cartItems.findIndex(({ id }) => id === clickedItem.id);

    const validatedExistingItem = foundIndex > -1;

    const updatedItem = validatedExistingItem
      ? {
          ...cartItems[foundIndex],
          amount: cartItems[foundIndex]["amount"]++,
        }
      : { ...clickedItem, amount: 1 };

    const updatedArray = validatedExistingItem
      ? [...cartItems.splice(foundIndex, 1, updatedItem)]
      : [...cartItems, updatedItem];

    setCartItems((items) => [...updatedArray]);
  };

  const handleRemoveFromCart = (id: number) => null;
  const getTotalItems = (items: CartItemType[]) => {
    console.log("items= ", items);

    return items.reduce((acum: number, item) => acum + item.amount, 0);
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Wrapper>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)}>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
