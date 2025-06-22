import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "destructive" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500 shadow-sm hover:shadow-md",
      ghost: "hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-400",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400",
      destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 shadow-sm hover:shadow-md",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-md",
      md: "h-10 px-4 py-2 text-sm rounded-lg",
      lg: "h-12 px-8 text-base rounded-lg",
      icon: "h-10 w-10 rounded-lg",
    };

    const variantStyles = variants[variant];
    const sizeStyles = sizes[size];

    return (
      <button ref={ref} className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
