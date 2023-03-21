import React, {useState, useEffect} from 'react'

const TeamMembers = (props) => {

    const [tableRows, setTableRows] = useState([])

    useEffect(()=>{
        let rows = []
        let newMembers = []
        for(let i= 1; i <= 10; i++){
            rows.push(i)
            newMembers.push(undefined)
        }
        setTableRows(rows)
        props.setMembers(newMembers)
    }, [])

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
                { tableRows.map( (value, idx) => <TableRow members={props.members} setMembers={props.setMembers} key={idx} idx={idx} num={value}/>) }
            </tbody>
        </table>
    </div>
  )
}

const TableRow = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [time, setTime] = useState('')

    useEffect(()=>{
        let newMembers = props.members
        newMembers[props.idx] = (firstName || "") + " " + (lastName || "")
        props.setMembers(newMembers)
    }, [firstName, lastName, time])

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