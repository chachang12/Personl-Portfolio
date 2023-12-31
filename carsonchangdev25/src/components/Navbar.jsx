import { useState } from "react"

import {close, logo, menu, WebsiteLogo} from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-[60%] flex flex-row justify-center py-6 px-10 items-center bg-[#254125] rounded-[10px]">
      <img src={WebsiteLogo} alt="hoobank"
      className="w-[150px] h-[33px]"/>

      <ul
        className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white `}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
            <img src={toggle ? close : menu}
            alt ="menu"
            className="w-[28px] h-[28-px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
            />
            <div
            className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul
                className="list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                    <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white `}
                    >
                      <a href={`#${nav.id}`}>
                        {nav.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
      </div>

    </nav>
  )
}

export default Navbar