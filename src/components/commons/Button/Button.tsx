import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | JSX.Element[];
  title: string
  isPrimary?: boolean
}

const Button = ({ title, isPrimary, children, ...props }: ButtonProps) => {
  return (
    <button
      className={` ${isPrimary? 'bg-indigo-600 text-white border-0' : 'bg-white border'} flex items-center justify-center relative w-full min-h-[52px] text-base cursor-pointer rounded-sm pt-1 pr-4 pb-1 pl-4 mt-4 mb-4 focus:outline-none focus:shadow-outline`}
      {...props}
    >
      {children}
      {title}
    </button>
  );
};

export default Button;
