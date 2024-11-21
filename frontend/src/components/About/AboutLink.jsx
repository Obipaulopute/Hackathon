import React, { useState } from 'react';

function AboutLink() {
  const [tasks, setTasks] = useState([]); // Store the list of tasks
  const [task, setTask] = useState(''); // Handle the current input
  const [selectedTasks, setSelectedTasks] = useState([]); // Store selected tasks for actions

  // Add a new task
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(''); // Clear input after adding task
    }
  };

  // Remove a specific task
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Handle selection of tasks
  const handleSelectTask = (index) => {
    const newSelection = [...selectedTasks];
    if (newSelection.includes(index)) {
      // Deselect the task if it's already selected
      const filteredSelection = newSelection.filter(i => i !== index);
      setSelectedTasks(filteredSelection);
    } else {
      // Select the task
      newSelection.push(index);
      setSelectedTasks(newSelection);
    }
  };

  // Mark selected tasks as completed
  const markCompleted = () => {
    const updatedTasks = tasks.map((task, index) => {
      if (selectedTasks.includes(index)) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    setSelectedTasks([]); // Clear selection after action
  };

  // Delete selected tasks
  const deleteSelectedTasks = () => {
    const updatedTasks = tasks.filter((_, index) => !selectedTasks.includes(index));
    setTasks(updatedTasks);
    setSelectedTasks([]); // Clear selection after action
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

        {/* Input form for adding tasks */}
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l-md"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-r-md"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        {/* Actions for selected tasks */}
        {selectedTasks.length > 0 && (
          <div className="mb-4 flex justify-between">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={markCompleted}
            >
              Mark Completed
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={deleteSelectedTasks}
            >
              Delete Selected
            </button>
          </div>
        )}

        {/* Task List */}
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center bg-gray-200 p-2 rounded-md ${task.completed ? 'line-through text-gray-500' : ''}`}
            >
              {/* Checkbox for selecting tasks */}
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedTasks.includes(index)}
                onChange={() => handleSelectTask(index)}
              />
              <span>{task.text}</span>

              {/* Delete button for individual tasks */}
              <button
                className="text-red-500"
                onClick={() => removeTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutLink;
