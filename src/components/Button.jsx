import React, { Component } from "react";
import Link from "next/link";

const Button = ({
  target,
  href,
  type,
  // if you want to use as Link, change parent props as={Link}
  as: Component = "button",
  btnType,
  style,
  text,
  icon,
  iconPosition: iconPosition = "right",
  onClick,
}) => {
  const variants = {
    primary:
      "primary py-[8px] px-[2px] md:py-[10px] md:px-[20px] flex items-center gap-x-3 ",
    secondary:
      "secondary py-[10px] px-[10px] md:py-[10px] md:px-[20px]  flex gap-x-3  border-b-2 ",
  };

  return (
    <Component
      type={btnType}
      onClick={onClick}
      href={href}
      rel="noopener noreferrer"
      target={target}
      className={`${variants[type]} ${style}`}
    >
      {iconPosition === "left" && icon}

      {text}

      {iconPosition === "right" && icon}
    </Component>
  );
};

export default Button;
