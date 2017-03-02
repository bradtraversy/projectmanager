import React, {
    Component
} from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

const mockTodos = [
    'https://jsonplaceholder.typicode.com/todos',
    {
        'Prama': 'No-Cache',
        'User-Agent': 'Mocker'
    }
];

class App extends Component {

    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }

    getTodos() {

        // ditch jQuery, use window fetch API

        let setTodos = todos => {
            this.setState({
                todos: todos
            });
        };

        window.fetch(...mockTodos)
            .then(res => res.json())
            .then(setTodos)
            .catch(err => console.error(err));

    }

    getProjects() {

        this.setState({
            projects: [{
                    id: uuid.v4(),
                    title: 'Business Website',
                    category: 'Web Deisgn'
                },
                {
                    id: uuid.v4(),
                    title: 'Social App',
                    category: 'Mobile Development'
                },
                {
                    id: uuid.v4(),
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        });
    }

    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    componentDidMount() {
        // this.getTodos(); Duplicate HTTP request
    }

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({
            projects: projects
        });
    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({
            projects: projects
        });
    }

    render() {
        return ( 
            <div className="App" >
                <AddProject addProject = {this.handleAddProject.bind(this)}/> 
                <Projects projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)}/>
                <hr />
                <Todos todos = {this.state.todos}/> 
            </div>
        );
    }
}

export default App;
