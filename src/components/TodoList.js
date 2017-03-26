import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onClick}) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id}
                  {...todo}
                  onClick={() => onClick(todo.id)}
            />
        )}
    </ul>
);

export default TodoList;