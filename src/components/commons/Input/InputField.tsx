import { Input, InputLabel } from ".";

interface InputFieldProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
}: InputFieldProps) => {
  return (
    <>
      <InputLabel text={label} htmlFor={name} />
      <Input
        name={name}
        type={type}
        id={name}
        onChange={onChange}
        value={value}
        hasError={error ? true : false}
        placeholder={placeholder}
      />
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </>
  );
};

export default InputField;
