import classes from './DrinkTypeSelectorItem.module.sass'
import {
  AddonItemInterface,
  DrinkInterFace,
  DrinkTypeInterface,
  OrderInterface,
} from '../../../../../interfaces'
import typeCup from '../../../../../assets/images/typeCup.svg'

type Props = {
  el: DrinkTypeInterface
  order: OrderInterface
  setDrink: (
    drink?: DrinkInterFace,
    type?: DrinkTypeInterface,
    addon?: AddonItemInterface,
    action?: 'add' | 'remove',
  ) => void
}

export const DrinkTypeSelectorItem = ({ el, setDrink, order }: Props) => {
  return (
    <div
      className={order.type.id === el.id ? classes.ContainerActive : classes.Container}
      onClick={() => setDrink(undefined, el)}
    >
      <img
        src={typeCup}
        alt="Размер напитка"
        className={
          el.size === 'small'
            ? classes.TypeImageSmall
            : el.size === 'large'
              ? classes.TypeImageLarge
              : classes.TypeImage
        }
      />
      <div className={classes.Volume}>{el.volume} мл.</div>
    </div>
  )
}
