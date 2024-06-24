import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { OrderInterface } from '../../../interfaces'
import { orderInitialValue } from '../../../constants'

const initialState: { order: OrderInterface } = {
  order: orderInitialValue,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<OrderInterface>) => {
      state.order = { ...action.payload }
    },
  },
})

export const { setOrder } = orderSlice.actions
export const selectOrder = (state: RootState) => state.order

export default orderSlice.reducer
