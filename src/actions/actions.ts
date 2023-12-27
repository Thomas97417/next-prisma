"use server"
import { revalidatePath } from "next/cache"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const addTodo = async (formData: FormData) => {
  const todoTitle = formData.get('content')
  await prisma.todo.create({
    data: {
      title: todoTitle as string
    }
  })

  revalidatePath('/')
}