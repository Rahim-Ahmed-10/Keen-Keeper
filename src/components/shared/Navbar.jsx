import React from 'react';
import { NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoTimerOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";


const Navbar = () => {

  const links = <>
    <li><NavLink to={"/"} className={({ isActive }) => `${isActive ? "bg-green-900 text-white" : ""}`} ><IoHomeOutline />Home</NavLink></li>

    <li><NavLink to={"/Timeline"} className={({ isActive }) => `${isActive ? "bg-green-900 text-white" : ""}`} ><IoTimerOutline />Timeline</NavLink></li>

    <li><NavLink to={"/StatsPage"} className={({ isActive }) => `${isActive ? "bg-green-900 text-white" : ""}`}><TfiStatsUp />Stats</NavLink></li>
  </>
    return (
        <div className="max-lg:collapse bg-base-50 lg: shadow-sm w-full rounded-md">
  <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
  <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
  <div className="collapse-title navbar">
    <div className="navbar-start">
      <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <button className="btn btn-ghost text-xl">KeenKeeper</button>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1 gap-1">
        {links}
      </ul>
    </div>
    
  </div>

  <div className="collapse-content lg:hidden z-1">
    <ul className="menu">
      {links}
    </ul>
  </div>
</div>
    );
};

export default Navbar;