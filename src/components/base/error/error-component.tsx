import { PropsWithChildren } from "react";
import { ErrorTag } from "./error-style";

const Error = ({ children }: PropsWithChildren) => {
  return (
    children && <ErrorTag className="ibr-error-message">{children}</ErrorTag>
  );
};

export default Error;
