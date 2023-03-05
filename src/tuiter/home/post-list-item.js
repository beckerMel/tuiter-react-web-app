import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostListItem = (post) => {
return(
   <li className="wd-tuit mb-4">
    <FontAwesomeIcon icon="ellipsis" className="wd-show-more"/>
    <div>
         <img className="wd-profile-icon" src={`../../images/${post.userAvatar}`}/>
         <div>
             <span className="wd-tuit-author">
                {post.userName}
                <FontAwesomeIcon icon="check-circle" className="ms-2 text-primary"/></span>
            <span className="wd-timestamp"> {`- ${post.time}`}</span>
        </div>
        <div className="wd-tuit">
            {post.tuit}
        </div>
    </div>
    <div>
        <div className="wd-link">
                {
                post.linkTitle ?
                    <>
                    <img className="wd-link-image mt-3" src={post.image}/>
                    <div className="wd-post-text">{post.linkTitle}</div>
                    <div className="wd-link-preview">{post.linkPreview}</div>
                    <div className="wd-link-site">
                        <FontAwesomeIcon icon="link"/>{post.link}</div>
                    </>:
                    <img className="wd-link-image wd-no-text mt-2" src={post
                    .image}/>}
        </div>
    </div>


        <div className="wd-flex-container wd-flex-center-vertical wd-flex-sb p-3 wd-icons">
                    <div> <FontAwesomeIcon icon="comment" className="wd-icon"/>{post.comments}</div>
                    <div> <FontAwesomeIcon icon ="retweet" className="wd-icon"/>{post.retuits}</div>
                    <div> <FontAwesomeIcon icon="heart" className="wd-icon"/>{post
                    .likes}</div>
                    <div> <FontAwesomeIcon icon="share"/></div>
        </div>
   </li>
)
};

export default PostListItem;