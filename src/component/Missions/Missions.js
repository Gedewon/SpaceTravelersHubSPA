import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMissions } from '../../redux/missions/missions';
import Mission from './Mission';

const Wrapper = styled.table`
  margin: 1em 2em;
  border: 1px solid black;
  border-collapse: collapse;

  th, tr, td {
    border: 1px solid black;
    padding: 2rem;
  }
`;

const Missions = () => {
  const missions = useSelector((store) => store.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) { dispatch(getMissions()); }
  }, [dispatch]);
  return (
    <Wrapper>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => {
          const {
            missionId, missionName, missionDescription, missionStatus,
          } = mission;
          return (
            <Mission
              key={missionId}
              {...{
                missionId, missionName, missionDescription, missionStatus,
              }}
            />
          );
        })}
      </tbody>
    </Wrapper>
  );
};
export default Missions;
