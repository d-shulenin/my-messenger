"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/(site)/components/Input/Input";
import Button from "../Button/Button";
import styles from "./authForm.module.css";
import AuthSocialButton from "../AuthSocialButton/AuthSocialButton";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

export type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  };
  const socialAction = (social: string) => {};
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        {variant == "REGISTER" && (
          <Input
            id="name"
            label="Name"
            type="text"
            register={register}
            errors={errors}
            placeholder="Full Name"
          />
        )}
        <Input
          id="email"
          label="Email"
          type="email"
          register={register}
          errors={errors}
          placeholder="example@email.com"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          register={register}
          errors={errors}
          placeholder="*************"
          variant={variant}
        />
        <Button type="submit" disabled={isLoading}>
          {variant === "LOGIN" ? "Login" : "Register"}
        </Button>
      </form>
      <div className={styles.strikethrough}>
        <span>Or continue with</span>
      </div>
      <div className={styles.socials}>
        <AuthSocialButton
          icon={FcGoogle}
          onClick={() => socialAction("google")}
        />
        <AuthSocialButton
          icon={BsGithub}
          onClick={() => socialAction("github")}
        />
      </div>
      {variant === "LOGIN" ? (
        <div className={styles.variant}>
          Don’t have account?{" "}
          <button
            onClick={(e) => {
              setVariant("REGISTER");
              e.currentTarget.blur();
            }}
          >
            Create new account
          </button>
        </div>
      ) : (
        <div className={styles.variant}>
          Already have an account?{" "}
          <button
            onClick={(e) => {
              setVariant("LOGIN");
              e.currentTarget.blur();
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
