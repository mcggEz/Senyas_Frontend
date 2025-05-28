import Navbar from "../components/navbar"


const Landing = () => {
  return (
    <>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to the landing page</h1>
            <p className="text-lg">This is the landing page</p>
        </div>
    </>

  )
}

export default Landing