import './employers-list.css'
import { EmployersListItem } from "../employers-list-item/employers-list-item"

export const EmployersList = () => {
    return (
        <ul className="app-list list-group">
            <EmployersListItem/>
            <EmployersListItem/>
            <EmployersListItem/>
        </ul>
    )
}