import Link from "next/link";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";


export default function HomePage(){

const [open , setOpen] = useState(false);


  return(<>
 
    <navbar>
  <div className="flex list-none justify-between shadow-md  ">
    <img  src={"logo.png"} className="w-20 ml-10 "/>
  
  {/* Hamburger icon - visible only on small screens */}
          <div className="md:hidden cursor-pointer mt-5" onClick={() => setOpen(!open)}>
            {open ? <CloseIcon  fontSize="large"/> : <MenuIcon fontSize="large"/>}
          </div>


  <div className="hidden md:flex justify-between items-center gap-10 mr-5 "  >
     <li className="hover:text-blue-600"><Link  href="/" >Resume Template </Link></li>
      <li className="hover:text-blue-600"><Link href="/myResume" >My Resume </Link></li>
       <li className="hover:text-blue-600"><Link href="/About">About Us</Link></li>
       </div>

  {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col items-center gap-3 pb-3">
            <li  className="hover:text-blue-600"><Link href="/" onClick={() => setOpen(false)}>Resume Template</Link></li>
            <li  className="hover:text-blue-600"><Link href="/myResume" onClick={() => setOpen(false)}>My Resume</Link></li>
            <li  className="hover:text-blue-600"><Link href="/About" onClick={() => setOpen(false)}>About Us</Link></li>
          </div>
        )}




  </div>
  </navbar>
  







   </>);
}