import React, { useState, useEffect } from "react"

function SearchOnDay(props) {
	const [date, setDate] = useState("")
	const [word, setWord] = useState("")
	const [isList, setIsList] = useState(false)
	let [elements, setElement] = useState([])
	
	// useEffect(()=>{}, [])
	const search = () => {
		const taskOnDay = props.task.getAllForDay(date)
		setElement(
			taskOnDay.map(element => {
				return (
					<p key={element.name}>
						<input
							type="checkbox"
							onClick={() => {
								props.task.setAsDone(element)
							}}
						/>
						{element.name}
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
		setIsList(true)
		props.setSeach(!props.search)
	}
	const seachWord = () => {
		const words = props.task.getAllWithPhrase(word)
		setElement(
			words.map(element => {
				return (
					<p>
						<input type="checkbox" />
						{element.name}
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
		setIsList(!isList)
		props.setSeach(!props.search)
	}
	const showAll = () => {
		const words = props.task.getAll()
		setElement(
			words.map(element => {
				return (
					<p>
						<input
							type="checkbox"
							onClick={() => {
								props.task.setAsDone(element)
							}}
						/>
						{element.name}
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
		setIsList(!isList)
		props.setSeach(!props.search)
	}
	const showAllIsDone = () => {
		const words = props.task.getAllNotCompleted()
		setElement(
			words.map(element => {
				return (
					<p>
						{element.name}
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
		setIsList(!isList)
		props.setSeach(!props.search)
	}

	if (props.search) {
		return (
			<label htmlFor="" className="search">
				Podaj datę
				<input
					type="date"
					onChange={event => {
						setDate(event.target.value)
					}}
				/>
				<button type="button" onClick={search} className="btn btn-primary">
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
				<button onClick={showAll} type="button" className="btn btn-primary">
					Pokaż wszystko
				</button>
				<button onClick={showAllIsDone} type="button" className="btn btn-primary">
					Pokaż wszystkie niezakończone
				</button>
			</label>
		)
	} else if (isList) {
		return <div>{elements}</div>
	} else <div />
}
export default SearchOnDay
