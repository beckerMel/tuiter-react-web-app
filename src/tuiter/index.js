import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar
  from "./navigation-sidebar";
import WhoToFollowList
  from "./who-to-follow-list";
import PostSummaryList
  from "./post-summary-list";
import {Routes, Route} from "react-router";
import whoReducer
  from "./reducers/who-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
 return (
   <Provider store={store}>
       <PostSummaryList/>
       <WhoToFollowList/>
   </Provider>
 );
}

export default Tuiter