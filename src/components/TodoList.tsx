import React from 'react';
import { Todo } from '../Model';
import SingleTodo from './SingleTodo';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="md:flex flex items-center justify-center p-2 flex-col md:flex-row md:justify-center text-center gap-2 md:w-[80%] mx-auto md:mx-auto w-full">
            {todos.map((todo) => (
                <SingleTodo key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />
            ))}
        </div>
    );
};

export default TodoList;
