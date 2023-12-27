import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
const prisma = new PrismaClient()

const TodosPage = async() => {
  const todos = await prisma.todo.findMany()
  const addTodo = async (formData: FormData) => {
    "use server"
    const todoTitle = formData.get('content')
    await prisma.todo.create({
      data: {
        title: todoTitle as string
      }
    })

    revalidatePath('/')
  }
  console.table(await prisma.todo.findMany())
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8 w-full">
      <h1 className='text-2xl font-bold'>Todo's Page</h1>
      <ul className='list-disc'>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <form className='flex flex-col gap-4' action={addTodo}>
        <input type="text" name="content" placeholder='Write a ToDo' className='border'/>
        <button className='bg-blue-600 text-cyan-50 p-2'>Add Todo</button>
      </form>
    </main>
  )
}

export default TodosPage;
