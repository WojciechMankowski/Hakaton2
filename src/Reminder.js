import { React } from "react"
import "./Reminder.css"
import { useState } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import AddReminder from "./reminder components/addReminder"
import ReminderCalendar from "./reminder components/reminderCalendar"
import { Reminders, Reminder } from "./reminder components/reminderFunctions"
import SearchOnDay from "./reminder components/SearchOnDay"

const AppReminder = () => {
	const [task, setTask] = useState(new Reminders())
	const [newTask, setNewTask] = useState(false)
  const [search, setSeach] = useState(false)

	console.log(task)
	// task.addTask(new Reminder("zrobic zakupy", new Date()))
	const NewTask = Task => {
		console.log(task.getAll())
		task.addTask(Task)
		console.log(task.getAll())
	}
	return (
		<div className="container">
			<ReminderCalendar setNewTask={setNewTask} task={task} setSeach={setSeach} />
			<SearchOnDay task={task} search={search} setSeach={setSeach}/>
			<AddReminder addTask={NewTask} setNewTask={setNewTask} newTask={newTask} />
		</div>
	)
}

export default AppReminder
