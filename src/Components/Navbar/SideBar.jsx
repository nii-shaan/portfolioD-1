import React, { useState } from "react";
import { FaBars, FaCircleArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [active, setActive] = useState(false);

  const handleBar = () => {
    setActive((prev) => !prev);
  };

  const barItems = [
    { id: 1, item: "Home", path: "" },
    { id: 2, item: "About", path: "/about" },
    { id: 3, item: "Projects", path: "/projects" },
    { id: 4, item: "Contact", path: "/contact" },
  ];

  const icon = (
    <FaBars
      onClick={handleBar}
      className="absolute left-0 h-[30px] w-[20px] ml-[10px] mt-[10px] text-fuchsia-50 cursor-pointer absolute z-10 "
    />
  );

  const bar = (
    <motion.div
      className="w-[200px] h-[600px] bg-indigo-900  absolute z-10 rounded-lg"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.1 }}
    >
      <FaCircleArrowLeft
        onClick={handleBar}
        className="absolute left-0 h-[32px] w-[22px] ml-[10px] mt-[10px] text-fuchsia-50 cursor-pointer  "
      />

      <ul className=" text-white w-full h-[300px] mt-[80px]  flex flex-col justify-evenly items-center">
        {barItems.map((item) => (
          <li key={item.id} className="cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 text-[20px]" : "text-white"
              }
              to={item.path}
            >
              {item.item}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  const menu = active ? bar : icon;

  return <>{menu}</>;
}

export default SideBar;
