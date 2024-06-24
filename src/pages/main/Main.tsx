import React from "react";
import classes from "./Main.module.sass";
import { Login } from "../../common/components/login/Login";
import { BookMarkBar } from "./components/bookMarkBar/BookMarkBar";
import { useMain } from "./hooks/useMain";
import { DrinksList } from "./components/drinksList/DrinksList";
import { Modal } from "../../common/components/modal/Modal";
import { ModalContent } from "./components/modalContent/ModalContent";

export const Main = () => {
  const {
    groupsList,
    selected,
    setSelected,
    drinksList,
    modalActive,
    setModalActive,
    setDrink,
    order
  } = useMain();

  return (
    <div
      className={
        selected.value === "drinks"
          ? classes.ContainerDrinks
          : selected.value === "shakes"
            ? classes.ContainerShakes
            : selected.value === "tea"
              ? classes.ContainerTea
              : classes.Container
      }
    >
      <div className={classes.Header}>
        <div className={classes.Title}> Выбор напитка</div>
        <Login />
      </div>
      <BookMarkBar
        list={groupsList}
        selected={selected}
        setSelected={setSelected}
      />
      <DrinksList
        selected={selected}
        drinksList={drinksList}
        setDrink={setDrink}
      />
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <ModalContent
          currentDrink={order.drink}
          setModalActive={setModalActive}
          setDrink={setDrink}
          order={order}
        />
      </Modal>
    </div>
  );
};
