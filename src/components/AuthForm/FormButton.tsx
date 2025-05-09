import { ButtonHTMLAttributes } from "react";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const FormButton = ({
  loading = false,
  children,
  ...props
}: FormButtonProps) => {
  return (
    <button
      disabled={loading || props.disabled}
      className={`bg-primaryGreen200 hover:bg-primaryGreen100 rounded-[7px] text-gray-50 text-[14px] font-semibold leading-[50px] transition ${
        loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-primaryGreen200 rounded-[7px] hover:bg-primaryGreen300"
      }`}
      {...props}
    >
      {loading ? "로딩 중..." : children}
    </button>
  );
};

export default FormButton;
