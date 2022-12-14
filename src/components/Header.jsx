import React from "react"

const Header = ({ setSeach, setNewTask }) => {
	return (
		<header>
			<h1>Przypomnienie o zadaniach</h1>
			<div className="wrapper_btn">
				<button
					className="btn btn-primary"
					onClick={() => {
						setNewTask(true)
					}}>
					<span>Dodaj zadanie</span>
				</button>
				<button
					className="btn btn-primary"
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
