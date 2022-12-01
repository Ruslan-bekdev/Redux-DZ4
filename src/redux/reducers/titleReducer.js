import {types} from "../types";

const initialState = {
  title: 'old title',
  time: 3000,
}

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_TITLE: return {...state,
      title: 'new title',
    }
    default: return state;
  }
}