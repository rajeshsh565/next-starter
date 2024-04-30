import EditTaskForm from "@/components/EditTaskForm"
import prisma from "@/utils/db";

const getSingleTask = async (id) => {
    const task = await prisma.task.findMany({
        where: {
            id
        },
    });
    return task;
}

const TaskEditPage = async({params}) => {
    const task = await getSingleTask(params.id);
    const {content, completed, id} = task[0];
  return (
    <EditTaskForm content={content} completed={completed} id={id}/>
  )
}
export default TaskEditPage