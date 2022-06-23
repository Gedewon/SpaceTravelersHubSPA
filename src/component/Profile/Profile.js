import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const joined = missions.filter((mission) => mission.missionStatus);

  return (
    <div>
      <h2>My Missions</h2>
      <table>
        <tbody>
          {joined.map((item) => (
            <tr key={item.missionId}>
              <td>{item.missionName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
