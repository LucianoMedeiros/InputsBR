import classNames from "classnames";
import { ChangeEvent, FC } from "react";
import { InputBaseInterface } from "../../interfaces/input-base";
import applyMask from "../../utils/apply-mask";
import InputBase from "../base/input-base/input-base-component";

type InputPhoneProps = Omit<
  InputBaseInterface,
  "type" | "maxLength" | "minLength" | "multiline"
>;

const InputPhone: FC<InputPhoneProps> = (props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (props.mask) {
      newValue = applyMask(newValue, props.mask);
    }

    const modifiedEvent = {
      ...event,
      target: {
        ...event.target,
        value: newValue,
      },
    };

    props.onChange(modifiedEvent as ChangeEvent<HTMLInputElement>);
  };

  return (
    <InputBase
      {...props}
      type="text"
      onChange={handleChange}
      className={classNames("ibr-input-phone", props.className)}
    />
  );
};

export default InputPhone;
