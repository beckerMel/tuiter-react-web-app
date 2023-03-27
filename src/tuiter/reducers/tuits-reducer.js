import { createSlice } from "@reduxjs/toolkit";
import tuits from './data/posts.json';


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits
});
export const {createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;