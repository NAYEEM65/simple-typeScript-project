import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './Model';

const App: React.FC = () => {
    const [todo, setTodo] = useState<string | number>('');
    const [todos, setTodos] = useState<Todo[]>([]);
    const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
        }
        setTodo('');
    };

    return (
        <DragDropContext onDragEnd={() => {}}>
            <div className="w-[100vw] min-h-[100vh] flex flex-col items-center bg-blue-500">
                <div>
                    <h1 className="uppercase text-4xl my-30 mx-0 z-10 text-center text-white font-bold">
                        Drag
                    </h1>
                </div>
                <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </div>
        </DragDropContext>
    );
};

export default App;
