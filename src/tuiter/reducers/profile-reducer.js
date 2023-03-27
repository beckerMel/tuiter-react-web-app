import { createSlice } from "@reduxjs/toolkit";

const initialState =
{
  firstName: 'A Golden', lastName: 'Retriever', handle: '@gldn',
  profilePicture: 'golden_retriever_chewtoy.jpeg', 	bannerPicture: 'doggos_banner.jpg',
  bio: 'Bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark bark',
  website: 'grca.org',
  location: 'Boston, MA',	dateOfBirth: '03/17/2021',	dateJoined: '3/2021',
  followingCount: 340000,	followersCount: 223
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
});

export default profileSlice.reducer;