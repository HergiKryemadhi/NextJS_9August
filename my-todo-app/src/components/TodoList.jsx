import TodoItem from './TodoItem'
import { useTodoState } from '../contexts/TodoContext'

function TodoList() {
  const { todos, filter } = useTodoState()

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <ul className="list-group">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList