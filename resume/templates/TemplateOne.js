import { useSelector } from "react-redux";



export default function TemplateOne ({data}){

const resume = useSelector((state)=> state.resume)

const isFilled = resume.personal?.name || resume.education?.length > 0;

const finalData = isFilled ?

{
...data,
...resume.personal,
education: resume.education?.length ?resume.education : data.education ,
experience: resume.experience?.length? resume.experience : data.experience  ,
skills: resume.skills?.length? resume.skills : data.skills,

}: data;




  return(
  <div className="shadow-lg p-2 rounded-lg h-[300px] ">
    {/* Name And Role */}
    <div className="border-b-1 border-amber-500 mb-2 ">
  <h1 className="text-sm text-amber-600 text-center mt-1">{finalData.name || data.name}</h1>  

   <p className=" text-[0.4rem] text-center text-gray-500 mb-1">{finalData.experience?.[0]?.position || data.experience?.[0]?.position}</p> 
 
  </div>
  {/* SUMMERY  */}
  <div className="border-b-1 border-amber-500 mt-0.5 mb-2">
  <h3 className="text-[0.4rem] font-bold text-center mb-1">-----Summary-----</h3> 
  <p className="text-[0.3rem] mb-1 ">{finalData.summary || data.summary}</p>

  </div>
{/* CONTACT */}
<div className="border-b-1 border-amber-500 mb-2 ">
  <h3 className="text-[0.4rem] font-bold text-center mb-1">-----Contact-----</h3> 

  <div className="flex gap-3">
  <p className="text-[0.3rem]  ">  <span className="font-bold" >Email - </span>{finalData.email || data.email}</p>
    <p className="text-[0.3rem] mb-1">   <span className="font-bold" >Mobile -</span> {finalData.phone || data.phone}</p>
    <p className="text-[0.3rem] mb-1">   <span className="font-bold" >DOB -</span> {finalData.birth || data.birth}</p>
</div>
  </div>

{/* Education */}

  <div className="border-b-1 border-amber-500 mt-0.5 mb-2">
  <h3 className="text-[0.4rem] font-bold text-center mb-1">-----Education-----</h3> 

  <p className="text-[0.3rem] mb-1">
  <span className="font-bold" >Degree - </span>  {finalData.education?.[0]?.degree || data.education?.[0]?.degree}                                                              <br/>
  <span className="font-bold" >Institution - </span>  {finalData.education?.[0]?.institution || data.education?.[0]?.institution}                                                          <br/>
  <span className="font-bold" >Year - </span> {finalData.education?.[0]?.year || data.education?.[0]?.year}
  </p>

  </div>

{/* Experience */}

  <div className="border-b-1 border-amber-500 mt-0.5 mb-2  ">
  <h3 className="text-[0.4rem] font-bold text-center mb-1 ">-----Experience-----</h3> 

  <p className="text-[0.3rem] mb-1 ">
  <span className="font-bold" >Position - </span>  {finalData.experience?.[0]?.position || data.experience?.[0]?.position}                                                        <br/>
  <span className="font-bold" >Company - </span>  {finalData.experience?.[0]?.company || data.experience?.[0]?.company}                                                          <br/>
  <span className="font-bold" >Duration - </span> {finalData.experience?.[0]?.duration || data.experience?.[0]?.duration}                                                         <br/>
   <span className="font-bold" >Description - </span> {finalData.experience?.[0]?.description || data.experience?.[0]?.description}  
  </p>

  </div>

{/* Skills */}


  <div className="border-b-1 border-amber-500 mt-0.5 mb-2">
  <h3 className="text-[0.4rem] font-bold text-center mb-1">-----Skills-----</h3> 
  <p className="text-[0.3rem] mb-1">  {Array.isArray(finalData.skills)
    ? finalData.skills.join(", ")
    : Array.isArray(data.skills)
    ? data.skills.join(", ")
    : Object.values(finalData.skills || data.skills || {}).flat().join(", ")}</p>

  </div>


{/* finalData.skills.join(",") */}


</div>
 );



}