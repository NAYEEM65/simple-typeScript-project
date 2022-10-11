import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../Model';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';
type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [editTodoText, setEditTodoText] = useState<string | number>(todo.todo);
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    };
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleEdit = () => {
        if (!isEdit && !todo.isDone) {
            setIsEdit(!isEdit);
        }
    };
    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodoText } : todo)));
        setIsEdit(false);
    };
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [isEdit]);
    return (
        <Draggable draggableId="TodosList" index={index}>
            {(provided) => (
                <form
                    onSubmit={(e) => handleSubmit(e, todo.id)}
                    className="flex justify-between w-[90%] md:full rounded p-5 mt-4 hover:scale-105 transition-all duration-200 hover:border-1 hover:border-blue-500 bg-orange-500"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {isEdit ? (
                        <input
                            value={editTodoText}
                            ref={inputRef}
                            onChange={(e) => setEditTodoText(e.target.value)}
                            className="rounded py-2 px-3 outline-none"
                        />
                    ) : todo.isDone ? (
                        <span className="text-white line-through">{todo.todo}</span>
                    ) : (
                        <span className="text-white">{todo.todo}</span>
                    )}

                    <div className="flex justify-between items-center gap-2">
                        {isEdit && (
                            <button type="submit">
                                <MdDone className="text-green-700 text-xl cursor-pointer" />
                            </button>
                        )}
                        <AiOutlineEdit
                            className="text-white text-xl cursor-pointer"
                            onClick={handleEdit}
                        />

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
            )}
        </Draggable>
    );
};

export default SingleTodo;
