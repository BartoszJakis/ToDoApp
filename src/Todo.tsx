import React from 'react';
import {ITodo as Todo} from './types';


interface Props {
    todos: Todo;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
  
};


export const Todos: React.FC<Props> = (props) => 
{
const [isEditing, setIsEditing] = React.useState(false);
const [newText, setNewText] = React.useState(props.todos.text);
const handleEdit = () => {
    props.editTodo(props.todos.id, newText);
    setIsEditing(false);
  };

    return <div className='todo'>
      {isEditing ? 
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      :
        props.todos.text
      }
     
  
 

        {isEditing ?

         <button className="save" onClick={handleEdit}>Save</button>
        :
         <button className="save" onClick={() => setIsEditing(true) }>edit</button>
         
        }
         

         <button className="delete" onClick={() => props.deleteTodo(props.todos.id)}>Delete</button>


        
    </div>
};