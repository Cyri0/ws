import React, {useState, useEffect, useContext} from 'react'
import { MembersContext } from './App.jsx'

const TeamMembers = (props) => {
    const [tableRows, setTableRows] = useState([1,2,3,4,5,6,7,8,9,10])

    return (
    <div>
        <h1>TeamMembers</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>LastName</th>
                    <th>Speed</th>
                    <th>Total Distance</th>
                </tr>
            </thead>
            <tbody>
                { tableRows.map( (value, idx) => <TableRow setMembers={props.setMembers} key={idx} idx={idx} num={value}/>) }
            </tbody>
        </table>
    </div>
  )
}

const TableRow = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [time, setTime] = useState('')
    
    const [members, setMembers] = useContext(MembersContext)

    useEffect(()=>{
        let newMembers = members.map( value => value )
        newMembers[props.idx] = (firstName || "") + " " + (lastName || "")
        setMembers(newMembers)
    }, [firstName, lastName, time])

    useEffect(()=>{
    }, [members])

    return (
        <tr>
            <td>{props.num}</td>
            <td>
                <input value={firstName} onChange={(e)=>{
                    setFirstName(e.target.value)
                }} type="text"/>
            </td>
            <td>
                <input value={lastName} onChange={(e)=>{
                    setLastName(e.target.value)}} type="text"/>
            </td>
            <td>
                <input value={time} onChange={(e)=>{
                    setTime(e.target.value)}} type="time"/>
            </td>
            <td>
                {
                    //TODO
                }
            </td>
        </tr>
    )
}

export default TeamMembers