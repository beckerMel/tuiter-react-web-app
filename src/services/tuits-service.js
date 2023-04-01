import axios from 'axios';
const TUITS_API = 'https://tuiter-node-server-app-cs96.onrender.com/api/tuits';

export const findTuits  = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tid) => {
  const response = await axios
    .delete(`${TUITS_API}/${tid}`)
  return response.data;
}

export const createTuit = async (tuit) => {
 const response = await axios.post(TUITS_API, tuit);
 return response.data;
}

export const updateTuit = async (tuit) => {
  console.log("Going to update tuit to make likes " + tuit.likes);
  const response = await axios
    .put(`${TUITS_API}/${tuit._id}`, tuit);
  console.log("Done, returning tuit " + tuit._id);
  return tuit;
}