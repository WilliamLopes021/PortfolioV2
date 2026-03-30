import type { ButtonProps } from "../props/ButtonProps";

function Button({
  text,
  color = "dark",
  rounded = false,
  href = "",
}: ButtonProps) {
  const buttonColor = color === "dark" ? "bg-slate-300" : "bg-slate-300";

  return (
    <button
      className={`${buttonColor} mx-4 p-3 ${rounded ? `rounded-full` : `rounded-lg`}`}
    >
      <a href={href} className={"text-shadow-white text-nowrap"}>
        {text}{" "}
      </a>
    </button>
  );
}

export default Button;
