import "../../index.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {updateTuitThunk} from "../../../../services/tuits-thunks"
import {useSelector, useDispatch} from 'react-redux'


const TuitStats = (
{
   tuit = {
     "replies": 12,
     "likes": 15,
     "liked": false,
     "retuits": 18,
   }
 }) => {
 const dispatch = useDispatch();

const onLike = () => {
    if (tuit.liked) {
        dispatch(updateTuitThunk({...tuit,
           likes: tuit.likes - 1,
           liked: false}));
    } else {
        dispatch(updateTuitThunk({...tuit,
           likes: tuit.likes + 1,
           liked: true}));
    }
}

 return(
    <div className="row">
        <div className="col-2"></div>
        <div className="col-10 wd-flex-container wd-flex-center-vertical wd-flex-sb p-3 wd-icons">
                    <div> <FontAwesomeIcon icon="comment" className="wd-icon"/>{tuit.replies}</div>
                    <div> <FontAwesomeIcon icon ="retweet"
                    className="wd-icon"/>{tuit.retuits}</div>
                    <div>
                         <i onClick={onLike}
                         className={tuit.liked ? "bi bi-heart-fill me-2 text-danger"
                         :
                         "bi bi-heart me-2"
                         }></i>
                         {tuit.likes}
                       </div>
                    <div> <FontAwesomeIcon icon="share"/></div>
        </div>
    </div>
 );
};

export default TuitStats;