import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer.js";
import DateReformat from "./date-reformat.js";


const EditProfileComponent = () => {
  const currProfile = useSelector(
               (state) => state.profile);

  let[name, setName] = useState(currProfile.name);
  let[bio, setBio] = useState(currProfile.bio);
  let[location, setLocation] = useState(currProfile.location);
  let[website, setWebsite] = useState(currProfile.website);
  let[birthday, setBirthday] = useState(currProfile.dateOfBirth);

    const saveChangesHandler = () => {
      const updatedProfile = {
          name, bio, location, website,
          dateOfBirth: birthday,
      }
      dispatch(updateProfile(updatedProfile));
    }

    const updateBirthday = (birthday) => {
        const newDate = DateReformat(birthday);
        setBirthday(newDate);
    }

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

  const dispatch = useDispatch();

  return(
  <>
    <div className="wd-banner-box">
        <div id="save-bar" className="container">
            <button className="col-auto rounded-pill btn btn-dark float-end ps-4 pe-4 mt-2 me-3
            fw-bold"
                            onClick={saveChangesHandler}>Save</button>
                <div className="fw-bold col-9">
                <i className="text-dark bi bi-x-lg me-5"
                onClick={goBack}>
                </i>
             Edit Profile
            </div>
        </div>
        <img src={`../../images/${currProfile.bannerPicture}`} id="banner"/>
        <img src={`../../images/${currProfile.profilePicture}`} id="profile-pic"
            className="rounded-circle"/>
    </div>

    <div id="profile-info-edit">
       <div className="wd-input-box">
            <label className="wd-input-title">Name</label>
            <textarea value={name}
                className="wd-text-form border-0"
                onChange={(event) => setName(event.target.value)}>
             </textarea>
        </div>
        <div className="wd-input-box">
            <label className="wd-input-title">Bio</label>
                <textarea value={bio}
                    className="wd-text-form border-0"
                    onChange={(event) => setBio(event.target.value)}>
                </textarea>
        </div>
        <div className="wd-input-box">
            <label className="wd-input-title">Location</label>
                <textarea value={location}
                        className="wd-text-form border-0"
                        onChange={(event) => setLocation(event.target.value)}>
                </textarea>
        </div>
        <textarea value={website}
                id="website-form"
                className="wd-text-form"
                onChange={(event) => setWebsite(event.target.value)}
                placeholder="Website">
        </textarea>

        <label id="birthday-label" className="mt-4 wd-input-title"> Date of Birth: {currProfile
        .dateOfBirth} <br/>
            <input id="birthday-box"
                className="mt-1 mb-5 wd-date-box"
                type="date"
                onChange={(event)=>updateBirthday(event.target.value)}/>
        </label>
    </div>
  </>
  )
};

export default EditProfileComponent;