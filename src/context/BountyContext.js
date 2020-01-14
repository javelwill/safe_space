import createDataContext from './createDataContext';
import {BOUNTIES} from '../mock_data/mock_data';

const bountyReducer = (state, action) => {
  switch (action.type) {
    case 'get_bounties': {
      return action.payload;
    }
    default:
      return state;
  }
};

const getBounties = dispatch => {
  return async () => {
    const bounties = BOUNTIES;
    dispatch({type: 'get_bounties', payload: bounties});
  };
};

export const {Provider, Context} = createDataContext(
  bountyReducer,
  {getBounties},
  [],
);
