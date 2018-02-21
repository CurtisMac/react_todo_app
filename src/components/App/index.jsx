import React, { Component } from 'react';
import '../globalStyles.css'
import TodoList from '../TodoList/todoList';
import AddTask from '../TodoList/Add/add';
import DeleteTasks from '../TodoList/Delete/delete';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  addTask = (newTask) => {
    let updatedTasks = this.state.tasks
    updatedTasks.push({
      text: newTask,
      complete: false
    })
    this.setState({
      tasks: updatedTasks
    })
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  complete = (id) => {
    let updatedTasks = this.state.tasks
    updatedTasks[id].complete = !updatedTasks[id].complete
    this.setState({
      tasks: updatedTasks
    })
  }

  deleteTasks = (updatedTasks) => {
    this.setState({
      tasks: updatedTasks
    })
  }

  componentWillMount(){
    let tasks = JSON.parse(localStorage.tasks)
    this.setState({
      tasks
    })
    console.log(tasks)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Time to <em>DO</em> some things!</h1>
        </header>
        <TodoList tasks={this.state.tasks} complete={this.complete} />
        <AddTask addTask={this.addTask} />
        <DeleteTasks deleteTasks={this.deleteTasks} tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
