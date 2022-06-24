import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Profile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocketsReducer);
  const joined = missions.filter((mission) => mission.missionStatus);
  const reserved = rockets.filter((rocket) => rocket.rocketStatus);

  const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  column-gap: 2em;
  padding: 1em 2em;

  div {
    width: 50%;
  }

  table {
    width: 100%;
  }

  td {
    padding: 1em;
  }

  tr {
    outline: 1px solid black;
  }
`;

  return (
    <Wrapper>
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
      <div>
        <h2>My Rockets</h2>
        <table>
          <tbody>
            {
            reserved.map((item) => (

              <tr key={item.rocketId}>
                <td>{item.rocketName}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Profile;
