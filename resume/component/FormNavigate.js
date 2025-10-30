import Personal from "../pages/form/Personal";
import Education from "../pages/form/Education";
import Experience from "../pages/form/Experience";
import Skills from "../pages/form/Skills";
import { useRouter } from "next/router";




export default function FormNavigate(){

  const router = useRouter(); 
  const {tab} = router.query;


function handleTab(section){

  router.push(`/Resume?tab=${section}`, undefined ,{shallow:true});
}




return(<>
<div className="flex flex-col  md:flex-row gap-30 mt-20 ">

<div className="  w-80 ml-7 sm:ml-20 justify-center rounded-lg"
>
 <div className="flex  flex-row sm:flex-col jusftiy-center text-center  ">

<p className=" border-b-2 border-b-gray-100 p-2  text-gray-400 hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all
" onClick={()=> handleTab("personal")} >Personal Information</p>
<p className=" border-b-2 border-b-gray-100 p-2 text-gray-400 hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all
" onClick={()=> handleTab("experience")}>Work Experience</p>
<p className=" border-b-2 border-b-gray-100 p-2 text-gray-400 hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all
" onClick={()=> handleTab("education")}> Education</p>
<p className=" border-b-2 border-b-gray-100 p-2 text-gray-400 hover:border-l-5 hover:text-blue-500 cursor-pointer transition-all
" onClick={()=> handleTab("skills")}>Skills</p>

</div>
</div>
<div className="items-center justify-center">
{tab === "education" ? (<Education/>)
: tab=== "experience" ? (<Experience/>)
: tab === "skills" ? (<Skills/>)
:  (
<Personal/>
)}
</div>
</div>

</>);


}
