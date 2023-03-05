import React from "react";
import "./index.css";

const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: '/images/nasa-logo.png' }
 }
) => {
 return(
    <li className="wd-flex-container flex-center-vertical wd-flex-sb list-group-item">
      <div className="row">
        <div className="col-2">
            <img className="wd-profile-icon me-2" src={who.avatarIcon}/>
        </div>
        <div className="col-8">
            {who.userName} <span className="fas fa-check-circle mb-1"></span><br/>
            <span className="wd-handle">@{who.handle}</span>
        </div>
        <div className="col-2">
            <button type="button" className="bg-primary float-end wd-follow-button">Follow</button>
        </div>
      </div>
    </li>
 );
};
export default WhoToFollowListItem;
