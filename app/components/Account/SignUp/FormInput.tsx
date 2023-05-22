import React from "react";

interface props {
  label: string;
  type: string;
  placeholder: string;
}

const FormInput = ({ label, type, placeholder }: props) => {
  return (
    <div className="py-2">
      <label htmlFor=""> {label} </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        className="w-full my-1 border transition-all border-lime-700 p-2 placeholder:text-sm placeholder:text-slate-700/70 font-roboto font-light  focus:outline-none focus:ring-1 focus:ring-lime-700 focus:shadow-xl empty:bg-slate-50 rounded-lg"
      />
    </div>
  );
};

export default FormInput;
