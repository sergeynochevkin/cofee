import { AddonItemInterface, DrinkInterFace, GroupInterface, OrderInterface } from './interfaces'
import coffee from './assets/images/drinks/groups/coffee.svg'
import tea from './assets/images/drinks/groups/tea.svg'
import drinks from './assets/images/drinks/groups/drinks.svg'
import milkShake from './assets/images/drinks/groups/milkShake.svg'

import latte from './assets/images/drinks/latte.svg'
import cappuccino from './assets/images/drinks/cappuccino.svg'
import macchiato from './assets/images/drinks/makiato.png'
import americano from './assets/images/drinks/americano.svg'
import espresso from './assets/images/drinks/espresso.svg'

export const MAIN_ROUTE = '/'
export const PAYMENT_ROUTE = '/payment'

export const groupsInitialValue: GroupInterface[] = [
  { id: 1, value: 'coffee', name: 'Кофе', image: coffee },
  { id: 2, value: 'tea', name: 'Чай', image: tea },
  { id: 3, value: 'shakes', name: 'Молочный коктейль', image: milkShake },
  { id: 4, value: 'drinks', name: 'Морс и газ. напитки', image: drinks },
]

export const drinksInitialValue: DrinkInterFace[] = [
  {
    id: 1,
    name: 'Эспрессо',
    groupId: 1,
    double: false,
    image: espresso,
    types: [
      {
        id: 1,
        volume: 200,
        price: 250,
        size: 'small',
      },
      {
        id: 2,
        volume: 300,
        price: 340,
        size: 'medium',
      },
      {
        id: 3,
        volume: 400,
        price: 450,
        size: 'large',
      },
    ],
  },
  {
    id: 11,
    name: 'Эспрессо',
    groupId: 1,
    double: true,
    image: espresso,
    types: [
      {
        id: 1,
        volume: 400,
        price: 500,
        size: 'small',
      },
      {
        id: 2,
        volume: 600,
        price: 680,
        size: 'medium',
      },
      {
        id: 3,
        volume: 800,
        price: 900,
        size: 'large',
      },
    ],
  },
  {
    id: 2,
    name: 'Американо',
    groupId: 1,
    double: false,
    image: americano,
    types: [
      {
        id: 1,
        volume: 200,
        price: 250,
        size: 'small',
      },
      {
        id: 2,
        volume: 300,
        price: 340,
        size: 'medium',
      },
      {
        id: 3,
        volume: 400,
        price: 450,
        size: 'large',
      },
    ],
  },
  {
    id: 3,
    name: 'Латте',
    groupId: 1,
    double: false,
    image: latte,
    types: [
      {
        id: 1,
        volume: 200,
        price: 250,
        size: 'small',
      },
      {
        id: 2,
        volume: 300,
        price: 340,
        size: 'medium',
      },
      {
        id: 3,
        volume: 400,
        price: 450,
        size: 'large',
      },
    ],
  },
  {
    id: 4,
    name: 'Капучино',
    groupId: 1,
    double: false,
    image: cappuccino,
    types: [
      {
        id: 1,
        volume: 200,
        price: 250,
        size: 'small',
      },
      {
        id: 2,
        volume: 300,
        price: 340,
        size: 'medium',
      },
      {
        id: 3,
        volume: 400,
        price: 450,
        size: 'large',
      },
    ],
  },
  {
    id: 5,
    name: 'Макиато',
    groupId: 1,
    double: false,
    image: macchiato,
    types: [
      {
        id: 1,
        volume: 200,
        price: 250,
        size: 'small',
      },
      {
        id: 2,
        volume: 300,
        price: 340,
        size: 'medium',
      },
      {
        id: 3,
        volume: 400,
        price: 450,
        size: 'large',
      },
    ],
  },
]

export const addOnInitialValue: AddonItemInterface[] = [
  {
    id: 1,
    name: 'Ванильный сироп',
    price: 10,
    weight: 10,
    max_weight: 50,
    forDrinks: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    name: 'Мятный сироп',
    price: 10,
    weight: 10,
    max_weight: 50,
    forDrinks: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 3,
    name: 'Карамельный сироп',
    price: 10,
    weight: 10,
    max_weight: 50,
    forDrinks: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 4,
    name: 'Шоколадный сироп',
    price: 10,
    weight: 10,
    max_weight: 50,
    forDrinks: [1, 2, 3, 4, 5, 6],
  },
]

export const orderInitialValue: OrderInterface = {
  drink: drinksInitialValue[0],
  type: drinksInitialValue[0].types[1],
  addons: [],
  cost: 0,
}
