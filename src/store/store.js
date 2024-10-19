import { createLogger } from "redux-logger";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";

const logger = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
});

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
  },
});

export default store;
