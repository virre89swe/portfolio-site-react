import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li className="hiddenMobileLine"><div></div></li>
                    <li className="box box1"><NavLink to="/about" activeClassName="nav-active" exact={true}>About</NavLink></li>
                    <li className="box box2"><NavLink to="/projects" activeClassName="nav-active" exact={true}>Projects</NavLink></li>
                    <li className="box box3"><NavLink to="/contact" activeClassName="nav-active" exact={true}>Contact</NavLink></li>                    
                </ul>
                <div className="borderDivider"></div>
            </nav>
        );
    }
}


