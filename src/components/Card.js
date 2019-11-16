//Libraries
import React, { Component } from 'react';

//Create component
export default class Card extends Component {
    render() {
        return(
            <div className="col-md-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>{this.props.title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                            {this.props.priority}
                        </span>
                    </div>
                    <div className="card-body">
                        <p>{this.props.description}</p>
                        <p><mark>{this.props.responsible}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={this.props.removeTodo}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}