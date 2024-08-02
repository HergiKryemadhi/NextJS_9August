import { useTodoState, useTodoDispatch } from '../contexts/TodoContext'

function FilterButtons() {
  const { filter } = useTodoState()
  const dispatch = useTodoDispatch()

  return (
    <div className="btn-group mb-4">
      <button
        className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
      >
        All
      </button>
      <button
        className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
      >
        Active
      </button>
      <button
        className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
        onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
      >
        Completed
      </button>
    </div>
  )
}

export default FilterButtons