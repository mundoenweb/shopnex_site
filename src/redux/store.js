import { createStore, combineReducers } from "redux"
import {saveState} from './storeSaveAndLoad'
import {
  styles,
  user
} from "./reducers"
import { composeWithDevTools } from "@redux-devtools/extension"
// import thunk from "redux-thunk"

const appReducer = combineReducers({
  styles,
  user,
})

const rootReducer = (state, action) => {
  if (action.type === "INITIAL_STATE" ) return action.stateInitial || state
  return appReducer(state, action)
}

const store = createStore(
  rootReducer,
  composeWithDevTools()
)

store.subscribe( function () { // escucha cualquier cambio en el estado
  saveState(store.getState())
})

export default store
