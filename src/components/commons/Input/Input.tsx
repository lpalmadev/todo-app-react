import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element;
}

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="bg-white h-9 rounded border border-solid border-gray-300 w-full pl-2 pr-6 pt-1 pb-1 focus:outline-none"
      {...props}
    ></input>
  );
};

export default Input;
