import { createSlice } from "@reduxjs/toolkit";
import tuits from './data/tuits.json';
import {updateTuitThunk, createTuitThunk, findTuitsThunk, deleteTuitThunk}
  from "../../services/tuits-thunks";

const initialState = {
   tuits: [],
   loading: false
}


const currentUser = {
 "userName": "A Golden Retriever",
 "handle": "@gldn",
 "image": "golden_retriever_chewtoy.jpeg",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
}

const tuitsSlice = createSlice({
 name: 'homeTuits',
 initialState,
 extraReducers: {
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = []
   },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         console.log("In find reducer: " + payload);
         state.loading = false
         state.tuits = payload
   },
   [findTuitsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   },
    [deleteTuitThunk.fulfilled] :
         (state, { payload }) => {
         state.loading = false
         state.tuits = state.tuits
           .filter(t => t._id !== payload)
   },
   [createTuitThunk.fulfilled]:
         (state, { payload }) => {
           state.loading = false
           state.tuits.push(payload)
   },
     [updateTuitThunk.fulfilled]:
       (state, {meta}) => {
         const payload = meta.arg;
         console.log("We're in the reducer now, return object is " + JSON.stringify(payload))
         state.loading = false
         const tuitNdx = state.tuits
           .findIndex((t) => t._id === payload._id)
         state.tuits[tuitNdx] = {
           ...state.tuits[tuitNdx],
           ...payload
         }
   },
   },
   reducers: { }
});
export default tuitsSlice.reducer;