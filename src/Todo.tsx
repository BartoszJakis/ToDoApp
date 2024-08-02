import React from 'react';
import {ITodo as Todo} from './types';


interface Props {
    todos: Todo;
    deleteTodo: (id: number) => void;
  
};


export const Todos: React.FC<Props> = (props) => 
{
    return <div className='todo'>
        
       {props.todos.text}
       <button className="delete" onClick={() => props.deleteTodo(props.todos.id) }>Delete</button>

        
    </div>
};