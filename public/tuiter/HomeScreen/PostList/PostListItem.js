const PostListItem = (post) => {
return(`
   <li class="wd-bullet-less wd-tuit mb-4">
    <div>
         <img class="wd-profile-icon" src="${post.userAvatar}"/>
         <div>
             <span class="wd-tuit-author">
                ${post.userName}
                <span class="fas fa-check-circle mb-1">
            </span></span>
            <span class="wd-timestamp"> &#x2022 ${post.time}</span>
        </div>
        <div class="wd-tuit">
            ${post.tuit}
        </div>
    </div>
    <div>
        <div class="wd-link">
                ${
                post.linkTitle ?
                    `<img class="wd-link-image mt-2" src="${post.image}">
                    <div class="wd-post-text"><div>${post.linkTitle}</div>
                    <div class="wd-link-preview">${post.linkPreview}</div>
                    <div class="wd-link-site">
                        <span class="fas fa-link"></span>
                        ${post.link}</div>` :
                    `<img class="wd-link-image wd-no-text mt-2" src=${post.image}>`}
        </div>
    </div>


        <div class="wd-flex-container wd-flex-center-vertical wd-flex-sb p-3 wd-icons">
                    <div> <span class="wd-icon fas fa-comment"></span>${post.comments}</div>
                    <div> <span class="wd-icon fas fa-retweet"></span>${post.retuits}</div>
                    <div> <span class="wd-icon fas fa-heart"></span>${post.likes}</div>
                    <div> <span class="fas fa-share"></span></div>
        </div>
   </li>
`)
};

export default PostListItem;

/* Experiment:
- Check if nullish coalescing operator works
- Check if you can remove the right and side operand for ternary
*/