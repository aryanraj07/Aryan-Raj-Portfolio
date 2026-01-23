import React from "react";
type ButtonSize = "default" | "sm" | "lg";
type ButtonVariant = "primary" | "danger" | "success" | "outline";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  const baseClass =
    "relative cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible-ring-primary ";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-orange-glow",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    outline:
      "border border-gray-400 text-white hover:bg-white/10 bg-transparent",
  };
  const classes = `${baseClass} ${sizeClasses[size]} ${className} ${variantClasses[variant]} `;
  return (
    <button className={classes} {...props}>
      <span className="flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
