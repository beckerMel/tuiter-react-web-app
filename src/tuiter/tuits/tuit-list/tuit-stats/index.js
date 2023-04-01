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



 return(
    <div className="row">
        <div className="col-2"></div>
        <div className="col-10 wd-flex-container wd-flex-center-vertical wd-flex-sb p-3 wd-icons">
                    <div> <FontAwesomeIcon icon="comment" className="wd-icon"/>{tuit.replies}</div>
                    <div> <FontAwesomeIcon icon ="retweet"
                    className="wd-icon"/>{tuit.retuits}</div>
                    <div>
                         Likes: {tuit.likes}
                         <i onClick={() => {
                            dispatch(updateTuitThunk({
                           ...tuit,
                           likes: tuit.likes + 1
                         }));
                         console.log("clicked, likes are " + tuit.likes);
                         }} className="bi
                         bi-heart-fill me-2 text-danger"></i>
                       </div>
                    <div> <FontAwesomeIcon icon="share"/></div>
        </div>
    </div>
 );
};

export default TuitStats;