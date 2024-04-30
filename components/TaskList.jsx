import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";

const prismaHandler = async () => {
  const tasks = prisma.task.findMany({
    orderBy: {
      "createdAt": "desc"
    }
  });
  return tasks;
}

const TaskList = async () => {
  const tasks = await prismaHandler();
  return (
    <ul className="my-4 max-w-2xl">
      {
        tasks.map((task)=>{
          return <li className="flex justify-between mb-4 border border-base-300 rounded-xl px-8 py-2 items-center shadow-md" key={task.id}>
            <h2 className={`mr-6 ${task.completed && `line-through`}`}>{task.content}</h2>
            <div className="flex flex-row">
              <Link href={`/tasks/${task.id}`} className="btn btn-accent mr-2 min-h-8 h-8">Edit</Link>
              <DeleteForm id={task.id}/>
            </div>
          </li>
        })
      }
    </ul>
  )
}
export default TaskList