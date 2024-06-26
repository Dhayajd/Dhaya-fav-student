import { BrowserRouter, Route, Routes } from "react-router-dom"
import StudentList from "./components/StudentList"
import FavouriteStudent from "./components/FavouriteStudent"
import { Link } from "react-router-dom"
import { useState } from "react"



const App=()=>{
    const studentnames=[
        {
            id:1,
            name:"dhaya"
        },
        {
            id:2,
            name:"Arun"
        },
        {
            id:3,
            name:"Gokul"
        },{id:4,
            name:"Dhanush"
        },{
            id:5,
            name:"Dinesh"
        }
    ]
    const [favname,setfavname]=useState([])
   
    
    return(<>
    <BrowserRouter >
    <div className='bg-[#5F4A8B] p-4 text-center text-[#E69A8D] font-bold text-xl'>
    <Link to={'/'}  className="text-[#5F4A8B] p-5 bg-[#E69A8D] hover:underline"  >List of Students</Link>

    <Link to={'/favouritestudent'} style={{margin:"30px"}}  className=" bg-[#e1ed5c] text-[#5F4A8B] p-5 hover:underline"> Favourite Student</Link>
    </div>
    <Routes>
        <Route path='/' className='text-white' element={<StudentList studentnames={studentnames} favname={favname} setfavname={setfavname} />}></Route>
        <Route path="/favouritestudent" element={<FavouriteStudent favname={favname}  setfavname={setfavname}/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>)
}
export default App