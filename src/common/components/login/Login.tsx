import React from "react";
import classes from "./Login.module.sass";
import loginCall from "../../../assets/images/icons/loginCall.svg";

export const Login = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Button}>
        <img src={loginCall} alt="Кнопка входа" className={classes.Image}/>
      </div>
      Вход/регистрация
    </div>
  );
};
