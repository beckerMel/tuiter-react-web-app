import React from "react";
import styles from "../../styles/styles.css";

const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: '../../images/nasa-logo.png' }
 }
) => {
 return(
    <li className="wd-flex-container flex-center-vertical wd-flex-sb list-group-item">
        <div>
            <img className="wd-profile-icon me-2" src={`../../images/${who.avatarIcon}`}/>
            {who.userName} <span className="fas fa-check-circle mb-1"></span><br/>
            <span className="wd-handle">@{who.handle}</span>

        </div>
        <button type="button" className="btn btn-primary wd-follow-button">Follow</button>
    </li>
 );
};
export default WhoToFollowListItem;
