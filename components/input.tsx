import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  placeholder? : string;
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  placeholder = "내용을 입력해주세요",
  register,
  type,
  required,
}: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-600"
        htmlFor={name}
      >
        {label}
      </label>
     
        <div className=" relative flex  items-center">
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            placeholder = {placeholder}
            className="appearance-none w-full px-3 py-2 border-b border-gray-300  placeholder-gray-400 focus:outline-none focus:ring-secondary focus:border-secondary"
          />
        </div>
     
    </div>
  );
}