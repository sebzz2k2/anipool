// navbar component

import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className=" bg-green-500 flex justify-between items-center px-10 py-2">
        <p className="font-semibold text-gray-200 text-2xl">Anipool</p>

        {/* search for item-searchQuery on form submit */}
        <form action="" onSubmit={props.handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 px-2 rounded-lg py-px text-gray-800"
            value={props.searchQuery} //sets value of searchQuery
            //changes the searchQuery onChange
            onChange={(e) => {
              props.setSearchQuery(e.target.value);
            }}
          />
        </form>
      </nav>
    </>
  );
};

export default Navbar;
