import React from "react";
import classes from "./Modal.module.sass";

type Props = {
  children: JSX.Element | JSX.Element[];
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  modalActive: boolean;
  central?: boolean;
};

export const Modal = ({
  children,
  modalActive,
  setModalActive,
  central,
}: Props) => {
  if (modalActive)
    return (
      <div
        className={classes.Container}
        onClick={() => {
          setModalActive(false);
        }}
      >
        <div className={classes.ContentContainer}>{children}</div>
      </div>
    );
  return <></>;
};
