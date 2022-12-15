export const getAllNotCompleted = tasks => {
	return tasks.filter(task => !task.isCompleted)
}

export const getAllForToday = tasks => {
	return tasks.filter(task => {
		const date = new Date(`${task.deadline}`).toDateString()
		const nowDate = new Date().toDateString()
		return date === nowDate
	})
}
export const getAllWithPhrase = (tasks, phrase) => {
	return tasks.filter(task => task.name.includes(phrase) || task.description.includes(phrase))
}

export const addTask = (tasks, task) => {
	console.log(task)
	const task_json = JSON.stringify(task)
	tasks.push(task)
	const id = localStorage.length + 1
	localStorage.setItem(id, task_json)
}
export const deleteTask = (tasks, task) => {
	const goodTask = tasks.filter(item => item.id === task.id)[0]
	const tasksIndex = tasks.indexOf(goodTask)
	localStorage.removeItem(task.id)
	tasks.pop(tasksIndex)
}
export const setAsDone = (tasks, task) => {
	console.log(!task.isCompleted)
	const newTask = tasks.filter(item => item.id = task.id)[0]
	newTask.isCompleted = !task.isCompleted
	tasks[tasks.indexOf(task)] = newTask
	localStorage.removeItem(task.id)
	localStorage.setItem(task.id, JSON.stringify(newTask))
}
export const editTask = (tasks, updatedTask, index) => {
	tasks[index] = { ...this.tasks[index], ...updatedTask }
}
export const getAllForDay = (tasks, userDate) => {
	return tasks.filter(task => {
		const date = new Date(task.deadline).toLocaleDateString()
		const nowDate = new Date(userDate).toLocaleDateString()
		return date === nowDate
	})
}
export const divideByDays = (tasks, date) => {
	return tasks.filter(task => {
		// console.log(task)
		const DateTask = date.toDateString()
		const deadline = new Date(task.deadline)
		// console.log(deadline.toDateString() === DateTask)
		return deadline.toDateString() === DateTask
	})
}
export const getStartDateWeek = nowDate => {
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
