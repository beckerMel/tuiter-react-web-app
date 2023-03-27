import { createSlice } from "@reduxjs/toolkit";
import tuits from './data/tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa-logo.png",
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

const homeTuitsSlice = createSlice({
 name: 'homeTuits',
 initialState: tuits,
 reducers: {
    likeTuitToggle(state, {payload}) {
       const tuit = state.find((tuit) =>
             tuit._id === payload._id);
       tuit.liked ? tuit.likes-- : tuit.likes++;
      tuit.liked = !tuit.liked;
    },
    createTuit(state, action) {
          state.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
          })
    },
    deleteTuit(state, action) {
          const index = state
            .findIndex(tuit =>
               tuit._id === action.payload);
          state.splice(index, 1);
    }
 }
});

export const {likeTuitToggle, createTuit, deleteTuit} = homeTuitsSlice.actions;
export default homeTuitsSlice.reducer;