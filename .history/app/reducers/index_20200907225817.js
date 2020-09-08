import { combineReducers } from 'redux';
import TeamsReducer from './TeamsReducer';


const rootReducers = combineReducers({
    teams: TeamsReducer,
})

export default rootReducers;