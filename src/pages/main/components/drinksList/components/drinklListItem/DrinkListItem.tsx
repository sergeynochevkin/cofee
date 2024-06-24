import React from 'react'
import classes from './DrinkListItem.module.sass'
import { DrinkInterFace } from '../../../../../../interfaces'

type Props = {
  el: DrinkInterFace
  setDrink: (drink: DrinkInterFace) => void
}

export const DrinkListItem = ({ el, setDrink }: Props) => {
  return (
    <div className={classes.Container} onClick={() => setDrink(el)}>
      <div className={classes.ImageContainer}>
        <div className={classes.DoubleIconAnchor}>
          {el.double && <div className={classes.DoubleIcon}>2x</div>}
        </div>
        <img src={el.image} className={classes.Image} alt="Напиток" />
      </div>
      <div className={classes.Name}>{el.name}</div>
      <div className={classes.Price}>
        <span className={classes.From}>от</span> {Math.min(...el.types.map((el) => el.price))}₽
      </div>
    </div>
  )
}
