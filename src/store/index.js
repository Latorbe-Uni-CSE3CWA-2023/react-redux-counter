import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import counterReducer from "../reducers";

const store = createStore(
  counterReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        //middleware to be added later
      })
    )
  )
);

export default store;
