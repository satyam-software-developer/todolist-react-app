import React, { useState, useEffect } from "react"; // Import React and hooks (useState, useEffect) to manage component state and lifecycle
import { ToastContainer, toast } from "react-toastify"; // Import toast notifications for success/error messages
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS for styling toast notifications
import "./style.css"; // Import custom CSS for the component
import todoImage from "../Image/todo.png"; // Import an image to be displayed in the todo list header

const TodoList = () => {
  // Declare state variables using useState hook
  const [tasks, setTasks] = useState([]); // Holds the list of tasks
  const [inputValue, setInputValue] = useState(""); // Holds the current value in the task input field
  const [filter, setFilter] = useState("all"); // Manages the current filter type (all, completed, uncompleted)
  const [isLoading, setIsLoading] = useState(true); // Loading state to show while tasks are fetched from the server
  const [editTaskId, setEditTaskId] = useState(null); // Keeps track of which task is being edited (if any)

  // Fetch tasks from the API on component mount
  useEffect(() => {
    fetchTodos(); // Fetch todos when the component is first rendered
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Fetch tasks from a placeholder API (initial data)
  const fetchTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ); // Fetch 4 tasks from the placeholder API
      const todos = await response.json(); // Convert the response to JSON
      // setTasks(todos); // Set the tasks in state
      setTasks(todos.slice(0, 10)); // Only take the first 10 todos
      setIsLoading(false); // Stop loading once data is fetched
    } catch (error) {
      console.log("Error fetching todos:", error); // Log any errors that occur
      setIsLoading(false); // Stop loading even if there is an error
    }
  };

  // Handle input change event for task input field
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input field value in state
  };

  // Add a new task to the list
  const handleAddTask = async () => {
    if (inputValue.trim() === "") {
      return; // If the input is empty or contains only spaces, do nothing
    }

    const newTask = {
      title: inputValue, // New task has the title entered in the input
      completed: false, // New tasks are not completed by default
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST", // Use POST method to add a new task to the server
          body: JSON.stringify(newTask), // Convert new task data to JSON for the request body
          headers: {
            "Content-type": "application/json; charset=UTF-8", // Specify that we are sending JSON data
          },
        }
      );
      const addedTask = await response.json(); // Get the added task from the response
      setTasks((prevTasks) => [...prevTasks, addedTask]); // Add the new task to the existing list of tasks
      setInputValue(""); // Clear the input field after adding the task
      toast.success("Task added successfully"); // Show success toast notification
    } catch (error) {
      console.log("Error adding task:", error); // Log any errors that occur
      toast.error("Error adding task"); // Show error toast notification
    }
  };

  // Handle checkbox change for marking tasks as completed/uncompleted
  const handleTaskCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map(
        (task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task // Toggle the 'completed' status of the task
      )
    );
  };

  // Delete a task from the list
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Remove the task with the specified ID from the list
    toast.success("Task deleted successfully"); // Show success toast notification
  };

  // Edit an existing task
  const handleEditTask = (taskId) => {
    setEditTaskId(taskId); // Set the task ID that is being edited
    const taskToEdit = tasks.find((task) => task.id === taskId); // Find the task to edit by its ID
    setInputValue(taskToEdit.title); // Populate the input field with the task's title for editing
  };

  // Update a task after editing
  const handleUpdateTask = async () => {
    if (inputValue.trim() === "") {
      return; // If the input is empty or contains only spaces, do nothing
    }

    const updatedTask = {
      title: inputValue, // Updated task has the new title from the input field
      completed: false, // Reset completion status after editing
    };

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${editTaskId}`, // Use PUT method to update the task by ID
        {
          method: "PUT",
          body: JSON.stringify(updatedTask), // Send the updated task data as JSON
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const updatedTaskData = await response.json(); // Get the updated task from the response
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTaskId
            ? { ...task, title: updatedTaskData.title } // Update the task in the list
            : task
        )
      );
      setInputValue(""); // Clear the input field after updating
      setEditTaskId(null); // Reset the editing task ID
      toast.success("Task updated successfully"); // Show success toast notification
    } catch (error) {
      console.log("Error updating task:", error); // Log any errors that occur
      toast.error("Error updating task"); // Show error toast notification
    }
  };

  // Mark all tasks as completed
  const handleCompleteAll = () => {
    setTasks(
      (prevTasks) => prevTasks.map((task) => ({ ...task, completed: true })) // Mark all tasks as completed
    );
  };

  // Clear completed tasks
  const handleClearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed)); // Remove completed tasks from the list
  };

  // Handle filter change for displaying all/completed/uncompleted tasks
  const handleFilterChange = (filterType) => {
    setFilter(filterType); // Update the filter type in state
  };

  // Filter tasks based on the selected filter (all, completed, uncompleted)
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true; // Show all tasks
    } else if (filter === "completed") {
      return task.completed; // Show only completed tasks
    } else if (filter === "uncompleted") {
      return !task.completed; // Show only uncompleted tasks
    }
    return true; // Default case, return all tasks
  });

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>; // Display loading message if tasks are not yet loaded
  }
// Render the todo list UI
  return (
    <div className="container">
      <ToastContainer /> {/* Container for displaying toast notifications */}
      <div className="todo-app">
        <h2>
          <img src={todoImage} alt="todo-image" />{" "}
          {/* Todo list header with image */}
          Todo List
        </h2>
        <div className="row">
          <i className="fas fa-list-check"></i> {/* Icon for the input area */}
          <input
            type="text"
            className="add-task"
            id="add"
            placeholder="Add your todo"
            autoFocus
            value={inputValue} // Bind input field to inputValue state
            onChange={handleInputChange} // Handle changes in input
          />
          <button
            id="btn"
            onClick={editTaskId ? handleUpdateTask : handleAddTask} // Switch between add and update modes
          >
            {editTaskId ? "Update" : "Add"}{" "}
            {/* Button text changes based on whether a task is being edited */}
          </button>
        </div>

        <div className="mid">
          <i className="fas fa-check-double"></i> {/* Icon for bulk actions */}
          <p id="complete-all" onClick={handleCompleteAll}>
            Complete all tasks
          </p>
          <p id="clear-all" onClick={handleClearCompleted}>
            Delete comp tasks
          </p>
        </div>

        {/* Render the list of tasks */}
        <ul id="list">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                data-id={task.id}
                className="custom-checkbox"
                checked={task.completed} // Checkbox state depends on task completion
                onChange={() => handleTaskCheckboxChange(task.id)} // Toggle task completion
              />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>{" "}
              {/* Task title */}
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
                  className="edit"
                  data-id={task.id}
                  onClick={() => handleEditTask(task.id)} // Edit task on click
                  alt="Edit task"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"
                  className="delete"
                  data-id={task.id}
                  onClick={() => handleDeleteTask(task.id)} // Delete task on click
                  alt="Delete task"
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Filter section */}
        <div className="filters">
          <div className="dropdown">
            <button className="dropbtn">Filter</button> {/* Filter button */}
            <div className="dropdown-content">
              <button id="all" onClick={() => handleFilterChange("all")}>
                All
              </button>
              <button
                id="rem"
                onClick={() => handleFilterChange("uncompleted")}
              >
                Uncompleted
              </button>
              <button id="com" onClick={() => handleFilterChange("completed")}>
                Completed
              </button>
            </div>
          </div>

          {/* Display count of completed tasks */}
          <div className="completed-task">
            <p>
              Completed:{" "}
              <span id="c-count">
                {tasks.filter((task) => task.completed).length}
              </span>
            </p>
          </div>

          {/* Display total number of tasks */}
          <div className="remaining-task">
            <p>
              <span id="total-tasks">
                Total Tasks: <span id="tasks-counter">{tasks.length}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList; // Export the component for use in other parts of the app

