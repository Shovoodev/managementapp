/* eslint-disable no-undef */
import Navbar from "./components/navbar/Navbar";
import TaskList from "./components/task/TaskList";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <div className=""> 
        <Navbar/>
        <div className=" w-auto min-w-full flex justify-center ">
          <div className=" w-[700px] max-w-lg h-auto border border-transparent rounded-lg shadow-slate-900 overflow-hidden px-12 py-8">
         <TaskList />
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
