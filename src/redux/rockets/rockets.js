import axios from 'axios';

const GET_ROCKETS = 'spacex-project/rocket/GET_ROCKETS';
const CHANGE_ROCKET_STATUS = 'spacex-project/rocket/CHANGE_ROCKET_STATUS';
const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = () => async (dispatch) => {
  const response = await axios.get(ROCKET_URL).then(
    (rockets) => rockets.data.map((rocket) => (
      {
        rocketId: rocket.id,
        rocketName: rocket.rocket_name,
        rocketDescription: rocket.description,
        rocketImage: rocket.flickr_images[0],
        rocketStatus: false,
      }
    )),
  );
  dispatch({
    type: GET_ROCKETS,
    payload: response,
  });
};

export const changeRocketStatus = (id) => ({
  type: CHANGE_ROCKET_STATUS,
  payload: id,
});

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case CHANGE_ROCKET_STATUS: {
      return state.map((rocket) => {
        if (rocket.rocketId === action.payload) {
          return { ...rocket, rocketStatus: !rocket.rocketStatus };
        }
        return rocket;
      });
    }
    default:
      return state;
  }
}
