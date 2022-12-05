const priorities = {
	LOW: "Low",
	HIGH: "High",
}

export class Reminder {
	constructor(name, deadline, description = "", category = "", isRepeatTask = false, howDay) {
		this.name = name
		this.isCompleted = false
		this.date = new Date()
		this.dateUpdated = new Date()
		this.deadline = deadline
		this.description = description
		this.category = category
		this.priority = priorities.LOW
		this.id = Math.random
		this.assignedTo = ""
		this.createdBy = ""
		this.isRepeatTask = isRepeatTask
		this.howDay = howDay
	}
	remeAboutTask() {
		const date = new Date(`${this.deadline}`)
		date.setDate(date.getDate() - 1)
		const name = this.name
		const nowDate = new Date()
		setTimeout(function () {
			console.log(`Do do task: ${name}`)
		}, date - nowDate.getTime())
	}
	setAsDone() {
		this.isCompleted = true
	}
}

export class Reminders {
	constructor() {
		this.tasks = []
	}

	refresh() {
		const repeatTasks = this.tasks.filter(task => {
			const date = new Date(`${task.deadline}`).toDateString()
			const nowDate = new Date().toDateString()
			return task.isRepeatTask && nowDate === date
		})

		repeatTasks.forEach(task => {
			const taskIndex = this.tasks.indexOf(task)
			const deadline = task.deadline
			const newDate = new Date(
				deadline.getFullYear(),
				deadline.getMonth(),
				deadline.getDate() + task.howDay,
				deadline.getHours(),
				deadline.getMinutes()
			)
			this.tasks[taskIndex] = { ...task, deadline: newDate }
		})
	}
	getAll() {
		return this.tasks
	}

	getAllNotCompleted() {
		return this.tasks.filter(task => !task.isCompleted)
	}

	getAllForToday() {
		return this.tasks.filter(task => {
			const date = new Date(`${task.deadline}`).toDateString()
			const nowDate = new Date().toDateString()
			return date === nowDate
		})
	}
	getAllForDay(userDate) {
		// console.log(userDate)
		return this.tasks.filter(task => {
			// console.log(task.deadline)
			const date = new Date(task.deadline).toLocaleDateString()
			// const nowDate = new Date().toDateString()
			const nowDate = new Date(userDate).toLocaleDateString()
			// console.log(nowDate)
			// console.log(date)
			return date === nowDate
		})
	}

	getAllWithPhrase(phrase) {
		return this.tasks.filter(task => task.name.includes(phrase) || task.description.includes(phrase))
	}
	addTask(task) {
		const task_json = JSON.stringify(task)
		localStorage.setItem(task.name, task_json)
		this.tasks.push(task)
	}

	deleteTask(task) {
		const tasksIndex = this.tasks.indexOf(task)
		this.tasks.pop(tasksIndex)
	}

	editTask(updatedTask, index) {
		this.tasks[index] = { ...this.tasks[index], ...updatedTask }
	}
}
