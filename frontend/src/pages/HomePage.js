import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    handleNewTask(navigate);
  }

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: 'OPEN',
  });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/tasks');
        setTasks(response.data.filter(task => task.status === 'OPEN'));
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    fetchTasks();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNewTask = async (navigate) => {
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');

    if (!token) {
      alert('Please login to create a task.');
      // Redirect to the login page
      navigate('/login');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/api/tasks', 
        {
          ...newTask,
          created_by_name: username
          
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log('Task created successfully!', response.data);

      // Reload the page after the task has been created
      window.location.reload();

    } catch (error) {
      console.error('Error creating task', error);
    }
};


  return (
    <div>
      <h1>Create New Task</h1>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Status:
          <select
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
          >
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="COMPLETED">Completed</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleButtonClick}>Create Task</button>
      </form>
      <h2>Open Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Created by: {task.created_by_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
