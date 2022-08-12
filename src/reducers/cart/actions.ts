import { CartCoffee } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  UPDATE_AMOUNT = 'UPDATE_AMOUNT',
  CLEAR_CART = 'CLEAR_CART',
}

export function AddToCartAction(coffee: CartCoffee) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function RemoveFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function UpdateAmountAction(id: number, amount: number) {
  return {
    type: ActionTypes.UPDATE_AMOUNT,
    payload: {
      id,
      amount,
    },
  }
}

export function ClearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
