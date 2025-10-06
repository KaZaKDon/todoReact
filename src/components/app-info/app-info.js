import './app-info.css'


export const AppInfo = ({maxEmployees, maxIncrease}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {maxEmployees} </h2>
            <h2>Премию получат:  {maxIncrease}</h2>
        </div>
    )
}