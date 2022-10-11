import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../Model';
import SingleTodo from './SingleTodo';
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
    return (
        <div className="flex w-[95%] md:flex-row flex-col justify-center  items-center gap-2 flex-wrap">
            <Droppable droppableId="TodosList">
                {(provided) => (
                    <div
                        className="md:w-[47%] w-full bg-cyan-400 p-5 mt-4 rounded"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span>Active Task</span>
                        {todos.map((todo, index) => (
                            <SingleTodo
                                index={index}
                                key={todo.id}
                                todos={todos}
                                todo={todo}
                                setTodos={setTodos}
                            />
                        ))}
                    </div>
                )}
            </Droppable>
            <Droppable droppableId="TodosRemove">
                {(provided) => (
                    <div
                        className="md:w-[47%] w-full bg-green-400 p-5 mt-4 rounded"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span>Completed tasks</span>
                        {completedTodos.map((todo, inedx) => (
                            <SingleTodo
                                index={inedx}
                                key={todo.id}
                                todos={completedTodos}
                                todo={todo}
                                setTodos={setCompletedTodos}
                            />
                        ))}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default TodoList;
