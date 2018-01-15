import { ADD, REMOVE, INCREMENT, DECREMENT } from "./actions";

export const counter = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, 0];
    case REMOVE:
      return [...state.slice(0, state.length - 1)];
    case INCREMENT:
      return [
        ...state.slice(0, action.payload),
        state[action.payload] + 1,
        ...state.slice(action.payload + 1)
      ];
    case DECREMENT:
      return [
        ...state.slice(0, action.payload),
        state[action.payload] - 1,
        ...state.slice(action.payload + 1)
      ];
    default:
      return state;
  }
};
