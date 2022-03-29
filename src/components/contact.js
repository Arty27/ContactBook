import React from 'react'
import Avatar from 'react-avatar';
const Contact = ({contact}) => {
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input"/>
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td><Avatar name={contact.name} size="45" round={true} className="avatar mr-2"/>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
            <td className="actions">
                <a href="!#" className="mr-2"><span className="material-icons">edit</span></a>
                <a href="!#"><span className="material-icons text-danger">remove_circle</span></a>
            </td>
        </tr>
    )
}
export default Contact;