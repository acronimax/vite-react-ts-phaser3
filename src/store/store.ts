import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { type PreloadedState } from '@reduxjs/toolkit';
import gameReducer from '../feature/gameSlice';

export const rootReducer = combineReducers({
  game: gameReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<NonNullable<typeof setupStore>>;
export type AppDispatch = AppStore['dispatch'];
export default setupStore();
