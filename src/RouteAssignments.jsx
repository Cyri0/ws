import React, {useState, useEffect} from 'react'

const RouteAssignments = (props) => {
    const [apiResponse, setApiResponse] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8000/data.json")
        .then(res => res.json())
        .then(data => {
            setApiResponse(data)
        })
    },[])

  return (
    <div>
        <h1>RouteAssignments</h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Distance</th>
                    <th>Starting Point</th>
                    <th>Arriving Point</th>
                    <th>Name</th>
                    <th>Runner</th>
                    <th>Speed</th>
                    <th>Time</th>
                    <th>Time in Total</th>
                </tr>
            </thead>
            <tbody>
                {apiResponse.map((value, idx) => <TableRow key={idx} members={props.members} rowData={value}/> )}
            </tbody>
        </table>
    </div>
  )
}

const TableRow = (props) => {
    let {id, distance, startingLocation, arrivalLocation, locationName} = props.rowData

    const [members, setMembers] = useState([])

    useEffect(()=>{
        // let newMembers = props.members.map( value =>{ return value })
        // setMembers(newMembers)
        console.log("members:", new Date())
    }, [props.members])

    return (
        <tr>
            <td>{id}</td>
            <td>{distance}</td>
            <td>{startingLocation}</td>
            <td>{arrivalLocation}</td>
            <td>{locationName}</td>
            <td>
                <select>
                    {members.map((value, idx) => <option key={idx}>{value}</option>) }
                </select>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}

export default RouteAssignments