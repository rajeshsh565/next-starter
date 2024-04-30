import prisma from "@/utils/db"

const fetchTasks = async() => {
    const tasks = prisma.task.findMany({});
    return tasks;
}

const PrismaExample = async() => {
    const tasks = await fetchTasks();
    if(tasks.length === 0){
      return <h1 className="text-3xl">No Tasks to Display...</h1>
    }
  return (
    <div>
        <ul>
        {tasks.map((task)=>{
            return <li key={task.id}>{task.content}</li>
        })}
        </ul>
    </div>
  )
}
export default PrismaExample