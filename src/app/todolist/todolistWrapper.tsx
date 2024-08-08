import { useState } from "react";
import CreateForm from "./createForm";
import EditForm from "./editForm";
import TodoItem from "./todoItem";
import { getTodos } from "@/lib/mongo/todoDB";
import ITodoDataProps from "@/lib/datatype/ITodoDataProps";



async function TodolistWrapper() {
  const todosFetched = await getTodos();
  const todosProps = todosFetched.map((todo) => {
    let ret:ITodoDataProps= {
      content: todo.content,
      _id: todo._id.toString(),
      completed: todo.completed,
      isEditing: false,
    };
    return ret;
  });
  return (
    <div className="w-4/5 bg-secondary p-8 rounded-lg mt-6 text-center">
      <h1 className="text-4xl text-text p-2">代辦事項</h1>
      <CreateForm/>
      {todosProps.map((todo) => {
        return todo.isEditing ? (
          <h1>aaaa</h1>
        ) : (
          <TodoItem
            todo={todo}
            key={todo._id}
          />
        );
      })}
    </div>
  );
}

export default TodolistWrapper;
