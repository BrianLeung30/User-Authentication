import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { userData } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800 ">
      <h1 className="flex items-center gap-2 text-xl sm:text-3xl">
        Hello {userData ? userData.name : "Guest"}!
      </h1>
    </div>
  );
};

export default Header;
