import type { MiniIconProps } from "../props/MiniIconProps";

function MinIcon({ icon, rounded = true, url }: MiniIconProps) {
  return (
    <div
      className={`${rounded ? `rounded-full` : `rounded-2xl`} shadow-xl/30 cursor-pointer`}
    >
      <a href={url}>{icon}</a>
    </div>
  );
}

export default MinIcon;
