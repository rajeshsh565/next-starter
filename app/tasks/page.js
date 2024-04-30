import TaskForm from "@/components/TaskForm"
import TaskList from "@/components/TaskList"

const TasksPage = () => {
  return (
    <div className="text-xl">
    <TaskForm/>
    <TaskList/>
    </div>
  )
}
export default TasksPage