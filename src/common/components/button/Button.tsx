import React from "react";
import classes from "./Button.module.sass";

type Props = {
  text: string;
  filled?: boolean;
  click?: () => void;
  price?: number;
};

export const Button = ({ text, click, filled, price }: Props) => {
  return (
    <button
      className={
        price
          ? classes.ContainerFilledWithPrice
          : filled
            ? classes.ContainerFilled
            : classes.Container
      }
      onClick={click && click}
    >
      <span>{text}</span> {price && <span>{price}₽</span>}
    </button>
  );
};
