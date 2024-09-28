import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
//http://localhost:4000/api/tasks
const TaskList = () => {
  const url = "http://localhost:4000/api/tasks"
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("inpur field cannot be empty ");
    }
    try {
      await axios.post( url, formData);
      toast.success("Task added sucessfully");
      setFormData({ ...formData, name: "" });
    } catch (error) {
      toast.error(error.massage);
      console.log(error);
    }
  };
  return (
    <div className="shadow-2xl p-6">
      <h2 className=" text-2xl">Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
      />
      <div className=" flex justify-between items-center p-2">
        <p>
          <b>Total Tasks : </b>
        </p>
        <p>
          <b>Completed Tasks : </b>
        </p>
      </div>
      <hr />
      <Task />
    </div>
  );
};

export default TaskList;
