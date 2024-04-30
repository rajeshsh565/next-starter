'use server';
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const createTask = async(prevState,formData)=>{
    const count = await prisma.task.count();
  if (count >= 10) {
    return {message:"error"}
  }
    const content = formData.get('content');
    try {
        await prisma.task.create({
          data: {
            content,
          }
        });
        revalidatePath("/tasks");
        return {message:"Task Created!"}
    } catch (error) {
        return {message:"error"}
    }
  }

export const deleteTask = async (formData) => {
    const id = formData.get('id');
    await prisma.task.delete({
        where: {
            id
        }
    });
    revalidatePath("/tasks");
}

export const editTask = async (formData) => {
    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');
    await prisma.task.update({
        where: {
            id
        },
        data: {
            content,
            completed: completed==='on' ? true:false
        }
    });
    revalidatePath("/tasks");
    redirect("/tasks");
}