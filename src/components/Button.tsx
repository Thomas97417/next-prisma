import React from 'react'
import { useFormStatus } from 'react-dom'

const Button = () => {
  const {pending} = useFormStatus();
  return (
    <button className='bg-blue-500 text-white font-semibold px-4 py-2 rounded'>
      {pending ? 'Adding...' : 'Add'}
    </button>
  )
}

export default Button