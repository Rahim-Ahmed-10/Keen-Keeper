import React from 'react';
import { FaPlus } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="hero bg-base-200 p-8 container mx-auto">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-4xl font-bold ">Friends to keep close in your life</h1>
      <p className="py-6 text-gray-500">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
        relationships that matter most.
      </p>
      <button className="btn bg-green-900 text-white"><FaPlus /> Add a Friend</button>
    </div>
  </div>
</div>
    );
};

export default Banner;