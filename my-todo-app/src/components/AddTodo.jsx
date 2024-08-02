import { useState } from 'react'
import { useTodoDispatch } from '../contexts/TodoContext'

function AddTodo() {
  const [input, setInput] = useState('')
  const [dueDate, setDueDate] = useState('')
  const dispatch = useTodoDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch({ type: 'ADD_TODO', payload: { text: input.trim(), dueDate } })
      setInput('')
      setDueDate('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <input
          type="text"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="Due date (optional)"
        />
        <button type="submit" className="btn btn-primary">Add Todo</button>
      </div>
    </form>
  )
}

export default AddTodo