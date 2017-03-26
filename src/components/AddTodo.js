import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <input ref={el => input = el}/>

            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                Add Todo
            </button>
        </div>
    );
};

AddTodo = connect()(AddTodo);

export default AddTodo;