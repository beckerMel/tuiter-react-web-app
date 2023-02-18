import exploreItems from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
return(`
    <ul class="list-group">
        ${exploreItems.map(post => (`${PostSummaryItem(post)}`)).join('')}
    </ul>
`)
};

export default PostSummaryList;