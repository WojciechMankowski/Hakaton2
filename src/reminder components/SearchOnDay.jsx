import React, { useState } from "react"

function SearchOnDay(props) {
	const [date, setDate] = useState("")
	const [word, setWord] = useState("")
	const [isList, setIsList] = useState(false)
	let [elements, setElement] = useState([])

	const search = () => {
		const taskOnDay = props.task.getAllForDay(date)
		setElement(
			taskOnDay.map(element => {
				return <p key={element.name}>{element.name}</p>
			})
		)
		setIsList(true)
		props.setSeach(!props.search)
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
	const showAll = () => {
		const words = props.task.getAll()
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
	const showAllIsDone = () => {
		const words = props.task.getAllNotCompleted()
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
	console.log(elements, props.search)
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
				<button onClick={showAll} type="button">
					Pokaż wszystko
				</button>
				<button onClick={showAllIsDone} type="button">
					Pokaż wszystkie niezakończone
				</button>
			</label>
		)
	} else if (isList) {
		return <div>{elements}</div>
	} 
	else <div />
}
export default SearchOnDay
