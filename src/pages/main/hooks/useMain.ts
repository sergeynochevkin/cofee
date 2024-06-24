import { useEffect, useState } from 'react'
import { drinksInitialValue, groupsInitialValue } from '../../../constants'
import {
  AddonItemInterface,
  DrinkInterFace,
  DrinkTypeInterface,
  GroupInterface,
} from '../../../interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { selectOrder, setOrder } from '../../../store/slices/orderSlice/orderSlice'

export const useMain = () => {
  const dispatch = useDispatch()
  const order = useSelector(selectOrder).order

  const [groupsList] = useState<GroupInterface[]>(structuredClone(groupsInitialValue))
  const [drinksList] = useState<DrinkInterFace[]>(structuredClone(drinksInitialValue))
  const [selected, setSelected] = useState<GroupInterface>(groupsList[0])

  const [modalActive, setModalActive] = useState(false)

  useEffect(() => {
    setDrink(undefined, drinksInitialValue.find((el) => el.id === order.drink.id)?.types[1])
  }, [order.drink])

  const setDrink = (
    drink?: DrinkInterFace,
    type?: DrinkTypeInterface,
    addon?: AddonItemInterface,
    action?: 'add' | 'remove',
  ) => {
    if (drink) dispatch(setOrder({ ...order, drink: drink, cost: drink.types[1].price }))
    if (type) dispatch(setOrder({ ...order, type: type, cost: type.price }))
    if (addon && action === 'add') {
      const addons: AddonItemInterface[] = [...order.addons]
      addons.push(addon)
      const cost = order.cost + addon.price

      dispatch(setOrder({ ...order, addons: [...addons], cost: cost }))
    }
    if (addon && action === 'remove') {
      let addons: AddonItemInterface[] = [...order.addons]
      const count = addons.filter((el) => el.id === addon.id).length
      addons = addons.filter((el) => el.id !== addon.id)
      for (let i = 0; i < count - 1; i++) {
        addons.push(addon)
      }
      const cost = order.cost - addon.price
      dispatch(setOrder({ ...order, addons: [...addons], cost: cost }))
    }

    setModalActive(true)
  }

  return {
    groupsList,
    selected,
    setSelected,
    drinksList,
    modalActive,
    setDrink,
    setModalActive,
    order,
  }
}
