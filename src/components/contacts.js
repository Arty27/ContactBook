import React, {  useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Contact from './contact';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Contacts = () => {
    const MySwal = withReactContent(Swal)
    const contacts=useSelector(state=>state.contact.contacts)
    let id=useSelector(state=>state.contact.location)
    const [num,setNum]=useState(0)
    React.useEffect=(() => {
       setNum(id)
    }, [id])
    const [odt,setoDt]=useState(moment())
    const [ddt, setdDt]=useState(moment())
    const yesterday=moment(odt).subtract(1,'day')
    const disablePastDt = current => {
        return current.isSameOrAfter(yesterday);
    };
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(odt.toDate())
        console.log(ddt.toISOString())
    }
    const getODate=(e)=>{
        setoDt(e)
        disablePastDt(odt)
    }
    const getDDate=(e)=>{
        setdDt(e)
    }
    const increaseDate=(d)=>{
        var prevDay = new Date(d.substring(0,4),d.substring(5,7),d.substring(8,10));
        var nextDay = new Date(+prevDay);
        var dateValue = nextDay.getDate() + 2;
        nextDay.setDate(dateValue);
        nextDay.setMonth(nextDay.getMonth()-1)
        return nextDay.toISOString().substring(0,10)
      }
      MySwal.fire({
        title: <p>Hello World</p>,
        footer: 'Copyright 2018',
        didOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire(<p>Shorthand works too</p>)
      })
    return (
        <div className="container py-3" >
             {/* <Datetime className="form-control" open={false} isValidDate={disablePastDt} /> */}
            <form onSubmit={e=>onSubmit(e)}>
            <DatePicker
                className="mb-2"
                value={odt}
                name="orderDate"
                timeFormat={false}
                onChange={e=>getODate(e)}
            />
             <DatePicker
                timeFormat={false}
                value={ddt}
                className="mb-2"
                isValidDate={disablePastDt}
                onChange={e=>getDDate(e)}
            />
            </form>
            <button type="button" className="btn btn-primary" onClick={alert("hello")}>Submit</button>
            { <table className="table shadow">
            <thead className="bg-danger text-white">
                <tr>
                <th>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"/>
                        <label className="custom-control-label"></label>
                    </div>
                </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    contacts.map(item=>(
                        <Contact contact={item} key={item.id}/>
                    ))
                }
            </tbody>
            </table>
            }

        </div>
    )
}

export default Contacts;
