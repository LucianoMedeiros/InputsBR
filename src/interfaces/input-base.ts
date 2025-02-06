import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";

export interface InputBaseInterface {
  //Data & Validation
  id?: string;
  name: string;
  label: string;
  value: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;

  type?: HTMLInputTypeAttribute;

  //Input with text
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  multiline?: boolean;
  mask?: string;

  //Events
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;

  //Styles
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  labelPosition?: "left" | "right" | "top";
}
