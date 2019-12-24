import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class TopMenu extends Component{
    render(){
        return(
            <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo right">Welcome to Katzion</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/employees">Employees</Link></li>
            </ul>
            </div>
        </nav>
        )
    }
}
export default TopMenu;