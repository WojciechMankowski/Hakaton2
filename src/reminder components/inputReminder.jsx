const InputReminder = ({ tasksForTheDay, tasks }) => {
	const names = tasksForTheDay.map(task => (
		<p>
			<input
				type="checkbox"
				name=""
				id=""
				checked={task.isDone}
				onClick={() => {
					tasks.setAsDone(task)
				}}
			/>
			{task.name}
		</p>
	))
	return <div>{names}</div>
}
export default InputReminder
