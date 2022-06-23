import React from 'react';
import PropTypes from 'prop-types';
import MissionTrue from './MissionTrue';
import MissionFalse from './MissionFalse';

const Mission = (props) => {
  const {
    missionId, missionName, missionDescription, missionStatus,
  } = props;
  return (
    <tr>
      <td>{missionName}</td>
      <td>{missionDescription}</td>

      {(() => ((missionStatus) ? <MissionTrue id={missionId} /> : <MissionFalse id={missionId} />)
      )()}

    </tr>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  missionStatus: PropTypes.bool.isRequired,

};

export default Mission;
