import React from 'react';
import { CiSettings } from 'react-icons/ci';

function Settigns() {
  return (
    <button type="button" className="py-1 px-5 rounded-xl cursor-pointer  bg-gray-200 flex items-center gap-2 hover:bg-gray-300 max-w-[230px] my-4">
      <CiSettings />
      Preference
    </button>
  );
}

export default Settigns;
