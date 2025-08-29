export function Button({ children, className, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";
  const variants = {
    default: "bg-[#0b2447] text-white ",
    outline: "border border-gray-300 text-gray-700 ",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
