import { FC } from "react";

interface ToastProps {
  message: string;
}

const Toast: FC<ToastProps> = ({ message }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-800 rounded-full flex items-center gap-3 px-5 py-3 shadow-lg animate-toast-move z-50">
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center"
        style={{
          border: "2px solid #4cbfa4",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: "#4cbfa4",
          }}
        />
      </div>
      <div className="font-semibold text-sm">{message}</div>
    </div>
  );
};

export default Toast;
