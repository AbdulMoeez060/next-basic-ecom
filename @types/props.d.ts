interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  labelHtmlFor?: string;
}

interface ProductCardProps extends Product {
  index: number;
}

interface AddCartProps {
  productId: number;
  hasControls?: boolean;
}

interface LoadMoreProps {
  products: Product[];
}

interface RemoveCartProps {
  itemQuantity: number;
  id: number;
  productId: number;
}
