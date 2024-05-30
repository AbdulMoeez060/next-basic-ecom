interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  labelHtmlFor?: string;
}

interface ProductCardProps extends Product {
  index: number;
}
