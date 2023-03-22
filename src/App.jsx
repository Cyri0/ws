import { useState , createContext} from 'react'
import RouteAssignments from './RouteAssignments'
import TeamMembers from './TeamMembers'
import './App.css'

export const MembersContext = createContext()

function App() {
  const[members, setMembers] = useState(["","","","","","","","","",""])

  return (
    <MembersContext.Provider value={[members, setMembers]}>
      <div className="App">
          <TeamMembers/>
          <RouteAssignments/>
      </div>
    </MembersContext.Provider>
  )
}

export default App
