import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux";
import { setSkills } from "@/redux/resumeSlice";
import { useState ,useEffect } from "react";


export default function Skills(){

const router = useRouter();

const dispatch = useDispatch();
const skills = useSelector((state)=>state.resume.skills);

const[formData , setFormData]= useState({
  skills:"",
});


useEffect(()=>{

if(skills) setFormData(skills)
},[skills]);


function handleChange(e){
  const {name , value} = e.target;
  setFormData((prev)=> ({...prev , [name]: value}));


}



function Back(){
   router.push("/Resume?tab=education");
}


function Next(){
    dispatch(setSkills(formData));
     router.push("/Preview");
}
  return(
    <>

<div className="relative group" >
  <div className="flex justify-center items-center ">
<div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px] pl-10 pr-10 ">
<h5 className=" text-md ">SKills</h5>


  <div className=" text-center " >


<input
name="skills"
 placeholder=" Enter Skills Here..."
 type="text"
 className=" h-20 border-1 rounded-md w-[400px] pl-3" 
required

value={formData.skills}
onChange={handleChange}
/>
</div>

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