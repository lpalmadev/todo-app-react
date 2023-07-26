import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}
const InputLabel = ({ text, ...props }: LabelProps) => {
  return (
    <label className="mb-2 pb-0 text-gray-600 text-sm" {...props}>
      {text}
    </label>
  );
};

export default InputLabel;
