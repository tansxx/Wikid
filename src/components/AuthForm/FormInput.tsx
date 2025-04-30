import React from "react";
import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface FormInputProps {
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: any;
  register?: any;
  onKeyDown?: any;
  submitError?: string;
  onBlur?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  register,
  onKeyDown,
  submitError,
  error,
  onBlur,
  ...rest
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col ">
      <label className="block mb-[7px] text-textmdRegular text-gray500">
        {label}
      </label>
      <div className="relative flex">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          {...register}
          onKeyDown={onKeyDown}
          {...rest}
          className={`w-full rounded-[10px] px-5 py-[10.5px]  placeholder:text-textmdRegular font-normal placeholder:text-gray400
        ${error ? "outline-secondaryRed200" : "outline-primaryGreen200"}
        ${error ? "bg-secondaryRed100" : "bg-gray100"}
        `}
        />
        {isPasswordType && (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 "
          >
            {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
          </button>
        )}
      </div>
      {error && (
        <span className="text-xs text-secondaryRed200 mt-2" role="alert">
          {error.message}
        </span>
      )}
      {submitError && (
        <span className="text-xs text-secondaryRed200 mt-2" role="alert">
          {submitError}
        </span>
      )}
    </div>
  );
};

export default FormInput;
