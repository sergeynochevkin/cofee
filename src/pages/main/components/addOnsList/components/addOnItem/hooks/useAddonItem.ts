import { useSelector } from 'react-redux'
import { selectOrder } from '../../../../../../../store/slices/orderSlice/orderSlice'
import { AddonItemInterface } from '../../../../../../../interfaces'
import { useEffect } from 'react'

export const useAddonItem = (el: AddonItemInterface) => {
  const order = useSelector(selectOrder).order

  useEffect(()=>{},[order])


  const getQuantityAndAmount = () => {
    const quantity = order.addons.filter((item) => item.id === el.id).length
    const result = { quantity: quantity, amount: quantity * el.price }
    return {
      result,
    }
  }

  return { getQuantityAndAmount }
}
