import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Landing from "./pages/landing"

const App = () => {
  return (
      <div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
  )
}
export default App