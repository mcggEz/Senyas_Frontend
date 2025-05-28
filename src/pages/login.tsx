import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div>
       <h1>Welcome to the login page</h1>
       <input type="text" placeholder="Enter your email" />
       <input type="password" placeholder="Enter your password" />
       <Link 
  to="/dashboard" 
  className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded"
>
  Login
</Link>
<Link 
  to="/dashboard" 
  className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  rounded"
>
  Join Anonymously
</Link>
    </div>
  )
}

export default Login