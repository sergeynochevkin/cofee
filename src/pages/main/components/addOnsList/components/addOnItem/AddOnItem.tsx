import React from 'react'
import classes from './AddOnItem.module.sass'
import {
  AddonItemInterface,
  DrinkInterFace,
  DrinkTypeInterface,
} from '../../../../../../interfaces'
import { useAddonItem } from './hooks/useAddonItem'

type Props = {
  add: () => void
  remove: () => void
  el: AddonItemInterface
  setDrink: (
    drink?: DrinkInterFace,
    type?: DrinkTypeInterface,
    addon?: AddonItemInterface,
    action?: 'add' | 'remove',
  ) => void
}

export const AddOnItem = ({ add, remove, el, setDrink }: Props) => {
  const { getQuantityAndAmount } = useAddonItem(el)

  return (
    <div className={classes.Container}>
      <div>{el.name}</div>
      <div className={classes.ButtonsContainer}>
        <button
          className={classes.Button}
          onClick={() => {
            setDrink(undefined, undefined, el, 'remove')
          }}
          disabled={getQuantityAndAmount().result.quantity === 0}
        >
          -
        </button>
        <div>{getQuantityAndAmount().result.quantity * el.weight} гр.</div>
        <button
          className={classes.Button}
          onClick={() => {
            setDrink(undefined, undefined, el, 'add')
          }}
          disabled={getQuantityAndAmount().result.quantity * el.weight === el.max_weight}
        >
          +
        </button>
      </div>
    </div>
  )
}
