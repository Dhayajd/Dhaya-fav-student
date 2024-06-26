import { useState,useEffect } from "react"





const StudentList=(props)=>{
  const studentnames=props.studentnames
  const setfavname=props.setfavname
  const favname=props.favname
  const [disablebutton,setdisablebutton]=useState({})


  useEffect(() => {
    const newDisabledButtons = {};
    favname.forEach(item => {
      newDisabledButtons[item.id] = true;
    });
    setdisablebutton(newDisabledButtons);
  }, [favname]);
  const favourite=(itemid,itemname)=>{
    console.log(itemid,itemname)

    setfavname([...favname,{id:itemid,name:itemname}])
    


  }
    return(<>
    
    <div className="bg-[#E69A8D] h-screen">
        
    {
        studentnames.map(function(item,index){
            return <p className='text-[#5F4A8B] font-semibold text-xl text-center pt-10' key={index}>{item.id}.{item.name}
            <button className='bg-[#5F4A8B] text-[#E69A8D] p-2 ml-20  rounded-md' onClick={()=>favourite(item.id,item.name)}disabled={disablebutton[item.id]} >
            {disablebutton[item.id] ? <p className="bg-[#9783c4] text-[#fdbfb5] p-2 -m-3 rounded-md" >Added to favourite</p>:" Add to favourite"}</button></p>
        })
    }
    
    

    </div>
    </>)
}
export default StudentList