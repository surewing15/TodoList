import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "../src/redux/Slice";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    dispatch(addTodo(newTodo.trim()));
    setNewTodo("");
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleStartEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (!editText.trim()) return;

    dispatch(editTodo({ id: editId, text: editText.trim() }));
    setEditId(null);
    setEditText("");
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6">
      <div className="max-w-2xl w-full mx-4 bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Todo List
        </h1>

        <form onSubmit={handleAddTodo} className="mb-6 flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>

        <div className="space-y-3">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg shadow-sm border hover:shadow transition-shadow"
            >
              {editId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-3 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveEdit}
                    className="px-4 py-1 text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-4 py-1 text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(todo.id)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span
                    className={`flex-1 ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => handleStartEdit(todo)}
                    className="px-4 py-1 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="px-4 py-1 text-white bg-red-600 rounded hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No todos yet. Add one above!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
