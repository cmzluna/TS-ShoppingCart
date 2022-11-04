import { Button } from "@mui/material";
import { CartItemType } from "../../types";
import { Wrapper, ButtonsWrapper } from "./styles";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";

interface Props {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div className="description">
      <img src={item.image} width="60" alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
      </div>
    </div>
    <ButtonsWrapper>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          size="small"
          disableElevation
          variant="text"
          onClick={() => removeFromCart(item.id)}
        >
          <RemoveCircleOutlineOutlinedIcon />
        </Button>
        <div className="no-border-radius">
          <TextField
            size="small"
            defaultValue={item.amount}
            fullWidth
            id="outlined-basic"
          />
        </div>
        <Button
          size="small"
          disableElevation
          variant="text"
          onClick={() => addToCart(item)}
        >
          <AddCircleOutlineOutlinedIcon />
        </Button>
      </ButtonGroup>
    </ButtonsWrapper>
    <div className="info">
      <p>Total: ${item.amount * item.price}</p>
    </div>
  </Wrapper>
);

export default CartItem;
