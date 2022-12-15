import { React } from "react"
import "./Reminder.css"
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import AddReminder from "./components/addReminder"
import ReminderCalendar from "./components/reminderCalendar"
import SearchOnDay from "./components/SearchOnDay"
import { addTask } from "./Helpers/function"

const AppReminder = () => {
	let [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState(false)
	let [search, setSeach] = useState(false)
	tasks = []
	for (let i = 0; i < localStorage.length; i++) {
		const item = localStorage.getItem(localStorage.key(i))
		try {
			const retrievedObject = JSON.parse(item)
			tasks.push({ ...retrievedObject })
		} catch (error) {
			console.log()
		}
	}
	// console.log(tasks)
	const NewTask = task => {
		tasks.push(task)
		addTask(tasks, task)
	}
	return (
		<div className="container">
			<ReminderCalendar setNewTask={setNewTask} tasks={tasks} setSeach={setSeach} />
			<SearchOnDay tasks={tasks} search={search} setSeach={setSeach} />
			<AddReminder addTask={NewTask} setNewTask={setNewTask} newTask={newTask} />
		</div>
	)
}

export default AppReminder
//
