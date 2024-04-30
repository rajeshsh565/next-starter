import Link from "next/link"

const TaskEditPageLayout = ({children}) => {
  return (
    <div>
        <Link href= "/tasks" className="btn btn-accent static">Back To All Tasks</Link>
        {children}
    </div>
  )
}
export default TaskEditPageLayout