import classNames from "classnames";
import { FC } from "react";
import { InputBaseInterface } from "../../../interfaces/input-base";
import ContainerInput from "../container-input/container-input-component";
import Error from "../error/error-component";
import { InputBaseTag } from "./input-base-style";

const InputBase: FC<InputBaseInterface> = (props) => {
  return (
    <InputBaseTag
      data-lib="inputsbr"
      className={classNames("ibr-component", props.className)}
    >
      <ContainerInput {...props} />
      <Error>{props.errorMessage}</Error>
    </InputBaseTag>
  );
};

export default InputBase;
