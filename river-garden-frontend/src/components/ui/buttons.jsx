export default function Button({ children, type = "primary", className = "", ...rest }) {
  const base =
    "inline-flex items-center justify-center font-semibold px-5 py-2.5 transition-all cursor-pointer " +
    "rounded-tr-full rounded-br-full rounded-bl-full rounded-tl-none";

  let styles = "";

  if (type === "primary") {
    styles =
      "text-white bg-gradient-to-r from-[#ff7a42] to-[#ff8b5a] shadow-[0_8px_20px_rgba(255,122,66,0.16)] hover:shadow-[0_10px_25px_rgba(255,122,66,0.25)]";
  }

  if (type === "outline") {
    styles =
      "border border-[#ff7a42] text-[#ff7a42] bg-white hover:bg-[#ff7a420a] ";
  }

  if (type === "ghost") {
    styles = "text-gray-700 bg-transparent hover:bg-gray-100";
  }

  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
