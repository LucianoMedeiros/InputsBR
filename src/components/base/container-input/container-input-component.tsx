import { FC } from "react";
import { InputBaseInterface } from "../../../interfaces/input-base";
import Icon from "../icon/icon-component";
import {
  ContainerIconTag,
  ContainerInputTag,
  InputTag,
  LabelTag,
} from "./container-input-style";

const ContainerInput: FC<InputBaseInterface> = ({
  value,
  name,
  id = name,
  type,
  disabled,
  placeholder,
  onChange,
  required,
  label,
  labelPosition = "top",
  icon,
  iconPosition = "left",
}) => {
  return (
    <ContainerInputTag labelPosition={labelPosition}>
      <LabelTag htmlFor={id} labelPosition={labelPosition}>
        {label} {required && <sup>*</sup>}
      </LabelTag>

      <ContainerIconTag iconPosition={iconPosition}>
        <Icon>{icon}</Icon>
        <InputTag
          value={value}
          name={name}
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          iconPosition={iconPosition}
          hasIcon={icon != undefined}
        />
      </ContainerIconTag>
    </ContainerInputTag>
  );
};

export default ContainerInput;
