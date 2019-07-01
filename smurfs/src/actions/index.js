import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/


export const FETCHING_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESSFUL = "FETCH_DATA_SUCCESSFUL";
export const POST_NEW_SMURF = "POSTING_NEW_SMURF";
export const UPDATE_SMURF = "UPDATING_SMURF";
export const DELETE_SMURF = "DELTEING_SMURF";


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


export const getData = () => dispatch => {
      dispatch({type:FETCHING_DATA})
      axios.get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({
            type: FETCH_DATA_SUCCESSFUL,
            payload: res.data
        })
      })
      .catch(err => alert('There was an Error: ', err))
}

export const addSmurf = smurf => dispatch =>{

      axios.post('http://localhost:3333/smurfs', smurf)
      .then(res=>{
          console.log("this is the resoponse from the add smurf func", res)
          dispatch({
            type:POST_NEW_SMURF,
            payload: res.data
          })
      })
      .catch(err => alert("There was an Error adding your Smurf: ", err))
}