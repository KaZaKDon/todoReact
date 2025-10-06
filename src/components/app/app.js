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
                { id: 1, name: 'John C.', salary: 800, increase: false, rise: true },
                { id: 2, name: 'Alex M.', salary: 3000, increase: true, rise: false },
                { id: 3, name: 'Carl W.', salary: 5000, increase: false, rise: false }
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
                increase: false,
                rise: false
            };

            return { data: [...data, newItem] };
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            //2
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const { data } = this.state;

    const maxEmployees = data.length;
    const maxIncrease = data.filter(item => item.increase).length;

        return (
        <div className="app">
            <AppInfo maxEmployees={maxEmployees} maxIncrease={maxIncrease}/>

            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
            />

            <EmployersAddForm onAdd={this.addItem}/>
        </div>
    )
    }
}

export default App;

/*1 вариант deleteItem
const index = data.findIndex(elem => elem.id === id)
const before = data.slice(0, index);
const after = data.slice(index+1);

const newArr = [...before, ...after];

return {
data: newArr
}


2вариант const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            //2
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            //2
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }
*/