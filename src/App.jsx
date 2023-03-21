import { useState , useEffect} from 'react'

import RouteAssignments from './RouteAssignments'
import TeamMembers from './TeamMembers'

import './App.css'

function App() {

  const[members, setMembers] = useState([])


  return (
    <div className="App">
        <TeamMembers setMembers={setMembers} members={members}/>
        <RouteAssignments members={members}/>
    </div>
  )
}

export default App
