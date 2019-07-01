/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING_DATA , FETCH_DATA_SUCCESSFUL, POST_NEW_SMURF, UPDATE_SMURF, DELETE_SMURF } from "../actions"

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 */

 const defaultState = {
   smurfs: [
    {
      name: 'ROSE',
      age: 500,
      height: '5cm',
      id: 0
    }
   ],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const rootReducer = (state = defaultState, action) => {
        switch(action.type){

          case FETCHING_DATA:
            return{
              ...state,
              fetchingSmurfs: true,
              error: action.payload
            }

            case FETCH_DATA_SUCCESSFUL:
              return{
                ...state,
                fetchingSmurfs: false,
                error: '',
                smurfs: action.payload
              }

          default: 
          return state;
        }
}