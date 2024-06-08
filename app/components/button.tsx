import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        className="w-full rounded-lg bg-[#459487] p-4 font-semibold text-white transition-all hover:bg-green-500"
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
