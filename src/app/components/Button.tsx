import React from "react";
type ButtonSize = "default" | "sm" | "lg";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}
const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}: ButtonProps) => {
  const baseClass =
    "relative cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible-ring-primary hover:bg-primary/90 bg-primary";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClass} ${sizeClasses[size]} ${className} shadow-orange-glow`;
  return (
    <button className={classes} {...props}>
      <span className="flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
