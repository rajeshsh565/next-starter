'use client';
import { createTask } from "@/utils/actions";
import { useEffect } from "react";
import {useFormStatus, useFormState} from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  message: null
}

const TaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);
  useEffect(()=>{
    if(state.message === 'error'){
      toast.error("Something went wrong.");
    }
    if(state.message==="Task Created!"){
      toast.success(state.message);
    }
  },[state])
  const SubmitBtn = () => {
    const {pending} = useFormStatus();
    return (
      <button className="btn btn-secondary join-item" type="submit" disabled={pending}>{`${pending? 'Creating Task...':'Create Task'}`}</button>
    )
  }
  return (
    <form action={formAction} className="max-w-2xl flex justify-center mb-8">
      <div className="join">
        <input type="text" placeholder="Enter Task Here..." name="content" className="text-lg join-item text-center input input-bordered" required/>
        <SubmitBtn/>
      </div>
    </form>
  )
}
export default TaskForm;