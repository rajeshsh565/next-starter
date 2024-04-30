import { editTask } from "@/utils/actions"


const EditTaskForm = ({content, completed, id}) => {
  return (
        <form action={editTask}>
    <div className="mt-5 shadow-xl flex flex-col gap-8 max-w-md py-12 px-8 items-center border border-base-300 rounded-lg">
            <input type="text" defaultValue={content} name="content" className="text-center py-4 input input-bordered"/>
            <input type="hidden" name="id" value={id}/>
            <div className="items-center">
            <label htmlFor="completed" className="text-xl mr-4">Completed?</label>
            <input type="checkbox" name="completed" id="completed" className="checkbox checkbox-sm checkbox-primary" defaultChecked={completed}/>
            </div>
            <button type="submit" className="btn btn-secondary max-w-36 w-28">Edit</button>
    </div>
        </form>
  )
}
export default EditTaskForm