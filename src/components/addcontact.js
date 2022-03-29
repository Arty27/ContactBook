import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/addContactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

const AddContact = () => {
    let history=useHistory()
    const dispatch=useDispatch()
    const [name, setName]=useState("")
    const [phone, setPhone]=useState("")
    const [email, setEmail]=useState("")

    const createContact=(e)=>{
        e.preventDefault()
        const newContact={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContact(newContact))
        history.push("/")
    }
    return (
        <div className="card border-0 shadow mx-4">
            <div className="card-header">Add A Contact</div>
            <div className="card-body">
                <form onSubmit={e=>createContact(e)}>
                    <div className="form-group m-2">
                        <input type="text" placeholder="Enter Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group m-2">
                        <input type="text" placeholder="Enter Phone Number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="form-group m-2">
                        <input type="email" placeholder="Enter Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <button className="btn btn-success m-2"> Create Contact</button>
                </form>
            </div>
        </div>
    )
}

export default AddContact;
