import { deleteTask } from "@/utils/actions"

const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id}/>
      <button className="btn btn-error min-h-8 h-8" type="submit">Delete</button>
    </form>
  )
}
export default DeleteForm