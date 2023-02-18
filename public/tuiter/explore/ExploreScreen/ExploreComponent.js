import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
return(`
    <div id="search-bar-section" class="wd-flex-container flex-center-vertical">
        <form class="wd-search-bar mb-2">
            <span class="fas fa-search wd-magnifying-glass me-3"></span>
            <input type="text"
                   placeholder="Search Tuiter">
        </form>
        <div id="settings-gear">
            <a href="explore-settings.html"><span
                    class="fas fa-cog fa-2x mb-2 ms-4"></span></a>
        </div>
    </div>


     <ul class="nav nav-tabs mb-2">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li> <br/>
    </ul>

    <div class="main-content-box">
        <div class="wd-main-content-photo">
            <p class="wd-card-caption ms-1 mb-0">
                SpaceX's Starship
            </p>
            <img class="card-img-top"
                 src="../../../images/space-x.jpeg">
        </div>
        ${PostSummaryList()}
    </div>
`)
};

export default ExploreComponent;