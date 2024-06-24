import React, { SetStateAction } from 'react'
import classes from './AddOnsList.module.sass'
import x from '../../../../assets/images/icons/x.svg'
import {
  AddonItemInterface,
  DrinkInterFace,
  DrinkTypeInterface,
  OrderInterface,
} from '../../../../interfaces'
import { AddOnItem } from './components/addOnItem/AddOnItem'
import { Button } from '../../../../common/components/button/Button'
import { useNavigate } from 'react-router-dom'
import { PAYMENT_ROUTE } from '../../../../constants'

type Props = {
  setModalActive: React.Dispatch<SetStateAction<boolean>>
  addonsList: AddonItemInterface[]
  setDrink: (
    drink?: DrinkInterFace,
    type?: DrinkTypeInterface,
    addon?: AddonItemInterface,
    action?: 'add' | 'remove',
  ) => void
  order: OrderInterface
}

export const AddOnsList = ({ setModalActive, addonsList, setDrink, order }: Props) => {
  const navigate = useNavigate()

  return (
    <div className={classes.Container} onClick={(e) => e.stopPropagation()}>
      <div
        className={classes.CloseIconContainer}
        onClick={() => {
          setModalActive(false)
        }}
      >
        <img src={x} alt="Закрыть окно" />
      </div>

      <div className={classes.ContentContainer}>
        {addonsList.map((el) => (
          <AddOnItem key={el.id} el={el} add={() => {}} remove={() => {}} setDrink={setDrink} />
        ))}
        <Button filled text="Оплатить" price={order.cost} click={() => navigate(PAYMENT_ROUTE)} />
      </div>
    </div>
  )
}
