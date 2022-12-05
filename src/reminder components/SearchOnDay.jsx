import React, { useState } from "react"

function SearchOnDay(props) {
	const [date, setDate] = useState("")
	const [word, setWord] = useState("")
	let isList = false
	let [elements, setElement] = useState([])
	const search = () => {
		const taskOnDay = props.task.getAllForDay(date)
		setElement(
			taskOnDay.map(element => {
				return <p>{element.name}</p>
			})
		)
		isList = true
	}
	const seachWord = () => {
		const words = props.task.getAllWithPhrase(word)
		setElement(
			words.map(element => {
				return (
					<p>
						{element.name}
						{/* <button onClick={()=> {props.task.editTask({}, element)}}>Edytuj</button> */}
						<button
							onClick={() => {
								props.task.deleteTask(element)
							}}>
							Usuń
						</button>
					</p>
				)
			})
		)
		isList = true
		props.setSeach(!props.search)
	}
	if (props.search) {
		return (
			<label htmlFor="">
				Podaj datę
				<input
					type="date"
					onChange={event => {
						setDate(event.target.value)
					}}
				/>
				<button type="button" onClick={search}>
					Szukaj
				</button>
				<label>
					Szukane słowo:
					<input
						type="text"
						onChange={event => {
							setWord(event.target.value)
						}}
					/>
					<button type="button" onClick={seachWord}>
						Szukaj
					</button>
				</label>
			</label>
		)
	} else if (isList) {
		;<div>{elements}</div>
	} else <div />
}
export default SearchOnDay
