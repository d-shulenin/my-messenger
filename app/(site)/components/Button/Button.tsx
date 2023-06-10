"use client";

import { FC } from "react";
import styles from "./button.module.css";
import classNames from "classnames";

interface ButtonProps {
  type?: "button" | "submit";
  children: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, disabled } = props;
  return (
    <button
      className={classNames(styles.button, disabled && styles.disabled)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
