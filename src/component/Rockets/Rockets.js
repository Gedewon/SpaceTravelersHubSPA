import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    let isDisposed = false;

    if (!isDisposed && !rockets.length)dispatch(getRockets());

    return () => {
      isDisposed = true;
    };
  }, []);

  return (
    <div>
      {rockets.map((rocket) => <Rocket key={rocket.rocketId} rocket={rocket} />)}
    </div>
  );
}

export default Rockets;
