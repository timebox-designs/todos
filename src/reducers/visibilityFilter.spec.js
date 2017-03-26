import * as actions from '../actions';
import visibilityFilter from './visibilityFilter';

describe('visibilityFilter reducer', () => {
    it('visibilityFilter should handle initial state', () => {
        expect(
            visibilityFilter(undefined, {})
        ).toEqual('SHOW_ALL');
    });

    it('visibilityFilter should return "SHOW_ACTIVE"', () => {
        let setVisibility = {
            type: actions.SET_VISIBILITY_FILTER,
            filter: 'SHOW_ACTIVE'
        };

        expect(
            visibilityFilter('SHOW_ALL', setVisibility)
        ).toEqual('SHOW_ACTIVE');
    });
});