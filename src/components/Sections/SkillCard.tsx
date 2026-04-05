import { BiInfoCircle } from "react-icons/bi";
import type { SkillCardProps } from "../../props/SkillCardProps";
import { useState } from "react";

const SkillCard = ({ skills, title }: SkillCardProps) => {
  const [hovered, setHovered] = useState<number>(-1);
  const isHovered = (index: number, hovered: number) => {
    return index === hovered;
  };

  return (
    <div className="border bg-linear-180 from-primary to-slate-800 border-border rounded-2xl p-5 w-full md:w-2xl transition-all hover:-translate-y-2 shadow-xl" id="skills">
      <h1 className="text-shadow-2xs text-2xl text-primary-contrast font-semibold mb-5"> {title} </h1>
      <ul className="flex flex-col gap-5">
        {skills.map((value, index) => {
          return (
            <li key={value.name} className="">
              <span className="flex justify-between">
                <p className="text-text-banner text-lg">{value.name}</p>
                <span className="flex justify-center items-center gap-3">
                  <p className="text-primary-contrast">{value.percent}%</p>
                  <BiInfoCircle
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(-1)}
                  />
                </span>
              </span>
              <div className="relative text-text w-full">
                <span
                  className={`${isHovered(index, hovered) ? `absolute` : `hidden`} z-10 rounded p-3 bg-gray-200`}
                >
                  {value.description}
                </span>
                <span
                  className={`block h-1 rounded bg-linear-to-r from-gray-600 to-gray-100`}
                  style={{ width: `${value.percent}%` }}
                ></span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillCard;
