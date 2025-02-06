import styled from "styled-components";

interface CustomProps {
  iconPosition?: "left" | "right";
  labelPosition?: "left" | "right" | "top";
  hasIcon?: boolean;
}

const ContainerInputTag = styled.div<CustomProps>`
  display: flex;
  align-items: ${(props) =>
    props.labelPosition === "top" ? `start` : `center`};
  gap: ${(props) => (props.labelPosition === "top" ? `0` : `.5rem`)};
  flex-direction: ${(props) =>
    props.labelPosition === "left"
      ? `row`
      : props.labelPosition === "right"
      ? `row-reverse`
      : `column`};
`;

const LabelTag = styled.label<CustomProps>`
  font-size: ${(props) => (props.labelPosition === "top" ? `1rem` : `1.25rem`)};
  cursor: pointer;
`;

const InputTag = styled.input<CustomProps>`
  min-width: 300px;
  height: 2rem;
  font-size: 1.25rem;
  padding: 0.5rem;
  color: #666;

  ${(props) =>
    props.iconPosition === "left" && props.hasIcon && ` padding-left: 3rem;`}
  ${(props) =>
    props.iconPosition === "right" && props.hasIcon && ` padding-right: 3rem;`}
`;

const ContainerIconTag = styled.div<CustomProps>`
  position: relative;

  & .ibr-icon {
    right: ${(props) =>
      props.iconPosition === "left" ? `  calc(100% - 2.5rem)` : `0.5rem`};

    & svg {
      font-size: 2rem;
    }
  }
`;

export { ContainerInputTag, LabelTag, InputTag, ContainerIconTag };
