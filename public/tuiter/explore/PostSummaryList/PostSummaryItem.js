const PostSummaryItem = (post) => {
return(`
   <li class="list-group-item">
    <div class="wd-tuit wd-flex-container flex-center-vertical wd-flex-sb">
     <div>
        ${post.topic ? `<div class="wd-tuit-topic">${post.topic}</div>` : ``}
        <div class="wd-tuit-author">
            ${post.userName}
            <span class="fas fa-check-circle mb-1"></span>
            <span class="wd-timestamp">- ${post.time}</span>
        </div>
        ${post.title ? `<div class="wd-tuit-content">${post.title}</div>` : ``}
     </div>
        <img class="wd-tuit-image" src=${post.image}>
    </div>
   </li>
`)
};

export default PostSummaryItem;