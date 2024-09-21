function TaskInput(props) {
    return (
      <div>
        <input
          type="text"
          value={props.newTask}
          onChange={(e) => props.setNewTask(e.target.value)}
          placeholder="Enter a new Task"
        />
        <button onClick={props.handleAddTask}>Add Task</button>
      </div>
    );
  }
  export default TaskInput;