import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux";
import { setEducation } from "@/redux/resumeSlice";
import { useState, useEffect } from "react";

export default function Education(){

  const router = useRouter();

const dispatch = useDispatch();
const education = useSelector((state)=> state.resume.education);

const [formData, setFormData] = useState({
  degree:"",
  institution:"",
  year:"",
});


useEffect(()=>{

if(education)  setFormData(education);

},[education])

function handleChange(e){

  const{name ,value} = e.target;

setFormData((prev)=>({...prev , [name]:value}))


}


  function Back(){
   router.push("/Resume?tab=experience");
  }

  function Next(){
    dispatch(setEducation(formData));
       router.push("/Resume?tab=skills");
  }
  return(
    <>

<div className="relative group" >
  <div className="flex justify-center items-center ">
<div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px] pl-10 pr-10 ">
<h5 className=" text-md ">Education</h5>

<form>
  <div className="grid grid-cols-2 gap-4 text-center " >


<input
name="degree"
 placeholder="Degree "
 type="text"
 className=" h-1 border-1 rounded-full p-5" 
value={formData.degree}
onChange={handleChange}
/>

<input
name="institution"
 placeholder="Institution "
 type="text"
 className="h-1 border-1 rounded-full p-5" 
 value={formData.institution}
onChange={handleChange}
/>



<input
name="year"
 placeholder="Year"
 type="date"
 className="h-1 border-1 rounded-full p-5" 
 value={formData.year}
onChange={handleChange}
/>


</div>


<div className="flex gap-5 justify-center pt-10">
  <Button variant="outlined" onClick={Back}>Back</Button>
<Button variant="contained" onClick={Next}>Next</Button>
</div>
</form>

<br/>
</div>
</div>


</div>


    </>
  )
}