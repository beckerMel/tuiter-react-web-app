import "../../index.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {likeTuitToggle} from "../../../reducers/home-tuits-reducer.js"
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
    dispatch(likeTuitToggle(tuit))
 }
 return(
        <div className="wd-flex-container wd-flex-center-vertical wd-flex-sb p-3 wd-icons">
                    <div> <FontAwesomeIcon icon="comment" className="wd-icon"/>{tuit.replies}</div>
                    <div> <FontAwesomeIcon icon ="retweet"
                    className="wd-icon"/>{tuit.retuits}</div>
                    <div> <FontAwesomeIcon onClick = {onLike} icon="heart" className={tuit.liked ?
                    "text-danger wd-icon"
                    :
                    "wd-icon"}
                    /> {tuit.likes} </div>
                    <div> <FontAwesomeIcon icon="share"/></div>
        </div>
 );
};

export default TuitStats;