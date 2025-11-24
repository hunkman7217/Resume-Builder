import Link from "next/link";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close";

/**
 * HomePage Component
 * -------------------
 * This component renders the top navigation bar used across the website.
 * It includes:
 *  - Logo
 *  - Desktop navigation menu (visible on medium+ screens)
 *  - Mobile hamburger menu (visible on small screens)
 *  - Responsive behavior using Tailwind CSS
 */

export default function HomePage() {

  // State to toggle mobile navigation menu visibility
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar Wrapper */}
      <navbar>
        <div className="flex list-none justify-between shadow-md">

          {/* Website Logo */}
          <img src={"logo.png"} className="w-20 ml-10" />

          {/* Hamburger Icon (only visible on mobile) */}
          <div
            className="md:hidden cursor-pointer mt-5"
            onClick={() => setOpen(!open)}
          >
            {/* Toggle between menu and close icons */}
            {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </div>

          {/* Desktop Menu (hidden on small screens) */}
          <div className="hidden md:flex justify-between items-center gap-10 mr-5">
            <li className="hover:text-blue-600">
              <Link href="/">Resume Template</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/myResume">My Resume</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link href="/About">About Us</Link>
            </li>
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <div className="md:hidden flex flex-col items-center gap-3 pb-3">
              {/* Each click closes the mobile menu */}
              <li className="hover:text-blue-600">
                <Link href="/" onClick={() => setOpen(false)}>
                  Resume Template
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/myResume" onClick={() => setOpen(false)}>
                  My Resume
                </Link>
              </li>
              <li className="hover:text-blue-600">
                <Link href="/About" onClick={() => setOpen(false)}>
                  About Us
                </Link>
              </li>
            </div>
          )}
        </div>
      </navbar>
    </>
  );
}
