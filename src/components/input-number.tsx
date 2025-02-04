import { ChangeEvent, FC } from "react";

interface InputNumberProps {
  value: number | string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputNumber: FC<InputNumberProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="number"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default InputNumber;
