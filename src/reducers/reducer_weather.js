//REMEMBER REDUCERS ARE ALWAYS JUST FUNCTIONS
import { FETCHWEATHER } from "../actions/index";

export default function(state = [], action) {
  //console.log('Action recieved', action);

  //Setting up switch statement to pick action type
  switch (action.type) {
    case FETCHWEATHER:
      //return state.concat( [ action.payload.data ] );  (Same thing as below)
      return [action.payload.data, ...state]; //This puts it at the top where concat adds to end
  }
  return state;
}
