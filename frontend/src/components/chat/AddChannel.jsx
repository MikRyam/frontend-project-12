import React from 'react';
import {BsPlusSquare} from "react-icons/bs";

const AddChannel = () => {
  return (
    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4 ">
      Каналы
      <button type="button" className="p-0 text-primary btn btn-group-vertical">
        <BsPlusSquare size="1.4rem"/>
      </button>
    </div>
  );
};

export default AddChannel;
