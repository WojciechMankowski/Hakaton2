import React, { useState } from "react"
import { getAllForDay, getAllWithPhrase, getAllNotCompleted, deleteTask, setAsDone } from "../Helpers/function"

function SearchOnDay({ tasks, search, setSeach }) {
	
	const [date, setDate] = useState("")
	const [word, setWord] = useState("")
	let [isList, setIsList] = useState(false)
	let [elements, setElement] = useState([])

	const searchOfDate = event => {
		event.preventDefault()
		const taskOnDay = getAllForDay(tasks, date)

		elements = taskOnDay.map(element => (
			<div className="searchTask" key={element.name}>
				<input
					className="inputTask"
					type="checkbox"
					onClick={() => {
						setAsDone(tasks, element)
					}}
				/>
				{element.name}
				<button
					className="buttonTask"
					onClick={() => {
						deleteTask(tasks, element)
					}}>
					Usuń
				</button>
			</div>
		))
		setElement(elements)
		setIsList(true)
		search = false
		console.log(elements, isList, search)
	}
	const seachWord = () => {
		const words = getAllWithPhrase(tasks, word)
		
		elements = words.map(element => (
			<div className="searchTask" key={element.name}>
				<input
					className="inputTask"
					type="checkbox"
					onClick={() => {
						setAsDone(tasks, element)
					}}
				/>
				{element.name}
				<button
					className="buttonTask"
					onClick={() => {
						deleteTask(tasks, element)
					}}>
					Usuń
				</button>
			</div>
		))

		setIsList(isList)
		setSeach(false)
		console.log(search, isList)
		console.log(elements)
	}
	const showAll = event => {
		setElement(
			tasks.map(element => (
				<div className="searchTask" key={element.name}>
					<input
						className="inputTask"
						type="checkbox"
						onClick={() => {
							setAsDone(tasks, element)
						}}
					/>
					{element.name}
					<button
						className="buttonTask"
						onClick={() => {
							deleteTask(tasks, element)
						}}>
						Usuń
					</button>
				</div>
			))
		)
		isList = true
		search = false
		console.log(elements, isList, search)
	}
	const showAllIsDone = event => {
		const words = getAllNotCompleted(tasks)
		elements = words.map(element => (
			<div className="searchTask" key={element.name}>
				<input
					className="inputTask"
					type="checkbox"
					onClick={() => {
						setAsDone(tasks, element)
					}}
				/>
				{element.name}
				<button
					className="buttonTask"
					onClick={() => {
						deleteTask(tasks, element)
					}}>
					Usuń
				</button>
			</div>
		))
		setIsList(!isList)
		setSeach(!search)
	}

	if (search) {
		return (
			<div className="search">
				<div>
					<label htmlFor="">
						Podaj datę
						<input
							type="date"
							onChange={event => {
								setDate(event.target.value)
							}}
						/>
					</label>
					<button type="button" onClick={searchOfDate}>
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
				</div>
				<div className="col-md-10">
					<button onClick={showAll} type="button">
						Pokaż wszystkie zadania
					</button>
					<button onClick={showAllIsDone} type="button">
						Pokaż wszystkie niezakończone zadania
					</button>
				</div>
				<div className="searchElement">
					<div className="titleOfElements">Wyszukane zadania</div>
					<div className="listOfElements">{elements}</div>
				</div>
			</div>
		)
	} else return <div></div>
}
export default SearchOnDay
