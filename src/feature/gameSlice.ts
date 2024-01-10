import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Game {
  username: string;
  score: number;
}

const initialState: Game = {
  username: 'Phaser TS',
  score: 0,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateScore: (state: Game, action: PayloadAction<number>) => ({
      ...state,
      score: action.payload,
    }),
  },
});

export const { updateScore } = gameSlice.actions;
export default gameSlice.reducer;
