import { INCREMENT, DECREMENT } from '../constants'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

