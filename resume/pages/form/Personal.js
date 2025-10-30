import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPersonal } from "@/redux/resumeSlice";





export default function Personal(){

const router =useRouter();
const dispatch = useDispatch();
const personal = useSelector((state)=>state.resume.personal);

const [formData, setFormData] = useState({

    name: "",
    phone: "",
    email: "",
    birth: "",
    summary: "",
});


useEffect(()=>{

  if(personal) setFormData(personal);

},[personal])

function handleChange(e){

  const{name , value} = e.target;

  setFormData((prev)=>({...prev, [name]:value}));
 

}



  function Next(){
     dispatch(setPersonal(formData));
    router.push("/Resume?tab=experience");
  }



  return(
    <>

<div className="relative group" >
  <div className="flex justify-center items-center ">
<div className="flex flex-col justify-center items-center gap-5 shadow-lg w-[628px]  pl-10 pr-10 ">
<h5 className=" text-md ">Personal Information </h5>

<form>
  <div className="grid grid-cols-2 gap-4 text-center " >


<input
name="name"
 placeholder="Name "
 type="text"
 className=" h-1 border-1 rounded-full p-5" 
 value={formData.name}
 onChange={handleChange}
/>

<input
name="phone"
 placeholder="Mobile Number "
 type="text"
 className="h-1 border-1 rounded-full p-5" 
 value={formData.phone}
 onChange={handleChange}
/>

<input
name="email"
 placeholder="Email"
 type="text"
 className="h-1 border-1 rounded-full p-5" 
  value={formData.email}
 onChange={handleChange}
/>

<input
name="birth"
 placeholder="DOB"
 type="date"
 className="h-1 border-1 rounded-full p-5" 
  value={formData.birth}
 onChange={handleChange}
/>


</div>



<input
name="summary"
 placeholder="Summary"
 type="text"
 className="h-20 mt-5 w-full border-1 rounded-2xl p-5" 
 required
  value={formData.summary}
 onChange={handleChange}
/>

<div className="flex gap-5 justify-center pt-10">
  
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