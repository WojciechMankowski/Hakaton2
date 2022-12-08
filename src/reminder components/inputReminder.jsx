const InputReminder = ({ tasksForTheDay }) => {
	const names = tasksForTheDay.map(task => (
		<p>
			<input type="checkbox" name="" id="" />
			{task.name}
		</p>
	))
	return <div>{names}</div>
}
export default InputReminder
