import "../Reminder.css"
import "bootstrap/dist/css/bootstrap.min.css"
import InputReminder from "./inputReminder"

const ReminderCalendar = props => {
	const getAllForToday = date => {
		// console.log(date);
		return props.task.getAll().filter(tasks => {
			const DateTask = date.toDateString()
			const deadline = new Date(tasks.deadline)
			// console.log("deadline ", deadline.toDateString())
			return deadline.toDateString() == DateTask
		})
	}
	const getStartDateWeek = nowDate => {
		const _nowDate = new Date()
		const startDate = nowDate.getDate() - _nowDate.getDay() + 1
		let date
		if (startDate === -1) {
			const month = nowDate.getMonth()

			// eslint-disable-next-line default-case
			switch (month) {
				case 10:
					date = new Date()
					date.setMonth(9)
					date.setDate(31)
					break
			}
		} else date = new Date(2022, 11, startDate)
		// console.log("startweek", date)
		return date
	}
	const assignTaskWeek = () => {
		let startWeek = getStartDateWeek(new Date())
		let nextDay = new Date(startWeek)
		const forOneDay = {}
		for (let i = 0; i < 7; i++) {
			nextDay.setDate(startWeek.getDate() + i)
			const weekDay = getAllForToday(nextDay)
			// console.log(weekDay, nextDay)
			forOneDay[i] = weekDay
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
					<InputReminder tasksForTheDay={taskWeek[0]} tasks={props.task} />
				</div>
				<div className="day">
					<span>Wtorek</span>
					<InputReminder tasksForTheDay={taskWeek[1]} tasks={props.task} />
				</div>
				<div className="day">
					<span>Środa</span>
					<InputReminder tasksForTheDay={taskWeek[2]} tasks={props.task} />
				</div>
				<div className="day">
					<span>Czwartek</span>
					<InputReminder tasksForTheDay={taskWeek[3]} tasks={props.task} />
				</div>
				<div className="day">
					<span>Piątek</span>
					<InputReminder tasksForTheDay={taskWeek[4]} tasks={props.task} />
				</div>
				<div className="day">
					<span>Sobota</span>
					<InputReminder tasksForTheDay={taskWeek[5]} tasks={props.task} />
				</div>
				<div className="day">
					<span>Niedziela</span>
					<InputReminder tasksForTheDay={taskWeek[6]} tasks={props.task} />
				</div>
			</div>
		</div>
	)
}

export default ReminderCalendar
