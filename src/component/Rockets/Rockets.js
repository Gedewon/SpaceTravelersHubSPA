import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets ,changeRocketStatus} from '../../redux/rockets/rockets';



function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector(state=>state.rocketsReducer)
  
  useEffect(() => {
    let isDisposed = false;
    
    if(!isDisposed )dispatch(getRockets());

    return () => {
      isDisposed = true;
    }
  }, [])
  
 

  return (
     <div>
       {rockets.map(rocket=>
        <div key={rocket.rocketId}>
        <img width={200} height={200} src={rocket.rocketImage} alt={rocket.rocketDescription}/>
        <h2>{rocket.rocketName}</h2>
        <p>{rocket.rocketStatus && <span> Reserved </span>}{rocket.rocketDescription}</p>
        <button type='button' onClick={()=>dispatch(changeRocketStatus(rocket.rocketId))} >{rocket.rocketStatus ? 'Cancel Reservation' :'Reserve Rocket'}</button>
        </div>
       )}
     </div>
  );
}

export default Rockets;
