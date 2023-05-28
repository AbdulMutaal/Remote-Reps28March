interface ButtonsProps {
  text?: string;
  size?: "default" | "sm" | "lg" | "md" | "normal";
}

function Buttons({ text, size = "default" }: ButtonsProps) {
  const Size = {
    normal: "px-[16px] h-[50px]",
    default: "px-[40px] h-[48px]",
    sm: "px-[22px] h-[32px] text-sm",
    md: "px-[36px] py-[16px]",
    lg: "px-[70px] h-[48px]",
  };

  return (
    <button
      className={`border border-[#4c00b0] bg-[#4c00b0] text-white font-semibold rounded-[5px] p-[5px] ${Size[size]}`}
    >
      {text}
    </button>
  );
}

export default Buttons;
