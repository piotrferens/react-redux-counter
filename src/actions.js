export const ADD = "ADD";
export const add = () => ({
  type: ADD
});

export const REMOVE = "REMOVE";
export const remove = () => {
  return {
    type: REMOVE
  };
};

export const INCREMENT = "INCREMENT";
export const increment = i => {
  return {
    type: INCREMENT,
    payload: i
  };
};

export const DECREMENT = "DECREMENT";
export const decrement = i => {
  return {
    type: DECREMENT,
    payload: i
  };
};
