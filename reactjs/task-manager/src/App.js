import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { Header } from './component/Header';
import {Footer} from './component/Footer'
import { TaskList } from './component/TaskList';
import { AddTask } from './component/AddTask';
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
