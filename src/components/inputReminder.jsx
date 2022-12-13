const InputReminder = ({ tasksForTheDay }) => {
	// console.log(tasksForTheDay)

	const names = tasksForTheDay.map(task => {
		return (
			<p key={task.id}>
				<input type="checkbox" name="" id="" checked={task.isDone} onClick={() => {}} />
				{task.name}
			</p>
		)
	})
	return <div>{names}</div>
}
export default InputReminder
