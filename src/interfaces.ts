export interface GroupInterface {
  id: number
  name: string
  image: string
  value: 'tea' | 'coffee' | 'shakes' | 'drinks'
}
export interface DrinkInterFace {
  id: number
  groupId: number
  name: string
  double: boolean
  image: string
  types: DrinkTypeInterface[]
}
export interface DrinkTypeInterface {
  id: number
  volume: number
  price: number
  size: 'small' | 'medium' | 'large'
}

export interface AddonItemInterface {
  id: number
  name: string
  price: number
  weight: number
  max_weight: number
  forDrinks: number[]
}

export interface OrderInterface {
  drink: DrinkInterFace
  type: DrinkTypeInterface
  addons: AddonItemInterface[] | []
  cost: number
}
