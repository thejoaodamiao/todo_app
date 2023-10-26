
//componente de criação de tarefas
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const TodoForms = ({ addTodo }) => {
//valores iniciais e setters de estado
 const[value, setValue] = useState("");
 const[category, setCategory] = useState("");

//função lida com submit
const handleSubmit = (e)=>{
  e.preventDefault("");

  if(!value || !category) return;

  addTodo(value, category)
  setCategory("");
  setValue("");
 }

  return (
    <div className="todo-form">
        <h2>Criar tarefas</h2>
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder="Digite texto aqui" onChange={(e)=> setValue(e.target.value)}/>
            <select value={category}  onChange={(e)=> setCategory(e.target.value)} >
                <option value="">Escolha uma categoria</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForms