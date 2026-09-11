import type { Itype } from "./type";

export interface StackProps {
  selectedTechnologies:Itype[];
}

export default function Stack({ selectedTechnologies }: StackProps) {
  return (
    <div className="sticky top-5 rounded-2xl border border-[#E2E8F0] p-6 shadow-sm">
      {/* Heading */}
      <h2 className="text-[28px] font-bold text-[#0F172A]">Your Stack</h2>

      <p className="mt-1 text-[18px] text-[#94A3B8]">
        {selectedTechnologies.length} Technology Selected
      </p>

      {/* Selected Technology Cards */}
      <div className="mt-7 space-y-2">
        {selectedTechnologies.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center justify-between rounded-xl border border-[#CBD5E1] px-5 py-4"
          >
            {/* Left side */}
            <div className="flex items-center gap-4">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-12 w-12 object-contain"
              />

              <div>
                <h3 className="text-[18px] font-bold text-[#0F172A]">
                  {technology.name}
                </h3>

                <p className="text-[13px] text-[#94A3B8]">
                  {technology.category}
                </p>
              </div>
            </div>

            {/* Remove button */}
            <button className="text-[32px] font-light text-[#94A3B8]">×</button>
          </div>
        ))}
      </div>

      {/* Remove All */}
      {selectedTechnologies.length > 0 && (
        <button className="mt-20 w-full rounded-xl border border-red-300 py-3 text-[20px] font-semibold text-red-500">
          Remove All
        </button>
      )}
    </div>
  );
}
