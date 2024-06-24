import classes from "./DrinksList.module.sass";
import { DrinkInterFace, GroupInterface } from "../../../../interfaces";
import { DrinkListItem } from "./components/drinklListItem/DrinkListItem";

type Props = {
  selected: GroupInterface;
  drinksList: DrinkInterFace[]
  setDrink: (drink: DrinkInterFace) =>void
};

export const DrinksList = ({ selected, drinksList,setDrink }: Props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.TitleContainer}>
        <div className={classes.Title}>{selected.name} </div>
        <div
          className={
            selected.value === "tea"
              ? classes.ColoredCircleTea
              : selected.value === "shakes"
                ? classes.ColoredCircleShakes
                : selected.value === "drinks"
                  ? classes.ColoredCircleDrinks
                  : classes.ColoredCircle
          }
        />
      </div>
      <div className={classes.ListContainer}>
        {drinksList.map(el=><DrinkListItem key = {el.id} el={el} setDrink = {setDrink}/>)}
      </div>
    </div>
  );
};
