import axios from 'axios';

const GET_MISSIONS = 'GET_MISSIONS';
const CHANGE_MISSION_STATUS = 'CHANGE_MISSION_STATUS';
const MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  const response = await axios.get(MISSION_URL).then(
    (apiMissions) => apiMissions.data.map((el) => (
      {
        missionId: el.mission_id,
        missionName: el.mission_name,
        missionDescription: el.description,
        missionStatus: false,
      }
    )),
  );
  dispatch({
    type: GET_MISSIONS,
    payload: response,
  });
};

export const changeMissionStatus = (id) => ({
  type: CHANGE_MISSION_STATUS,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case CHANGE_MISSION_STATUS: {
      const newState = state.map(
        (m) => {
          if (m.missionId === action.payload) {
            const mm = m;
            mm.missionStatus = !mm.missionStatus;
            return mm;
          }
          return m;
        },
      );
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
