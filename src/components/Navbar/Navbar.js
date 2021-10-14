import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className=" bg-green-500 flex justify-between items-center p-2">
        <p className="font-semibold text-gray-200 text-xl">Anipool</p>
        <form action="" onSubmit={props.handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 px-2 rounded-lg py-px text-gray-800"
            value={props.searchQuery}
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
