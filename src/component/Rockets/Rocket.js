import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeRocketStatus } from '../../redux/rockets/rockets';
import style from './Rocket.module.css';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  const {
    rocketImage, rocketDescription, rocketName, rocketStatus, rocketId,
  } = rocket;
  return (
    <section className={style.card}>
      <img className={style.rocketImage} src={rocketImage} alt={rocketDescription} />
      <section className={style.detail}>
        <h2>{rocketName}</h2>
        <p>
          {rocketStatus && <span className={style.tag}> Reserved </span>}
          {rocketDescription}
        </p>
        <button className={`${style.button} ${rocketStatus ? style.buttonCancel : style.buttonReserve}`} type="button" onClick={() => dispatch(changeRocketStatus(rocketId))}>{rocketStatus ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </section>
    </section>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape(
    {
      rocketId: PropTypes.number.isRequired,
      rocketName: PropTypes.string.isRequired,
      rocketDescription: PropTypes.string.isRequired,
      rocketImage: PropTypes.string.isRequired,
      rocketStatus: PropTypes.bool.isRequired,
    },
  ).isRequired,
};
export default Rocket;
