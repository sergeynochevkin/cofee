import {
  AddonItemInterface,
  DrinkInterFace,
  DrinkTypeInterface,
  OrderInterface,
} from '../../../../interfaces'
import classes from './ModalContent.module.sass'
import React, { SetStateAction } from 'react'
import x from '../../../../assets/images/icons/x.svg'
import { DrinkTypeSelector } from '../drinkTypeSelector/DrinkTypeSelector'
import { Button } from '../../../../common/components/button/Button'
import { useModalContent } from './hooks/useModalContent'
import { AddOnsList } from '../addOnsList/AddOnsList'
import { Modal } from '../../../../common/components/modal/Modal'
import { PAYMENT_ROUTE } from '../../../../constants'

type Props = {
  currentDrink: DrinkInterFace | undefined
  setModalActive: React.Dispatch<SetStateAction<boolean>>
  order: OrderInterface
  setDrink: (
    drink?: DrinkInterFace,
    type?: DrinkTypeInterface,
    addon?: AddonItemInterface,
    action?: 'add' | 'remove',
  ) => void
}

export const ModalContent = ({ currentDrink, setModalActive, order, setDrink }: Props) => {
  const { modalActive1, setModalActive1, addonsList, navigate } = useModalContent()

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
      <img src={currentDrink?.image} className={classes.Image} alt="Напиток" />
      <div className={classes.Name}>{currentDrink?.name}</div>
      <DrinkTypeSelector
        currentDrink={currentDrink}
        currentType={order.type}
        setDrink={setDrink}
        order={order}
      />
      <div className={classes.ButtonsContainer}>
        <Button text="Хотите добавить сироп?" click={() => setModalActive1(true)} />
        <Button filled text="Оплатить" price={order.cost} click={() => navigate(PAYMENT_ROUTE)} />
      </div>

      <Modal modalActive={modalActive1} setModalActive={setModalActive1}>
        <AddOnsList
          setModalActive={setModalActive1}
          addonsList={addonsList}
          setDrink={setDrink}
          order={order}
        />
      </Modal>
    </div>
  )
}
