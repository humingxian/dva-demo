import React from "react"
import { connect } from "dva"
import TodoList from "../components/TodoList";

const Todos = ({ dispatch, todos }) => {
  function handleDelete (id) {
    dispatch({
      type: "todos/delayDel",
      payload: { id }
    })
  }

  function handleAdd () {
    dispatch({
      type: "todos/add"
    })
  }

  return (
    <>
      <h2>TODOS</h2>
      <TodoList todos={todos} onDelete={handleDelete} onAdd={handleAdd} />
    </>
  )
}

export default connect(({todos}) => ({todos}))(Todos)