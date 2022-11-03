import { Button } from "@mui/material";
import { CartItemType } from "../../types";
import { Wrapper } from "./styles";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
interface Props {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="info">
        <p>Price: ${item.price}</p>
        <p>Total: ${item.amount * item.price}</p>
      </div>
    </div>
    <div className="buttons">
      <Button
        size="small"
        disableElevation
        variant="outlined"
        onClick={() => removeFromCart(item.id)}
      >
        <DeleteOutlinedIcon />
      </Button>
      <Button
        size="small"
        disableElevation
        variant="outlined"
        onClick={() => addToCart(item)}
      >
        <AddBoxOutlinedIcon />
      </Button>
    </div>
    <img src={item.image} width="100" alt={item.title} />
  </Wrapper>
);

export default CartItem;
