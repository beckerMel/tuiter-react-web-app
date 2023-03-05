import React from "react";
import PostSummaryList from "../post-summary-list";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExploreComponent = () => {
return(
    <>
    <div id="search-bar-section" className="wd-flex-container flex-center-vertical">
        <form className="wd-search-bar mb-2">
            <FontAwesomeIcon icon="search" className="wd-magnifying-glass me-3"/>
            <input type="text"
                   placeholder="Search Tuiter"/>
        </form>
        <div id="settings-gear">
            <a href="explore-settings.html"><FontAwesomeIcon icon="cog" size="2x"
                    className=" mb-2 ms-4"/></a>
        </div>
    </div>


     <ul className="nav nav-tabs mb-2">
        <li className="nav-item">
            <a className="nav-link active" href="for-you.html">For you</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="news.html">News</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
        </li>
        <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
        </li> <br/>
    </ul>

    <div className="main-content-box">
        <div className="wd-main-content-photo">
            <p className="wd-card-caption ms-1 mb-0">
                SpaceX Starship
            </p>
            <img className="card-img-top"
                 src="../../images/space-x.jpeg"/>
        </div>
        <PostSummaryList/>
    </div>
    </>
)
};

export default ExploreComponent;