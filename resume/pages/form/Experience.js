import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useState ,useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { setExperience } from "@/redux/resumeSlice";


export default function Experience(){

  const router = useRouter();


const dispatch = useDispatch();
const experience = useSelector((state)=> state.resume.experience);
const [formData , setFormData] = useState({
position:"",
company:"",
duration:"",
description:"",
});


useEffect(()=>{

if(experience)  setFormData(experience);

},[experience]);


function handleChange(e){

  const{name ,value} = e.target;
  
  setFormData((prev)=>({...prev,[name]:value}));

}



function Back(){
   router.push("/Resume?tab=personal");
}

function Next(){
    dispatch(setExperience(formData));
     router.push("/Resume?tab=education");
}
  return(
    <>

<div className="relative group" >
  <div className="flex justify-center items-center ">
<div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px] pl-10 pr-10 ">
<h5 className=" text-md ">Experience</h5>


  <div className="grid grid-cols-2 gap-4 text-center " >


<input
name="position"
 placeholder="Position"
 type="text"
 className=" h-1 border-1 rounded-full p-5" 
 value={formData.position}
 onChange={handleChange}
/>

<input
name="company"
 placeholder="Company"
 type="text"
 className="h-1 border-1 rounded-full p-5" 
  value={formData.company}
 onChange={handleChange}
/>



<input
name="duration"
 placeholder="Duration"
 type="duration"
 className="h-1 border-1 rounded-full p-5" 
  value={formData.duration}
 onChange={handleChange}
/>


</div>

<input
name="description"
 placeholder="Description"
 type="text"
 className="h-20 mt-5 w-full border-1 rounded-2xl p-5" 
  value={formData.description}
 onChange={handleChange}
/>

<div className="flex gap-5 justify-center pt-10">
  <Button variant="outlined" onClick={Back}>Back</Button>
<Button variant="contained" onClick={Next}>Next</Button>
</div>


<br/>
</div>
</div>


</div>


    </>
  )
}