import homeContainerReducer, { initialState } from '../../../components/counter/reducer';
import { INCREMENT, DECREMENT } from '../../../components/counter/constant';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(homeContainerReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle INCREMENT', () => {
    const expectedState = { counter: 1 };
    expect(homeContainerReducer(initialState, { type: INCREMENT })).toEqual(expectedState);
  });

  it('should handle DECREMENT when counter > 0', () => {
    const currentState = { counter: 1 };
    const expectedState = { counter: 0 };
    expect(homeContainerReducer(currentState, { type: DECREMENT })).toEqual(expectedState);
  });

  it('should not decrement counter below 0', () => {
    const currentState = { counter: 0 };
    expect(homeContainerReducer(currentState, { type: DECREMENT })).toEqual(currentState);
  });
});