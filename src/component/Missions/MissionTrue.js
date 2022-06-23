import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeMissionStatus } from '../../redux/missions/missions';

const MissionTrue = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <td>Active Member</td>
      <td>
        <button type="button" onClick={() => { dispatch(changeMissionStatus(id)); }}>Leave Mission</button>
      </td>
    </>
  );
};
MissionTrue.propTypes = {
  id: PropTypes.string.isRequired,
};
export default MissionTrue;
