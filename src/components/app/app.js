import { Component } from 'react';
import './app.css';
import { AppInfo } from '../app-info/app-info';
import { SearchPanel } from '../search-panel/search-panel';
import { AppFilter } from '../app-filter/app-filter';
import { EmployersList } from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: 'John C.', salary: 800, increase: false },
                { id: 2, name: 'Alex M.', salary: 3000, increase: true },
                { id: 3, name: 'Carl W.', salary: 5000, increase: false }
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }));
    }

    addItem = (name, salary) => {
        this.setState(({ data }) => {
            const maxId = data.length ? Math.max(...data.map(item => item.id)) + 1 : 1;

            const newItem = {
                id: maxId,
                name,
                salary,
                increase: false
            };

            return { data: [...data, newItem] };
        });
    }

    render() {
        return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
            />

            <EmployersAddForm onAdd={this.addItem}/>
        </div>
    )
    }
}

export default App;

/*1 вариант
const index = data.findIndex(elem => elem.id === id)
const before = data.slice(0, index);
const after = data.slice(index+1);

const newArr = [...before, ...after];

return {
data: newArr
}
*/