//Libraries
import React, { Component } from 'react';
//Styles
import './App.css';
//Components
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import TodoForm from "./components/TodoForm";
//Data
import { todos } from "./Data/todos.json";

//Create component
class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  removeTodo(index) {
    if (window.confirm("Are you sure you want to delete it?")) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !==index
        })
      });
    }
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <Card 
          title={todo.title} 
          description={todo.description} 
          priority={todo.priority}
          responsible={todo.responsible}
          removeTodo={this.removeTodo.bind(this,i)}
          key={i}
        />
      )
    })

    return (
      <div className="App">
        <Navigation length={this.state.todos.length}/>
        <div className="container">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo}/>
            <div className="col-md-9">
              <div className="row mt-4">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
