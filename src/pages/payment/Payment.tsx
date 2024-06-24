import React from 'react'
import classes from './Payment.module.sass'
import card from '../../assets/images/card.svg'
import { usePayment } from './hooks/usePayment'

export const Payment = () => {
  usePayment()
  return (
    <div className={classes.Container}>
      <img src={card} />

      <div className={classes.Text}>Приложите карту к терминалу</div>
    </div>
  )
}
