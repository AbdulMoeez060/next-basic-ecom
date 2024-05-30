interface UserContextData {
  token: string | null;
  handleToken: (token: string | null) => void;
}
