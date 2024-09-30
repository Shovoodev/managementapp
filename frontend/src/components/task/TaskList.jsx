import { useEffect, useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import loadingImg from "../../assets/loader.gif";
import Url from "./Url";
//http://localhost:4000/api/tasks
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [completedTask, setCompletedTask] = useState([]);
  const [isEditing , setIsEditing] = useState(false)
  const [taskId , setTaskId] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });

  const { name } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const getTasks = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(Url, tasks);
      setTasks(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.massage);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const createTask = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("inpur field cannot be empty ");
    }
    try {
      await axios.post(Url, formData);
      toast.success("Task added sucessfully");
      setFormData({ ...formData, name: "" });
    } catch (error) {
      toast.error(error.massage);
    }
  };
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${Url}/${id}`);
      toast.success("task deleted");
      getTasks();
    } catch (error) {
      toast.error(error);
    }
  };
  const getSingleTask = (task) =>{
    setFormData({name:task.name , completed:false})
    setTaskId(task._id)
    setIsEditing(true)
  }
  const updataTask = async (e) => {
    e.preventDefault();
    if(name === "" ) { return toast.error("input field cannot be empty")}
  try {
     await axios.put(`${Url}/${taskId}` , formData)
    setFormData({...formData , name:""})
    setIsEditing(false)
    getTasks()
    toast.success("updated task")
  } catch (error) {
    toast.error(error)
  }
}
  const getCompletedTask = async (task) => {
    const newFormData = { name : task.name , completed : true}
    try {
      await axios.put(`${Url}/${task._id}`, newFormData)
      getTasks()
    } catch (error) {
      toast.error(error.massage)
        }
  }
  return (
    <div className="shadow-2xl p-6">
      <h2 className=" w-full text-2xl p-2 flex items-center">Task Manager</h2>
      <TaskForm
        name={name}
        handleInputChange={handleInputChange}
        createTask={createTask}
        isEditing={isEditing}
        updateTask= {updataTask}
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
      {isLoading && (
        <div className="flex items-center justify-center">
          <img src={loadingImg} alt="loading" />
        </div>
      )}
      {!isLoading && tasks.length === 0 ? (
        <p>NO task Added </p>
      ) : (
        <>
          {tasks.map((task, index) => {
            return (
              <Task
                key={task._id}
                task={task}
                index={index}
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
                completedTask={getCompletedTask}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TaskList;
