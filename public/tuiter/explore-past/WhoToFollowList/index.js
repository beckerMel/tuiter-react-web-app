import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
return(`
    <ul id="suggested-follows" class="list-group">
        <li class="list-group-item"> Who to follow </li>
        ${who.map(who => (`${WhoToFollowListItem(who)}`)).join('')}
    </ul>
`)
}

export default WhoToFollowList;