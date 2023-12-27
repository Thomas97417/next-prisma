"use client"
import { removeTodo } from '@/actions/removeTodo'
import React from 'react'
import { Todo } from '@prisma/client'
import { X } from 'lucide-react'

type TodoListProps = {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
  return (
    <ul className='list-disc flex flex-col gap-2'>
      {todos.map((todo) => (
        <div key={todo.id} className='flex flex-row justify-between gap-4'>
          <li>
            {todo.title}
          </li>
          <button onClick={() => removeTodo(todo.id)}>
            <X />
          </button>
        </div>
      ))}
    </ul>
  )
}

export default TodoList