import { cn } from "@/utils/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "danger";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none px-4 py-2";

    const variants = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700",
      ghost: "bg-transparent hover:bg-zinc-800 text-zinc-100",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
