import React from "react";

const Header = () => {
  return (
    <div className="">
      <header className="p-7">
        <h1 className="flex justify-center font-bold text-4xl text-green-600 ">
          Anipool
        </h1>
        <h3 className="flex justify-center font-bold text-gray-200 pt-3 text-2xl ">
          Powered by&nbsp;
          {/* &nbsp; used to give white space */}
          <a
            className="underline text-green-600"
            href="https://jikan.docs.apiary.io/"
          >
            jinken
          </a>
          &nbsp;API
        </h3>
      </header>
    </div>
  );
};

export default Header;
