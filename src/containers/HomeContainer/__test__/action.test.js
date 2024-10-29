import { incrementAction, decrementAction } from '../../../components/counter/action';
import { INCREMENT, DECREMENT } from '../../../components/counter/constant';

describe('Actions', () => {
  it('should increment the counter', () => {
    const expectedAction = { type: INCREMENT };
    expect(incrementAction()).toEqual(expectedAction);
  });

  it('should decrement the counter', () => {
    const expectedAction = { type: DECREMENT };
    expect(decrementAction()).toEqual(expectedAction);
  });
});