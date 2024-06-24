import classes from './DrinkTypeSelector.module.sass'
import {
  AddonItemInterface,
  DrinkInterFace,
  DrinkTypeInterface,
  OrderInterface,
} from '../../../../interfaces'
import { DrinkTypeSelectorItem } from './drinkTypeSelectorItem/DrinkTypeSelectorItem'

type Props = {
  currentDrink: DrinkInterFace | undefined
  currentType: DrinkTypeInterface
  setDrink: (
    drink?: DrinkInterFace,
    type?: DrinkTypeInterface,
    addon?: AddonItemInterface,
    action?: 'add' | 'remove',
  ) => void
  order: OrderInterface
}

export const DrinkTypeSelector = ({ currentDrink, currentType, setDrink, order }: Props) => {
  return (
    <div className={classes.Container}>
      {currentDrink?.types.map((el) => (
        <DrinkTypeSelectorItem key={el.id} el={el} setDrink={setDrink} order={order} />
      ))}
    </div>
  )
}
