import isEqual from "./isEqual.js";

const NavigationSidebar = (active) => {
 return(`
        <ul id="user-nav-menu" class="list-group mb-2">
            <li class="list-group-item"><span class="fas fa-kiwi-bird"></span></li>
            <li class="list-group-item ${isEqual('home', active) ? `active` : ``}">
            <a href=${isEqual('home', active) ? `'#'` : '../HomeScreen/index.html'}>
            <span class="fas fa-home"></span>
                <span class="d-none d-xl-inline">Home</span></a>
            </li>
            <li class="list-group-item ${isEqual('explore', active) ? `active` : ``}"">
            <span class="fas fa-hashtag"></span>
            <a href=${isEqual('explore', active) ? `'#'` : '../explore/index.html'}>
                <span class="d-none d-xl-inline">Explore</span></a>
            </li>
            <li class="list-group-item"><span class="fas fa-bell"></span>
                </span>
                <span class="d-none d-xl-inline">Notifications</span>
            </li>
            <li class="list-group-item"><span class="fas fa-envelope"></span>
                <span class="d-none d-xl-inline">Messages</span>
            </li>
            <li class="list-group-item"><span class="fas fa-bookmark"></span>
                <span class="d-none d-xl-inline">Bookmarks</span>
            </li>
            <li class="list-group-item"><span class="fas fa-list"></span>
                <span class="d-none d-xl-inline">Lists</span>
            </li>
            <li class="list-group-item"><span class="fas fa-user"></span>
                <span class="d-none d-xl-inline">Profile</span>
            </li>
            <li class="list-group-item mb-2"><span class="fas fa-ellipsis-h"></span>
                <span class="d-none d-xl-inline">More</span>
            </li>
            <button id=tuit-button type="button" class="btn btn-primary btn-block">
                Tuit</button>
        </ul>
 `);
}
export default NavigationSidebar;