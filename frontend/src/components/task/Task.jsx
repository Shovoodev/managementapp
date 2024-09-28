import { FaEdit ,FaCheckDouble , FaRegTrashAlt  } from "react-icons/fa";

const Task = () => {
  return (
    <>
    <div className=" relative flex justify-between items-center w-full bg-[#eee] p-3 mt-2">
        <p>
          <b>1. </b>
          Task 1
        </p>
        <div className=" text-[1rem] flex  gap-2">
            <FaCheckDouble color="green"/>
            <FaEdit color="blue"/>
            <FaRegTrashAlt color="red"/>
        </div>
    </div>
       <div> </div>
       </>
  )
}

export default Task