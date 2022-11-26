import {React} from "react";
import "./Reminder.css";
import {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import AddReminder from "./reminder components/addReminder";
import ReminderCalendar from "./reminder components/reminderCalendar";
import {Reminders, Reminder} from "./reminder components/reminderFunctions";


 
const AppReminder = () => {
    const [task, setTask] = useState(new Reminders());
    const [newTask, setNewTask] = useState(false);
    
    console.log(task)
    task.addTask(new Reminder('zrobic zakupy', new Date()))

  return (
    <div className="container">
       <ReminderCalendar setNewTask={setNewTask} task={task} />
       <AddReminder addTask={task.addTask} setNewTask={setNewTask} newTask={newTask} />
    </div>
  );
}

export default AppReminder;