import React from "react";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar
  from "./navigation-sidebar";
import WhoToFollowList
  from "./who-to-follow-list";
import PostSummaryList
  from "./post-summary-list";
import {Routes, Route} from "react-router";
import whoReducer
  from "./reducers/who-reducer";
import homeTuitsReducer
  from "./reducers/home-tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import TuitList from "./tuits/tuit-list"


const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer, homeTuits: homeTuitsReducer}});

function Tuiter() {
 return (
   <Provider store={store}>
       <HomeComponent/>
   </Provider>
 );
}

export default Tuiter