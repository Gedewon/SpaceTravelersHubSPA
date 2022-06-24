import missionsReducer from '../redux/missions/missions';

const state = [
  {
    missionId: 1,
    missionName: 'm1',
    missionDescription: 'mission1',
    missionStatus: true,
  },
  {
    missionId: 2,
    missionName: 'm2',
    missionDescription: 'mission2',
    missionStatus: false,
  },
];

describe('Mission Reducer', () => {
  it('action GET_MISSIONS', () => {
    const action = { type: 'GET_MISSIONS', payload: state };
    const result = missionsReducer([], action);
    expect(result).toEqual(state);
  });

  it('action CHANGE_MISSION_STATUS', () => {
    const action = {
      type: 'CHANGE_MISSION_STATUS',
      payload: 1,
    };
    const newState = [
      {
        missionId: 1,
        missionName: 'm1',
        missionDescription: 'mission1',
        missionStatus: false,
      },
      {
        missionId: 2,
        missionName: 'm2',
        missionDescription: 'mission2',
        missionStatus: false,
      },
    ];
    const result = missionsReducer(state, action);
    expect(result).toEqual(newState);
  });
});
