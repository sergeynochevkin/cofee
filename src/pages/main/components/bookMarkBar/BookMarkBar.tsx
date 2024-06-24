import React, { SetStateAction } from "react";
import classes from "./BookMarkBar.module.sass";
import { BookMarkItem } from "./components/bookMarkItem/BookMarkItem";
import { GroupInterface } from "./../../../../interfaces";

type Props = {
  list: GroupInterface[];
  selected: GroupInterface;
  setSelected: React.Dispatch<SetStateAction<GroupInterface>>;
};

export const BookMarkBar = ({ selected, list, setSelected }: Props) => {
  return (
    <div className={classes.Container}>
      {list.map((el) => (
        <BookMarkItem
          key={el.id}
          el={el}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};
