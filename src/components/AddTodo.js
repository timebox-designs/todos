import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            let value = input.value.trim();

            if (value) {
                dispatch(addTodo(value));
                input.value = '';
            }
        }}>
            <input ref={el => input = el}/>
            <button type='submit'>
                Add Todo
            </button>
        </form>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;