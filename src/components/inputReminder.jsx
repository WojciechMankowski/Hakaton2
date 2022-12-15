import { setAsDone } from "../Helpers/function"
const InputReminder = ({ tasksForTheDay, tasks }) => {
	// console.log(tasksForTheDay)

	const names = tasksForTheDay.map(task => {
		return (
			<div key={task.id} className="dayTask">
				<input type="checkbox" name="" id="" checked={task.isCompleted} 
				onClick={()=> {setAsDone(tasks, task)}} 
				className="checkboxTask" />
				<div className="taskName">{task.name}</div>
			</div>
		)
	})
	return <div>{names}</div>
}
export default InputReminder
