import Form from '@/components/Form'
import TodoList from '@/components/TodoList'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const TodosPage = async() => {
  const todos = await prisma.todo.findMany()
  console.table(await prisma.todo.findMany())
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2 w-full">
      <h1 className='text-2xl font-bold'>Todo's Page</h1>
      <Form />
      <TodoList todos={todos}/>
    </main>
  )
}

export default TodosPage;
