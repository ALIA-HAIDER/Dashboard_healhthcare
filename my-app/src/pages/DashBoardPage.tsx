import { DashNavbar } from "../components/DashNavbar"
import DataSubmission from "../components/DataSubmission"
import NavBar from "../components/NavBar"


function DashBoardPage() {
  return (
    <div className="flex">
      {/* <NavBar/> */}
      <DashNavbar/>
      <DataSubmission/>
      
    </div>
  )
}

export default DashBoardPage
