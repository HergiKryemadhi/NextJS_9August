import { createContext, useContext, useReducer } from 'react'
import { loadTodos, saveTodos } from '../utils/localStorage'

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodos = [...state.todos, { id: Date.now(), ...action.payload, completed: false }]
      saveTodos(newTodos)
      return { ...state, todos: newTodos }
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
      saveTodos(toggledTodos)
      return { ...state, todos: toggledTodos }
    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload)
      saveTodos(filteredTodos)
      return { ...state, todos: filteredTodos }
    case 'SET_FILTER':
      return { ...state, filter: action.payload }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: loadTodos(),
    filter: 'all'
  })

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  )
}

export function useTodoState() {
  const context = useContext(TodoStateContext)
  if (context === undefined) {
    throw new Error('useTodoState must be used within a TodoProvider')
  }
  return context
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext)
  if (context === undefined) {
    throw new Error('useTodoDispatch must be used within a TodoProvider')
  }
  return context
}