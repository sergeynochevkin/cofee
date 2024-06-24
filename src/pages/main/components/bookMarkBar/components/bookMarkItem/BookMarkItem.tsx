import React, { SetStateAction } from "react";
import classes from "./BookMarkItem.module.sass";
import { GroupInterface } from "../../../../../../interfaces";

type Props = {
  el: GroupInterface;
  selected: GroupInterface;
  setSelected: React.Dispatch<SetStateAction<GroupInterface>>;
};

export const BookMarkItem = ({ el, selected, setSelected }: Props) => {
  return (
    <div
      className={
        el.id === selected.id ? classes.ContainerSelected : classes.Container
      }
      onClick={() => {
        setSelected(el);
      }}
    >
      <img src={el.image} className={classes.Image} alt="Напиток" />
      <div className={classes.Name}>{el.name}</div>
      {el.id === selected.id && (
        <div
          className={
            el.value === "tea"
              ? classes.ColoredCircleTea
              : el.value === "shakes"
                ? classes.ColoredCircleShakes
                : el.value === "drinks"
                  ? classes.ColoredCircleDrinks
                  : classes.ColoredCircle
          }
        />
      )}
    </div>
  );
};
