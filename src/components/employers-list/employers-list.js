import './employers-list.css'
import EmployersListItem from "../employers-list-item/employers-list-item"

export const EmployersList = ({data, onDelete}) => {

    const elements = data.map(item => {
        return (
            <EmployersListItem 
            key={item.id} 
            name={item.name} 
            salary={item.salary}
            increase={item.increase}
            onDelete={() => onDelete(item.id)
            }/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

/*
export const EmployersList = ({ data }) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => (
                <EmployersListItem 
                    key={item.id} 
                    {...item} 
                />
            ))}
        </ul>
    )
}

*/