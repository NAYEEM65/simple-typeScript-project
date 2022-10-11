import React from 'react';
import { Todo } from '../Model';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <form className="flex justify-between w-[90%] md:w-1/3 rounded p-5 mt-4 bg-orange-500">
            {todo.isDone ? (
                <span className="text-white line-through">{todo.todo}</span>
            ) : (
                <span className="text-white">{todo.todo}</span>
            )}

            <div className="flex justify-between items-center gap-2">
                <AiOutlineEdit className="text-white text-xl cursor-pointer" />

                <AiOutlineDelete
                    className="text-white text-xl cursor-pointer"
                    onClick={() => handleDelete(todo.id)}
                />

                <MdDone
                    className="text-white text-xl cursor-pointer"
                    onClick={() => handleDone(todo.id)}
                />
            </div>
        </form>
    );
};

export default SingleTodo;
