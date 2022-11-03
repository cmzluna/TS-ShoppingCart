import axios from "axios";
import { CartItemType } from "../../types";

const getProducts = async (): Promise<CartItemType[]> => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};

export default getProducts;
