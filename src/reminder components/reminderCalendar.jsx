import "../Reminder.css"

import "bootstrap/dist/css/bootstrap.min.css"
import InputReminder from "./inputReminder"

const ReminderCalendar = props => {
	const getAllForToday = date => {
		return props.task.getAll().filter(tasks => {
			// datę tą co otrzymujemy musimy zmienić zapis tej daty
			// const date = new Date(tasks.deadline).toDateString()
			const DateTask = date.toDateString()
			console.log("Date", DateTask)
			const nowDate = new Date().toDateString()
			console.log(nowDate, DateTask)
			console.log(DateTask === nowDate)
			return DateTask === nowDate
		})
	}
	const getStartDateWeek = nowDate => {
		const startDate = nowDate.getDate() - nowDate.getDay()
		console.log(startDate)
		let date
		if (startDate === -1) {
			const month = nowDate.getMonth()

			switch (month) {
				case 10:
					date = new Date()
					date.setMonth(9)
					date.setDate(31)
					break
			}
		} else date = new Date(2022, 11, startDate + 1)
		console.log(date)
		return date
	}
	const assignTaskWeek = () => {
		let startWeek = getStartDateWeek(new Date())
		let nextDay = new Date(startWeek)
		const forOneDay = {}
		for (let i = 0; i < 7; i++) {
			nextDay.setDate(startWeek.getDate() + i)
			const weekDay = getAllForToday(nextDay)
			forOneDay[i] = weekDay
			// console.log(nextDay)
		}
		return forOneDay
	}
	const taskWeek = assignTaskWeek()
	console.log(taskWeek)
	return (
		<div className="container">
			<header>
				<h1>Przypomnienie o zadaniach</h1>
				<button
					className="btn btn-primary"
					onClick={() => {
						props.setNewTask(true)
					}}>
					<span>Dodaj zadanie</span>
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						props.setSeach(true)
					}}>
					Szukaj zadań
				</button>
			</header>
			<div className="calendar-week">
				<h2>Zadania na ten tydzień</h2>
			</div>
			<div className="week">
				<div className="day">
					<span>Poniedziałek</span>
					<InputReminder tasksForTheDay={taskWeek[0]} />
				</div>
				<div className="day">
					<span>Wtorek</span>
					<InputReminder tasksForTheDay={taskWeek[1]} />
				</div>
				<div className="day">
					<span>Środa</span>
					<InputReminder tasksForTheDay={taskWeek[2]} />
				</div>
				<div className="day">
					<span>Czwartek</span>
					<InputReminder tasksForTheDay={taskWeek[3]} />
				</div>
				<div className="day">
					<span>Piątek</span>
					<InputReminder tasksForTheDay={taskWeek[4]} />
				</div>
				<div className="day">
					<span>Sobota</span>
					<InputReminder tasksForTheDay={taskWeek[5]} />
				</div>
				<div className="day">
					<span>Niedziela</span>
					<InputReminder tasksForTheDay={taskWeek[6]} />
				</div>
			</div>
		</div>
	)
}

export default ReminderCalendar
