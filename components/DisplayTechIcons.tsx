import Image from "next/image";

import { cn, getTechLogos } from "@/lib/utils";

const DisplayTechIcons = async ({ techStack }: TechIconProps) => {
  const techIcons = await getTechLogos(techStack);

  return (
    <div className="flex flex-row gap-2">
    {techIcons.slice(0, 3).map(({ tech, url }) => (
      <div
        key={tech}
        className={cn(
          "relative group bg-dark-300 rounded-full p-2 flex flex-center"
        )}
      >
        <span className="tech-tooltip">{tech}</span>
  
        <Image
          src={url}
          alt={tech}
          width={100}
          height={100}
          className="size-5"
        />
      </div>
    ))}
  </div>
  
  );
};

export default DisplayTechIcons;