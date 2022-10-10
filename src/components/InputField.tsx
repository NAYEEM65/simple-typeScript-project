import React from 'react';

interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
    handleAddTodo: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
    return (
        <form onSubmit={handleAddTodo} className="flex w-[90%] relative items-center">
            <input
                type="text"
                className="w-[100%] rounded-3xl text-2xl border-none transition-all px-4 p-1 outline-none duration-200 shadow-inner focus:shadow-3xl"
                placeholder="Enter Task"
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="absolute w-9 h-9 m-3 rounded-full right-0 border-none bg-blue-600 hover:bg-blue-700 text-sm text-white transition-all duration-200 shadow-lg active:scale-75 active:shadow-lg"
            >
                Go
            </button>
        </form>
    );
};

export default InputField;
