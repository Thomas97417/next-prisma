"use client"
import React from 'react'
import { addTodo } from '@/actions/addTodo'
import Button from './Button'

const Form = () => {
  const ref = React.useRef<HTMLFormElement>(null)
  return (
    <form ref={ref} className='flex flex-col w-[300px] my-16' action={async (formData) => {
      ref.current?.reset()
      await addTodo(formData)
    }}>
      <input type="text" name="content" placeholder='Write a ToDo' className='border px-4 py-2 my-2' required/>
      <Button />
    </form>
  )
}

export default Form