import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard"



const App = () => {
  return (
      <div>
        <Routes>

          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
  )
}
export default App