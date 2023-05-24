import { FC } from "react";
interface props {
  label: string;
  type: string;
  placeholder: string;
  onChange?: any;
  icon?: any;
  error?: boolean;
}

const FormInput: FC<props> = ({label, placeholder, type, onChange, error, icon}) => {
  return (
    <div className={!error ? "p-2 text-red-600" : "p-2"}>
      <label
        htmlFor=""
        className={
          icon ? "flex justify-between text-sm w-full items-center gap-2" : "text-sm"
        }
      >
        {label}

        {icon}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required
        onChange={onChange}
        className="w-full my-1 border transition-all border-lime-700 p-2 placeholder:text-sm placeholder:text-slate-700/70 font-roboto font-light  focus:outline-none focus:ring-1 focus:ring-lime-700 focus:shadow-xl empty:bg-slate-50 rounded-lg"
      />
    </div>
  );
};

export default FormInput;
