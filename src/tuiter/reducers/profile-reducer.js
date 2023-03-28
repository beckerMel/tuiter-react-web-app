import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
  name: 'A Golden Retriever', handle: '@gldn',
  profilePicture: 'golden_retriever_chewtoy.jpeg', 	bannerPicture: 'doggos_banner.jpg',
  bio: 'Bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark',
  website: 'grca.org',
  location: 'Boston, MA',	dateOfBirth: '03/17/2021',	dateJoined: '3/2021',
  followingCount: 340000,	followersCount: 223
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile(state, {payload}) {
            state.name = payload.name;
            state.location = payload.location;
            state.website = payload.website;
            state.bio = payload.bio;
            state.dateOfBirth = payload.dateOfBirth;
        }
    }
});
export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;