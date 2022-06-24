import rocketsReducer,{GET_ROCKETS,CHANGE_ROCKETS_STATUS} from '../redux/rockets/rockets';

const state = [
  {
    rocketId: 1,
    rocketName: 'space x 1',
    rocketDescription: 'rocket.description',
    rocketImage: 'rocket.flickr_images[0]',
    rocketStatus: false,
  },
  {
    rocketId: 2,
    rocketName: 'space x 2',
    rocketDescription: 'rocket.description',
    rocketImage: 'rocket.flickr_images[0]',
    rocketStatus: true,
  },
];


describe('rockets Reducer', () => {
  it('action GET_ROCKETS', () => {
    const action = { type: GET_ROCKETS, payload: state };
    const result = rocketsReducer([], action);
    expect(result.length).toEqual(state.length);
  });

  it('action CHANGE_ROCKETS_STATUS', () => {
    const action = {
      type: CHANGE_ROCKETS_STATUS,
      payload: 1,
    };
   
    const result = rocketsReducer(state, action);
    const changedStatusRocket = result.filter(rocket=>rocket.id === action.payload);
    expect(changedStatusRocket.rocketStatus).not.toEqual(state[0].rocketStatus);
  });
});
