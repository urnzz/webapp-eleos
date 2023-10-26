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
      alert('Logue para criar uma tarefa.');
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
      console.log('Tarefa criada com sucesso!', response.data);

      // Reload the page after the task has been created
      window.location.reload();

    } catch (error) {
      console.error('Error creating task', error);
    }
};


  return (
    <div>
      <h1>Criar nova tarefa</h1>
      <form>
        <label>
          Titulo:
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Descrição:
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
            <option value="OPEN">Aberta</option>
            <option value="IN_PROGRESS">Em andamento</option>
            <option value="COMPLETED">Completa</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleButtonClick}>Criar tarefa</button>
      </form>
      <h2>Tarefas em aberto</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Solicitado por: {task.created_by_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
