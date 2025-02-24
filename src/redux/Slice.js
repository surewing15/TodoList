import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromStorage = () => {
  try {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (error) {
    console.error("Error loading todos:", error);
    return [];
  }
};

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: loadTodosFromStorage(),
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
  },
});

export const { addTodo, toggleTodo, editTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
