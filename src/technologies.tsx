import { use, useState } from "react";
import type { Itype } from "./type";
import { Card } from "./card";
import Stack from "./stack";

interface technologieProps {
  technologiePormise: Promise<Itype[]>;
}

function Technologies({ technologiePormise }: technologieProps) {
  const technologies = use(technologiePormise);
  const [selectedTechnologies, setSelectedTechnologies] = useState<Itype[]>([]);
  const handleAddToStack = (technology: Itype) => {
  setSelectedTechnologies((prev) => [...prev, technology]);}

  return (
    <div className="container mx-auto">
      <h3 className="text-[36px] font-extrabold">
        Explore the {}
        <span className="bg-gradient-to-r from-[#D81B7E]  to-[#7C3AED] bg-clip-text text-transparent">
          Technologies
        </span>
      </h3>
      <p className="text-[#64748B] text-[16px]">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 grid md:grid-cols-3 gap-4">
          {technologies.map((technologie: Itype) => (
            <Card technologie={technologie} onAdd={handleAddToStack}></Card>
          ))}
        </div>

        <div className="col-span-1">
          <Stack selectedTechnologies={selectedTechnologies} />
        </div>
      </div>
    </div>
  );
}
export default Technologies;
