import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer  } from 'react-redux-firebase';



export default combineReducers({
      //     user:userReducer,
          firebase:firebaseReducer,
          firestore: firestoreReducer,

    
    });