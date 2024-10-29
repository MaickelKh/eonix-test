import { makeSelectHomeContainerCounter } from '../selector';

describe('Selector', () => {
  const state = { homeContainer: { counter: 3 } };
  const selectCounter = makeSelectHomeContainerCounter();

  it('should select the counter', () => {
    expect(selectCounter(state)).toEqual(3);
  });
});