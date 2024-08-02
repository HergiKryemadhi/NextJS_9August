import { useTodoDispatch } from '../contexts/TodoContext'

function TodoItem({ todo }) {
  const dispatch = useTodoDispatch()

  const formatDate = (dateString) => {
    if (!dateString) return ''
    // Simply return the date string as entered by the user
    return dateString
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
        {todo.dueDate && (
          <small className="text-muted ms-2">
            Due: {formatDate(todo.dueDate)}
          </small>
        )}
      </div>
      <button 
        className="btn btn-danger btn-sm"
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem