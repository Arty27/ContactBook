import React from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import AddContact from './addcontact';
import Contacts from './contacts';
import { useDispatch } from 'react-redux';
import { editLocation } from '../actions/addContactAction';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const dispatch=useDispatch()
    const id=useSelector(state=>state.contact.locationID)
    const setLocation=(e)=>{
        dispatch(editLocation(e.target.value))
      }
    return (
        <div className="Navbar">
            <Router>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary"> 
            <div className="container">
                <NavLink className="navbar-brand" to="/">Contact Book</NavLink>
                <div>
                    <NavLink className="btn btn-light ml-auto" to="/addcontact">Create Contact</NavLink>
                </div>
                <div className="my-2 my-lg-0 mr-2 text-white">
                      {id}
                      <label for="location" >Location : &nbsp; </label>
                        <select name="location" id="master-location" className="mr-3"  onChange={e=>setLocation(e)}>
                            <option value="2">BIV</option>
                            <option value=" 3">MX</option>
                            <option value="4">WHQ</option>
                        </select>
            
          </div>
            </div>
            </nav>
            <Switch>
                <Route path="/addcontact">
                    <AddContact/>
                </Route>
                <Route path="/">
                    <Contacts/>
                </Route>
            </Switch>
            </Router>
        
        </div>
    )
}

export default Navbar;
