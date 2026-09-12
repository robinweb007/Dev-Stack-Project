import { use, useState } from "react";
import type { Itype } from "./type";
import { Card } from "./card";
import Stack from "./stack";
import { toast } from "react-toastify";

interface technologieProps {
  technologiePormise: Promise<Itype[]>;
}

function Technologies({ technologiePormise }: technologieProps) {
  const technologies = use(technologiePormise);

  // stact count add
  const [selectedTechnologies, setSelectedTechnologies] = useState<Itype[]>([]);
  const handleAddToStack = (technology: Itype) => {
    setSelectedTechnologies((prev) => [...prev, technology]);
    toast.success(`${technology.name} added to Successfully!`);

  };

  // remove all info stact count
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };
  // just one element delete
  const handleRemoveOne = (id: number) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id),
    );
  };

  return (
    <>

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
            <Stack
              selectedTechnologies={selectedTechnologies}
              onRemoveAll={handleRemoveAll}
              onRemoveOne={handleRemoveOne}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Technologies;
