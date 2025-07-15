import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

export interface TextProps extends ComponentProps<"p"> {
  children?: ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "3xl" | "2xl" | "xl" | "lg" | "base" | "sm" | "xs";
  type?: "normal" | "medium" | "semibold" | "bold" | "light";
  variant?: string;
}

const Text = ({
  children,
  className,
  as: Component = "div",
  size = "base",
  variant = "primary",
  type = "normal",
  ...props
}: TextProps) => {
  return (
    <Component
      className={clsx(
        `text-${size}`,
        `font-${type}`,
        `text-${variant}`,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
