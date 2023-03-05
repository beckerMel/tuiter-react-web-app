import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
  from "./post-summary-item";

const HomeComponent = () => {
 return(
   <ul className="list-group">
     {
       postsArray.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default HomeComponent;