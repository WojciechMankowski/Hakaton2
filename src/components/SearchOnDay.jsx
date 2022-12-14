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
		console.table(taskOnDay)
		elements = taskOnDay.map(element => (
			<p key={element.name}>
				<input
					type="checkbox"
					onClick={() => {
						setAsDone(tasks, element)
					}}
				/>
				{element.name}
				<button
					onClick={() => {
						deleteTask(tasks, element)
					}}>
					Usuń
				</button>
			</p>
		))
		setElement(elements)
		setIsList(true)
		search = false
		console.log(elements, isList, search)
	}
	const seachWord = () => {
		const words = getAllWithPhrase(tasks, word)

		elements = words.map(element => (
			<p key={element.name}>
				<input
					type="checkbox"
					onClick={() => {
						setAsDone(tasks, element)
					}}
				/>
				{element.name}
				<button
					onClick={() => {
						deleteTask(tasks, element)
					}}>
					Usuń
				</button>
			</p>
		))

		setIsList(isList)
		setSeach(false)
		console.log(search, isList)
		console.log(elements)
	}
	const showAll = event => {
		setElement(
			tasks.map(element => (
				<p key={element.name}>
					<input
						type="checkbox"
						onClick={() => {
							setAsDone(tasks, element)
						}}
					/>
					{element.name}
					<button
						onClick={() => {
							deleteTask(tasks, element)
						}}>
						Usuń
					</button>
				</p>
			))
		)
		isList = true
		search = false
		console.log(elements, isList, search)
	}
	const showAllIsDone = event => {
		const words = getAllNotCompleted(tasks)
		elements = words.map(element => (
			<p key={element.name}>
				<input
					type="checkbox"
					onClick={() => {
						setAsDone(tasks, element)
					}}
				/>
				{element.name}
				<button
					onClick={() => {
						deleteTask(tasks, element)
					}}>
					Usuń
				</button>
			</p>
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
					<button type="button" onClick={searchOfDate} className="btn btn-primary">
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
						<button type="button" onClick={seachWord} className="btn btn-primary">
							Szukaj
						</button>
					</label>
				</div>
				<div className="col-md-10">
					<button onClick={showAll} type="button" className="btn btn-primary">
						Pokaż wszystkie zadania
					</button>
					<button onClick={showAllIsDone} type="button" className="btn btn-primary">
						Pokaż wszystkie niezakończone zadania
					</button>
				</div>
				<div>{elements}</div>
			</div>
		)
	} else
		return (
			<div className="search">
				<div className="row">
					<div className="col">
						<label htmlFor="">
							Podaj datę
							<input
								type="date"
								onChange={event => {
									setDate(event.target.value)
								}}
							/>
						</label>
						<button type="button" onClick={searchOfDate} className="btn btn-primary">
							Szukaj
						</button>
					</div>
					<div className="col">
						<label>
							Szukane słowo:
							<input
								type="text"
								onChange={event => {
									setWord(event.target.value)
								}}
							/>
							<button type="button" onClick={seachWord} className="btn btn-primary">
								Szukaj
							</button>
						</label>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<button onClick={showAll} type="button" className="btn btn-primary">
							Pokaż wszystkie zadania
						</button>
					</div>
					<div className="col">
						<button onClick={showAllIsDone} type="button" className="btn btn-primary">
							Pokaż wszystkie niezakończone zadania
						</button>
					</div>
				</div>
			</div>
		)
}
export default SearchOnDay
