import React, { type ReactNode } from "react";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseClasses =
    "rounded-md font-medium transition cursor-pointer flex items-center justify-center gap-1";

  const variantClasses = {
    primary: "bg-mainBg text-white",
    secondary: "bg-white border border-blue text-[#919EAB]",
  };

  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-2.5 text-lg",
    xl: "px-6 py-3 text-xl",
    "2xl": "px-7 py-3.5 text-2xl",
    "3xl": "px-8 py-4 text-3xl",
    "4xl": "px-10 py-5 text-4xl",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CommonButton;
