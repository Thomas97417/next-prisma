"use server"
import { revalidatePath } from "next/cache"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function removeTodo(id: number){
  try {
    await prisma.todo.delete({
      where: {
        id: id,
      },
    })
    console.log(`Todo with id ${id} has been deleted`)
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error)
  }
  revalidatePath('/')
}