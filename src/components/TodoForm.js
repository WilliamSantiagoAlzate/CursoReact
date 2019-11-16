//Libraries
import React, { Component } from 'react';
//Logo
import logo from '../logo.svg';

//Create component
export default class TodoForms extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState( {
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return(
            <div className="col-md-3">
                <img src={logo} width="70%" alt="logo" />
                <div className="card">
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="title"
                                onChange={this.handleInput} 
                                placeholder="Title" 
                                className="form-control"
                            />    
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="responsible"
                                onChange={this.handleInput}
                                placeholder="Responsible" 
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="description"
                                onChange={this.handleInput}
                                placeholder="Description" 
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <select name="priority" className="form-control" onChange={this.handleInput}>
                                <option>low</option>
                                <option>medium</option>
                                <option>high</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        )
        
    }
}