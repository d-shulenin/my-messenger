import { FC } from "react";
import { IconType } from "react-icons";
import styles from "./authSocialButton.module.css";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
