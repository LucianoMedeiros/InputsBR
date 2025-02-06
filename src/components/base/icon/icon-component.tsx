import { PropsWithChildren } from "react";
import { IconTag } from "./icon-style";

const Icon = ({ children }: PropsWithChildren) => {
  return children && <IconTag className="ibr-icon">{children}</IconTag>;
};

export default Icon;
