/* eslint-disable react/prop-types */
import { FaEdit, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ task, index, deleteTask, getSingleTask, getCompletedTask }) => {
  return (
    <>
      <div
        className={!task.completed? "task completed" : "task"}
      >
        <p>
          <b>{index + 1} . </b>
          {task.name}
        </p>
        <div className=" text-[1rem] flex  gap-2">
          <FaCheckDouble
            color="green"
            onClick={() => {
              getCompletedTask(task);
            }}
          />
          <FaEdit
            color="blue"
            onClick={() => {
              getSingleTask(task);
            }}
          />
          <FaRegTrashAlt
            className=" cursor-pointer"
            color="red"
            onClick={() => {
              deleteTask(task._id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Task;
