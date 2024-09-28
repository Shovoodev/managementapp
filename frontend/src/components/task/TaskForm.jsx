/* eslint-disable react/prop-types */

const TaskForm = ({createTask , name , handleInputChange}) => {
  return (
    <form className="w-full mx-8 my-0 flex" onSubmit={createTask}>
        <input type="text" placeholder="Add a Task" name="name" value={name} onChange={handleInputChange}/>
        <button type="submit">Add</button>
    </form>
  )
}

export default TaskForm