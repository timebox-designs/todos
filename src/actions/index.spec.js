import * as actions from './index';

describe('todo actions', () => {
    it('addTodo should return an ADD_TODO action', () => {
        let expected = {
            type: actions.ADD_TODO,
            id: 0,
            text: 'Add todo'
        };

        expect(
            actions.addTodo('Add todo')
        ).toEqual(expected);
    });

    it('toggleTodo should return a TOGGLE_TODO action', () => {
        let expected = {
            type: actions.TOGGLE_TODO,
            id: 7
        };

        expect(
            actions.toggleTodo(7)
        ).toEqual(expected);
    });
});

describe('filter actions', () => {
   it('setVisibilityFilter should return a SET_VISIBILITY_FILTER action', () => {
       let expected = {
           type: actions.SET_VISIBILITY_FILTER,
           filter: 'SHOW_ALL'
       };

       expect(
           actions.setVisibilityFilter('SHOW_ALL')
       ).toEqual(expected);
   })
});