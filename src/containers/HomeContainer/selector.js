import { createSelector } from 'reselect';
import { initialState } from '../../components/counter/reducer';

const selectHomeContainerDomain = state => state.homeContainer || initialState;
const makeSelectHomeContainerCounter = () => createSelector(selectHomeContainerDomain, substate => substate.counter);

export {
  makeSelectHomeContainerCounter,
};
