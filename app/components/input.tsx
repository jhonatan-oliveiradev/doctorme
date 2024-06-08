import { forwardRef, HTMLProps } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <input
        className={`focus-visible:ring-lime-400" rounded-lg border border-zinc-200 p-[15px] outline-none hover:ring-2 hover:ring-green-500 focus-visible:ring-2 ${className}`}
        type={type}
        {...props}
        ref={ref}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
