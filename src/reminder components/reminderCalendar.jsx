import "../Reminder.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import InputReminder from "./inputReminder";
 
const ReminderCalendar = (props) => {


    const getAllForToday = () => {
		return props.task.getAll().filter(tasks => {
			const date = new Date(`${tasks.deadline}`).toDateString()
			const nowDate = new Date().toDateString()
			return date === nowDate
		})
	}
    const getStartDateWeek = nowDate => {
        const startDate = nowDate.getDate() - nowDate.getDay()
    
        let date
        if (startDate === -1) {
            const month = nowDate.getMonth()
           
            switch (month) {
                case 10:
                    date = new Date()
                    date.setMonth(9)
                    date.setDate(31)
                    break
            }
        } else date = new Date(2022, 10, startDate)
        return date
    }
    const assignTaskWeek = () => {
        const startWeek = getStartDateWeek(new Date())
        const forEachDay = () => {
            const forOneDay = {};
            for ( let i=0; i < 7; i++) {
            const weekDay = getAllForToday(startWeek + i)
            forOneDay[i] = weekDay
            console.log(startWeek +1)
            }
            return forOneDay
        }
        return forEachDay()
    }
    const taskWeek = assignTaskWeek()
    console.log(taskWeek)
  return (
    <div className="container">
        <header>
            <h1>Przypomnienie o zadaniach</h1>
            <button className="btn btn-primary" onClick={() => {props.setNewTask(true)}}>
                <span>Dodaj zadanie</span>
            </button>
            <button onClick={()=>{props.setSeach(true)}}>Szukaj zadań</button>
        </header>
    <div className="calendar-week">
        <h2>Zadania na ten tydzień</h2>
    </div>
        <div className="week">
            <div className="day">
                <span>Poniedziałek</span>
                <InputReminder />
            </div>
            <div className="day">
                <span>Wtorek</span>
                <InputReminder/>
            </div>
            <div className="day"><span>Środa</span>
                <InputReminder/>
            </div>
            <div className="day"><span>Czwartek</span>
                <InputReminder/>
            </div>
            <div className="day"><span>Piątek</span>
                <InputReminder/>
            </div>
            <div className="day"><span>Sobota</span>
                <InputReminder/>
            </div>
            <div className="day"><span>Niedziela</span>
                <InputReminder/>
            </div>
        </div>
    </div>

  );
}

export default ReminderCalendar;