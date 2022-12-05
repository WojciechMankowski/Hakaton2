import { React, useState } from "react"
import "../Reminder.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Reminder } from "./reminderFunctions"

const AddReminder = props => {
	const [nameTask, setNameTask] = useState("")
	const [dateTask, setDateTask] = useState("")
	const [descriptionTask, setDescriptionTask] = useState("")
	const [categoryTask, setCategoryTask] = useState("")
	const [isImportantTask, setIsImportantTask] = useState(false)
	const [repeatTask, setRepeatTask] = useState(false)
	const [whenRepeatTask, setWhenRepeatTask] = useState("")

	const getDataForm = e => {
		// e.preventDefault()
		props.addTask(
			new Reminder(nameTask, dateTask, descriptionTask, categoryTask, isImportantTask, repeatTask, whenRepeatTask)
		)
		
		props.setNewTask(!props.newTask)
	}
	if (props.newTask) {
		return (
			<div className="addTask">
				<h2>Dodaj nowe zadanie</h2>
				<form action="">
					<div className="row">
						<label htmlFor="nameTask" className="col-10 col-htmlForm-label">
							Tytuł zadania
						</label>
						<input
							type="text"
							id="nameTask"
							onChange={event => {
								setNameTask(event.target.value)
							}}
							required
							className="htmlForm-control"
						/>
					</div>
					<div className="row">
						<label htmlFor="deadline" className="col-10 col-htmlForm-label">
							Data przypomnienia
						</label>
						<input
							type="datetime-local"
							name="deadline"
							id="deadline"
							onChange={event => {
								setDateTask(event.target.value)
							}}
							required
							className="htmlForm-control"
						/>
					</div>

					<div className="row">
						<label htmlFor="description" className="col-10 col-htmlForm-label">
							Opis zadania
						</label>
						<input
							type="text"
							id="description"
							className="htmlForm-control"
							onChange={event => {
								setDescriptionTask(event.target.value)
							}}
						/>
					</div>
					<div className="row">
						<label htmlFor="category" className="col-10 col-htmlForm-label">
							Kategoria
						</label>
						<input
							type="text"
							id="category"
							className="htmlForm-control"
							onChange={event => {
								setCategoryTask(event.target.value)
							}}
						/>
					</div>

					<div className="row">
						<label htmlFor="" className="col-5 labels">
							Czy zadanie jest bardzo ważne?
							<input
								type="checkbox"
								name="isImportantTask "
								id="importance"
								className="htmlForm-check"
								onClick={() => {
									setIsImportantTask(true)
								}}
							/>
						</label>
					</div>

					<div className="row">
						<label htmlFor="isRepeatTask " className="col-10 col-htmlForm-label" id="isRepeatTask_label">
							Czy zadanie ma się powtarzać?
						</label>
						<div className="col checkbox">
							<input
								type="checkbox"
								name="isRepeatTask "
								id="isRepeatTask"
								className="htmlForm-check"
								onClick={() => {
									setRepeatTask(true)
								}}
							/>
						</div>
					</div>

					<div className="row">
						<label htmlFor="" className="col-10 col-htmlForm-label">
							Kiedy ma się powtórzyć
						</label>
						<input
							type="number"
							name=""
							id=""
							className="htmlForm-control"
							onChange={event => {
								setWhenRepeatTask(event.target.value)
							}}
						/>
						<div className="col-sm-10"></div>
					</div>
					<div className="button">
						<button type="button" value="Dodaj nowe zadanie" className="btn btn-primary" onClick={getDataForm}>
							Dodaj nowe zadanie
						</button>
						<button
							type="reset"
							className="btn btn-danger"
							onClick={() => {
								props.setNewTask(false)
							}}>
							Anuluj
						</button>
					</div>
				</form>
			</div>
		)
	} else {
		return <div />
	}
}
export default AddReminder
