import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface CartCoffee {
  id: number
  name: string
  price: number
  image: string
  amount: number
}

interface CartState {
  cart: CartCoffee[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const index = draft.cart.findIndex(
          (item) => item.id === action.payload.coffee.id,
        )
        if (index !== -1) {
          draft.cart[index].amount += action.payload.coffee.amount
        } else {
          draft.cart.push(action.payload.coffee)
        }
      })

    case ActionTypes.REMOVE_FROM_CART:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter((item) => item.id !== action.payload.id)
      })

    case ActionTypes.UPDATE_AMOUNT:
      return produce(state, (draft) => {
        const index = draft.cart.findIndex(
          (item) => item.id === action.payload.id,
        )
        if (index !== -1) {
          draft.cart[index].amount = action.payload.amount
        }
      })

    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cart = []
      })

    default:
      return state
  }
}
