//Libraries
import React, { Component } from 'react';

//Create component
export default class Navegation extends Component {
    render() {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a className="text-white">
                    Tasks
                    <span className="badge badge-pill badge-light ml-2">
                        {this.props.length}
                    </span>   
                </a>
            </nav>
        );
    }
}

