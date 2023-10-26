/* eslint-disable react/prop-types */
// componente da listagem de tarefas
const Todo = ({todo}) => {
  return (
    <div className='todo'>
          <div className='content'>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
            <div>
              <button className="complete">Completar</button>
              <button className="remove">X</button>
            </div>
          </div>
        </div>
  )
}

export default Todo