const NavigationSidebar = () => {
 return(`
        <ul id="user-nav-menu" class="list-group mb-2">
            <li class="list-group-item"><span class="fas fa-kiwi-bird"></span></li>
            <li class="list-group-item"><span class="fas fa-home"></span>
                <span class="d-none d-xl-inline">Home</span>
            </li>
            <li class="list-group-item active"><span class="fas fa-hashtag"></span>
                <span class="d-none d-xl-inline">Explore</span>
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