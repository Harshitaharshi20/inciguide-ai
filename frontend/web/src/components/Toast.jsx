import { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`fixed bottom-5 right-5 ${bgColor} text-white px-6 py-3 rounded-2xl shadow-2xl animate-bounceIn flex items-center gap-3 z-50`}>
      <span>{type === "success" ? "✅" : "⚠️"}</span>
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default Toast;
