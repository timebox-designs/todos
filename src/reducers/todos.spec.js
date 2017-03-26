import * as actions from '../actions';
import todos from './todos';

const addAction = (id, text) => {
    return {
        type: actions.ADD_TODO,
        id,
        text
    }
};

const toggleAction = (id) => {
    return {
        type: actions.TOGGLE_TODO,
        id
    }
};

describe('todos reducer', () => {
    it('todos should handle initial state', () => {
        expect(
            todos(undefined, {})
        ).toEqual([]);
    });

    it('todos should add todo to empty state', () => {
        let expectedState = [{
            id: 0,
            text: 'todo',
            completed: false
        }];

        expect(
            todos([], addAction(0, 'todo'))
        ).toEqual(expectedState);
    });

    it('todos should add todo to existing state', () => {
        let currentState = [{
            id: 0,
            text: 'first todo',
            completed: false
        }];

        let expectedState = [{
            id: 0,
            text: 'first todo',
            completed: false
        }, {
            id: 1,
            text: 'second todo',
            completed: false
        }];

        expect(
            todos(currentState, addAction(1, 'second todo'))
        ).toEqual(expectedState);
    });

    it('todos should toogle completed property of todo', () => {
        let currentState = [{
            id: 0,
            text: 'first todo',
            completed: false
        }, {
            id: 1,
            text: 'second todo',
            completed: false
        }];

        let expectedState = [{
            id: 0,
            text: 'first todo',
            completed: false
        }, {
            id: 1,
            text: 'second todo',
            completed: true
        }];

        expect(
            todos(currentState, toggleAction(1))
        ).toEqual(expectedState);
    });
});