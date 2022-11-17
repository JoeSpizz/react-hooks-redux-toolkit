// Action Creators
import { createSlice } from "@reduxjs/toolkit";


// async actions
export function fetchCats() {
  return function (dispatch) {
    dispatch({ type: "cats/fetchCats/pending" });
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "cats/fetchCats/fulfilled",
          payload: data.images,
        });
      });
  };
}

// sync actions added for demo purposes
export const {catAdded, catUpdated } = catsSlice.actions

// Reducer
const initialState = {
  entities: [], // array of cats
  status: "idle", // loading state
};

const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers:{
    catAdded(state,action){
      state.entities.push(action.payload)
    },
    catUpdated(state,action){
      const cat = state.entities.find((cat)=> cat.id === action.payload.id)
      cat.url = action.payload.url
    },
  },
})
export default catsSlice.reducer
