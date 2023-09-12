/* eslint-disable react/require-default-props */
import React, { FC } from 'react';

interface Props {
  label: string;
  type: string;
  placeholder: string;
  onChange?: any;
  icon?: any;
  error?: boolean;
}

const FormInput: FC<Props> = ({
  label,
  placeholder,
  type,
  onChange,
  error,
  icon,
}) => (
  <div className={!error ? 'p-2 text-red-600' : 'p-2'}>
    <label
      htmlFor=""
      className={
        icon
          ? 'flex justify-between text-[11px] w-full items-center gap-2'
          : 'text-[11px]'
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
      className={
        !error
          ? 'w-full my-1 border transition-all border-red-700 p-2 placeholder:text-sm placeholder:text-slate-700/70 font-roboto font-light  focus:outline-none focus:ring-1 focus:ring-red-700 focus:shadow-lg empty:bg-slate-50 rounded-lg'
          : 'w-full my-1 border transition-all border-lime-700 p-2 placeholder:text-sm placeholder:text-slate-700/70 font-roboto font-light  focus:outline-none focus:ring-1 focus:ring-lime-700 focus:shadow-lg empty:bg-slate-50 rounded-lg'
      }
    />
  </div>
);

export default FormInput;
