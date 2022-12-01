import {types} from "./types";

export const changeTitleAction = () => {
  return{
    type: types.CHANGE_TITLE,
  }
}

export const changeTitleAwait = (time = 0) => {
  return async (dispatch) => setTimeout(()=>{
      dispatch(changeTitleAction());
    },+`${time}000`);
}