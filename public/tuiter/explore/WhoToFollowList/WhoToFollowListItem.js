const WhoToFollowListItem = (who) => {
return(`
        <li class="wd-flex-container flex-center-vertical wd-flex-sb list-group-item">
            <div>
                <img class="wd-profile-icon me-2" src=${who.avatarIcon}/>
                ${who.userName} <span class="fas fa-check-circle mb-1"></span><br/>
                <span class="wd-handle">@${who.handle}</span>

            </div>
            <button type="button" class="btn btn-primary wd-follow-button">Follow</button>
        </li>
`)
};

export default WhoToFollowListItem;
