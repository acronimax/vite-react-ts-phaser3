import { describe, it, expect } from 'vitest';
import reducer, { Game, updateScore } from '../gameSlice';

describe('features/gameSlice', () => {
  const mockInitialState: Game = {
    username: 'Mock User',
    score: 0,
  };
  it('should have the initial state', () => {
    expect(reducer(mockInitialState, { type: undefined })).toEqual(
      mockInitialState
    );
  });
  it('should update the score state', () => {
    expect(reducer(mockInitialState, updateScore(5))).toEqual({
      ...mockInitialState,
      score: 5,
    });
  });
});
