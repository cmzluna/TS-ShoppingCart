export interface CartItemType {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

export interface SelectOption {
  label: string;
  value: string | number;
}
