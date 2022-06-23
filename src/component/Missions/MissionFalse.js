import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMissionStatus } from '../../redux/missions/missions';

const MissionFalse = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td>Not a Member</td>
      <td>
        <button type="button" onClick={() => { dispatch(changeMissionStatus(id)); }}>Join Mission</button>
      </td>
    </>
  );
};
MissionFalse.propTypes = {
  id: PropTypes.string.isRequired,
};
export default MissionFalse;
