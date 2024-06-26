import { useState,useEffect } from "react"

const FavouriteStudent=(props)=>{
    const favname=props.favname
    const setfavname=props.setfavname
    const [flag, setFlag] = useState(favname.length === 0);

    useEffect(() => {
      setFlag(favname.length === 0);
    }, [favname]);
    const deletefav=(item)=>{
        const tempp=favname.filter(function(itemid){
            console.log("hi",item,itemid.id)
            if(item===itemid.id){
                return false
            }else{
                return true
            }
          
        })
        setfavname(tempp) 

    }
    return(<>
    <div className="bg-[#e1ed5c] h-screen">
    
        { flag? <p className="text-black text-center font-bold text-2xl p-5">No favourite student</p>:<div>{
        favname.map(function(item,index){
            return <p className='text-center font-semibold text-xl pt-10' key={item.id}>
            {index+1}.{item.name}
            <button className="bg-red-500 p-2 ml-10 rounded-md" onClick={()=>{deletefav(item.id)}}>Delete</button></p>
        })
    }</div>}
    
    </div>
    </>)
}
export default FavouriteStudent