import posts from "./posts.js";
import PostListItem from "./PostListItem.js";

const PostList = () => {
return(`
    <ul>
        ${posts.map(post => (`${PostListItem(post)}`)).join('')}
    </ul>
`)
};

export default PostList;