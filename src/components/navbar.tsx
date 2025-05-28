import { Link } from "react-router-dom"

const Navbar = () => {
  return (
        <>
            <div className="flex justify-between items-center p-4 bg-gray-100">
            <Link to="/">Senyas</Link>
                <div className="flex gap-4">
                 
                    <Link to="/login">Login</Link>
                  
                </div>
            </div>
        </>
  )
}

export default Navbar