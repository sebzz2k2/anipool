// animecard component

import React from "react";

function Animecard({ value }) {
  return (
    <div className="my-2 px-5">
      <h3 className=" mt-2 font-bold text-green-500 text-sm">{value.type}</h3>
      <div className="w-24 ">
        <img className="" src={value.image_url} alt="Thumbnail" />
        <h5 className="text-center mt-2 font-bold text-green-500 text-sm">
          {value.title}
        </h5>
      </div>
    </div>
  );
}

export default Animecard;
