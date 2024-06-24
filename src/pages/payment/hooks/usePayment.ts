import { useEffect, useState } from 'react'
import { Emulator } from '../../../utils/emulator'
import { useSelector } from 'react-redux'
import { selectOrder } from '../../../store/slices/orderSlice/orderSlice'

export const usePayment = () => {
  const [keys, setKeys] = useState<string[]>([''])
  const order = useSelector(selectOrder).order

  useEffect(() => {
    window.focus()
    window.addEventListener('keypress', function (event) {
      setKeys((prev) => [...prev, event.key])
    })
  }, [])

  useEffect(() => {
    if (keys.length >= 3) {
      const lower = keys.map((el) => el.toLowerCase())
      if (lower.includes('b') && lower.includes('c')) {
        Emulator.bankCardPurchase(order.cost, () => {}, 'Оплата начата')
      }
      setKeys([''])
    }
  }, [keys.length])

  return {}
}
