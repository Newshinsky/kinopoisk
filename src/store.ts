import { applyMiddleware, combineReducers } from "redux"
import { createStore } from "redux"
import filmsReducer from "./reducers/trendingItemsReducer"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import creditReducer from "./reducers/creditReducer";

const rootReducer = combineReducers({
    films: filmsReducer,
    credits: creditReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootStoreType = ReturnType<typeof rootReducer>

export default store