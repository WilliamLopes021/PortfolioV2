import type { ButtonProps } from "../../props/ButtonProps";

function Button({
  text,
  color = "primary",
  rounded = false,
  href = "",
}: ButtonProps) {
  let buttonColor: string;
  switch (color) {
    case "primary":
      buttonColor = "bg-primary hover:bg-primary-hover";
      break;

    case "success":
      buttonColor = "bg-success hover:opacity-75";
      break;

    case "danger":
      buttonColor = "bg-danger hover:opacity-75";
      break;
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonColor} pointer-events-auto mx-4 px-3 py-2 cursor-pointer ${rounded ? `rounded-full` : `rounded-lg`} h-min text-surface text-nowrap`}
    >
      {text}{" "}
    </a>
  );
}

export default Button;
