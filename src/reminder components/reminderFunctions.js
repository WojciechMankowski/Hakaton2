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
		this.id = localStorage.length + 1
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
	remove() {
		this.tasks = []
	}
	getAllForToday() {
		return this.tasks.filter(task => {
			const date = new Date(`${task.deadline}`).toDateString()
			const nowDate = new Date().toDateString()
			return date === nowDate
		})
	}
	getAllForDay(userDate) {
		return this.tasks.filter(task => {
			const date = new Date(task.deadline).toLocaleDateString()
			const nowDate = new Date(userDate).toLocaleDateString()
			return date === nowDate
		})
	}

	getAllWithPhrase(phrase) {
		return this.tasks.filter(task => task.name.includes(phrase) || task.description.includes(phrase))
	}
	addTask(task) {
		const task_json = JSON.stringify(task)
		this.tasks.push(task)
		const id = localStorage.length + 1
		localStorage.setItem(id, task_json)
	}

	deleteTask(task) {
		const goodTask = this.tasks.filter(item => item.id == task.id)[0]
		const tasksIndex = this.tasks.indexOf(goodTask)
		localStorage.removeItem(task.id)
		this.tasks.pop(tasksIndex)
	}
	setAsDone(task) {
		const newTask = this.tasks.filter(item => item.id == task.id)[0]
		newTask.setAsDone()
		localStorage.removeItem(task.name)
		localStorage.setItem(task.name, JSON.stringify(newTask))
	}
	editTask(updatedTask, index) {
		this.tasks[index] = { ...this.tasks[index], ...updatedTask }
	}
}
