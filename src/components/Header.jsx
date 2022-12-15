import React from "react"

const Header = ({ setSeach, setNewTask }) => {
	return (
		<header>
			<h1 className="title">Przypomnienie o zadaniach</h1>
			<div className="wrapper_btn">
				<button
					onClick={() => {
						setNewTask(true)
					}}>
					Dodaj zadanie
				</button>
				<button
					onClick={() => {
						setSeach(true)
					}}>
					Szukaj zadań
				</button>
			</div>
		</header>
	)
}
export default Header
