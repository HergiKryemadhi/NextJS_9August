import { useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import FilterButtons from './components/FilterButtons'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <TodoProvider>
      <div className={`App ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="mb-0">To do List</h1>
            <button 
              className={`btn dark-mode-toggle ${darkMode ? 'btn-light' : 'btn-dark'}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
          <AddTodo />
          <FilterButtons />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  )
}

export default App