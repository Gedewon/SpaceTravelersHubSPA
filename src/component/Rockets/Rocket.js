import React from 'react';
import { useDispatch } from 'react-redux';
import { changeRocketStatus} from '../../redux/rockets/rockets';
import style from './Rocket.module.css';

function Rocket({rocket}) {
  const dispatch = useDispatch();
  return (
    <section className={style.card}>
        <img className={style.rocketImage} src={rocket.rocketImage} alt={rocket.rocketDescription}/>
        <section className={style.detail}>
        <h2>{rocket.rocketName}</h2>
        <p>{rocket.rocketStatus && <span className={style.tag}> Reserved </span>}{rocket.rocketDescription}</p>
        <button className={`${style.button} ${rocket.rocketStatus ? style.buttonCancel: style.buttonReserve }`} type='button' onClick={()=>dispatch(changeRocketStatus(rocket.rocketId))} >{rocket.rocketStatus ? 'Cancel Reservation' :'Reserve Rocket'}</button>
        </section>
    </section>
  )
}

export default Rocket