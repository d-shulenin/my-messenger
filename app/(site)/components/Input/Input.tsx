"use client";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";
import { FC } from "react";
import styles from "./input.module.css";
import classNames from "classnames";
import { Variant } from "../AuthForm/AuthForm";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder: string;
  variant?: Variant;
}

const Input: FC<InputProps> = (props) => {
  const {
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled,
    placeholder,
    variant,
  } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
        {type === "password" && variant === "LOGIN" && (
          <span className={styles.forgot}>Forgot password?</span>
        )}
      </div>
      <input
        className={classNames(
          styles.input,
          errors[id] && styles.error,
          disabled && styles.disabled
        )}
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register(id, { required })}
      ></input>
    </div>
  );
};

export default Input;
