/* eslint-disable react/prop-types */


const TaskForm = ({createTask , name , handleInputChange ,isEditing  , updateTask }) => {
 
  return (
    <form className=" mx-8 my-0 flex justify-between gap-4" onSubmit={ !isEditing? createTask : updateTask}>
        <input className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" placeholder="Add a Task" name="name" value={name} onChange={handleInputChange}/>
        <button className="bg-blue-700 hover:bg-blue-900 text-white p-3 rounded-sm" type="submit" >
          {
            !isEditing? "ADD" : "Edit"
          }
        </button>
    </form>
  )
}

export default TaskForm 