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
	
	for (let i = 0; i < localStorage.length; i++) {
		const item = localStorage.getItem(localStorage.key(i))
		try {
			const retrievedObject = JSON.parse(item)

			if (localStorage.length != task.getAll().length) {
				task.addTask(
					new Reminder(
						retrievedObject.name,
						retrievedObject.deadline,
						retrievedObject.description,
						retrievedObject.category,
						retrievedObject.isRepeatTask,
						retrievedObject.howDay
					)
				)
			}
		} catch (error) {
			console.log()
		}
	}
	// console.log(task.getAll())
	const NewTask = Task => {
		console.log(task.getAll())
		task.addTask(Task)
		console.log(task.getAll())
	}
	return (
		<div className="container">
			<ReminderCalendar setNewTask={setNewTask} task={task} setSeach={setSeach} />
			<SearchOnDay task={task} search={search} setSeach={setSeach} />
			<AddReminder addTask={NewTask} setNewTask={setNewTask} newTask={newTask} />
		</div>
	)
}

export default AppReminder
