import { forwardRef, HTMLAttributes } from "react";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, ...props }) => {
    return <label>{children}</label>;
  },
);

Label.displayName = "Label";

export { Label };
