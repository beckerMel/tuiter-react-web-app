import React from "react";
import "./profile-index.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
  const currProfile = useSelector(
               (state) => state.profile);

  return(
  <>
    <div className="wd-banner-box">
        <div id="top-bar">
         {currProfile.name}
        </div>
        <img src={`../../images/${currProfile.bannerPicture}`} id="banner"/>
        <img src={`../../images/${currProfile.profilePicture}`} id="profile-pic"
            className="rounded-circle"/>
        <Link to="/tuiter/edit-profile">
                <button className="rounded-pill btn float-end mt-2 ps-3 pe-3 fw-bold"
                id="edit-profile-button">
                    Edit Profile
                </button>
        </Link>
    </div>

    <div id="profile-info">
        <div className="fw-bolder" id="profile-name">
            {currProfile.name}
        </div>
        <span className="wd-handle">{currProfile.handle}</span>

        <div className="mt-3" id="bio">
            {currProfile.bio}
        </div>
        <div className="mt-3">
            <span className="me-3"><i className="bi bi-pin-map"></i> {currProfile.location}</span>
            <span className="me-3"><i className="bi bi-balloon"></i> Born {currProfile
            .dateOfBirth}</span>
            <span className="me-3"><i className="bi bi-calendar2-event"></i> Joined {currProfile
            .dateJoined}</span>
        </div>
        <div className="mt-3">
            <span className="me-3"><span className="fw-bold me-1 text-dark">{currProfile
            .followingCount}</span>
            Following</span>
            <span className="mb-2 fw-bold text-dark">{currProfile.followersCount}</span> Followers
        </div>
    </div>
  </>
  )
};

export default ProfileComponent;