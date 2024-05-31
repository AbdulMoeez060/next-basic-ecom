interface UserContextData {
  token: string | null;
  handleToken: (token: string | null) => void;
}
interface CartContextData {
  cart: Cart | null;
  handleCart: (cart: Cart | null) => void;
}
