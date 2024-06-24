import React from "react";
import classes from "./AppWrapper.module.sass";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const AppWrapper = ({ children }: Props) => {
  return <div className={classes.Container}>{children}</div>;
};
