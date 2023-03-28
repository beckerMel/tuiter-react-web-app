import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {deleteTuit} from "../../reducers/home-tuits-reducer.js";
import {useDispatch} from "react-redux";

const TuitSummaryItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "spacex.png",
   }
 }
) => {
 var midDot = '\u00B7';

 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
 }
 return(
   <div className="row">
     <div className="col-auto">
           <img width={50}
                height={50}
                className="float-end rounded-circle"
                src={`../../images/${tuit
           .image}`}/>
     </div>
     <div className="col-10">
       <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>
       <div>
           <span className="fw-bold">{tuit.userName}</span>  <FontAwesomeIcon
           icon="check-circle" className="text-primary ms-1 me-1"/> {tuit.handle} <span
           className="fw-bold"> {midDot} </span> {tuit.time}
       </div>
       <div>{tuit.tuit}</div>
     </div>
   </div>
 );
};
export default TuitSummaryItem;