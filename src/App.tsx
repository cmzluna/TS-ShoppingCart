import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, CircularProgress, Grid, Badge } from "@mui/material";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { StyledButton, Wrapper } from "./styles";
import { CartItemType } from "./types";
import getProducts from "./api/getProducts/getProducts";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Selector from "./components/Selector/Selector";
import Item from "./components/Item/Item";
import Cart from "./components/Cart/Cart";

const App = () => {
  const { data, isLoading } = useQuery<CartItemType[]>("products", getProducts);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [showSnackBar, setShowSnackBar] = useState(false);

  // selector
  const options = [
    { label: "First", value: 1 },
    { label: "Sec", value: 2 },
    { label: "Third", value: 3 },
    { label: "Four", value: 4 },
    { label: "Five", value: 5 },
  ];

  const handleAddToCart = (clickedItem: CartItemType) => {
    setShowSnackBar(false);
    setCartItems((prevCartItems) => {
      const foundIndex = prevCartItems.findIndex(
        ({ id }) => id === clickedItem.id
      );
      const validExistingItem = foundIndex > -1;

      const updatedItem = {
        ...clickedItem,
        amount: prevCartItems[foundIndex]?.["amount"] + 1,
      };

      const updatedArray = validExistingItem
        ? [
            ...prevCartItems.slice(0, foundIndex),
            updatedItem,
            ...prevCartItems.slice(foundIndex + 1),
          ]
        : [...prevCartItems, { ...clickedItem, amount: 1 }];

      return updatedArray;
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setShowSnackBar(false);

    setCartItems((prevCartItems) => {
      const foundIndex = prevCartItems.findIndex((item) => item.id === id);
      const validExistingItem = foundIndex > -1;
      const foundProduct = prevCartItems[foundIndex];

      if (validExistingItem && foundProduct.amount === 1) setShowSnackBar(true);
      // https://stackoverflow.com/questions/59779137/cannot-throw-an-error-in-react-hook-set-function

      const updatedItem = {
        ...foundProduct,
        amount: prevCartItems[foundIndex]?.["amount"] - 1,
      };

      const updatedArray = validExistingItem
        ? [
            ...prevCartItems.slice(0, foundIndex),
            updatedItem,
            ...prevCartItems.slice(foundIndex + 1),
          ]
        : [...prevCartItems, { ...foundProduct, amount: 1 }]; // can omit this clause in handleRemoveFromCart

      return updatedArray;
    });
  };

  const getTotalItems = (items: CartItemType[]) => {
    console.log("items = ", items);

    return items.reduce((acum: number, item) => acum + item.amount, 0);
  };

  if (isLoading) return <CircularProgress />;

  return (
    <Wrapper>
      <Snackbar
        open={showSnackBar}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setShowSnackBar(false)}
      >
        <Alert severity="warning" sx={{ width: "100%" }}>
          <b>Should buy at least one item.</b>
          <p>Click on the basket to remove item from your cart.</p>
        </Alert>
      </Snackbar>

      <Selector
        options={options}
        value={options[1]}
        onChange={() => undefined}
      />
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
        <Badge badgeContent={getTotalItems(cartItems)} color="primary">
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
