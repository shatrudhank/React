import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "../res/css/TaskList.css";

export const TaskList = ({tasks, setTasks}) => {
   
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <section className='tasklist'>
        <h1>Task List</h1>
        <ul>
            <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
        <BoxCard result="success">
            <p className="title">Offer Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vel!</p>
        </BoxCard>

        <BoxCard result="warning">
            <p className="title">Cookie Notification</p>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, suscipit.</p>
        </BoxCard>
    </section>
  )
}