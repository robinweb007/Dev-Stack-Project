import type { Itype } from "./type";

export function Card({technologie}:{technologie:Itype}) {
  return (
    <div className="max-w-sm bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between space-y-4">
      {/* topsection icon*/}
      <div className="flex items-center justify-between">
        <img
          src={technologie?.icon}
          alt={technologie?.name}
          className="w-12 h-12 object-contain"
        />
        <span className="bg-sky-50 text-sky-500 font-medium px-3 py-1 rounded-full text-sm">
          {technologie?.badge}
        </span>
      </div>

      {/* description}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {technologie?.name}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {technologie?.description}
        </p>
      </div>

      {/* Caategory and reating*/}
      <div className="flex items-center justify-between pt-2 text-sm">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md font-medium">
          {technologie?.category}
        </span>

        <span className="text-gray-500 font-medium">
          {technologie?.difficulty}
        </span>

        <div className="flex items-center space-x-1 font-bold text-gray-800">
          <span className="text-amber-400">★</span>
          <span>{technologie?.rating}</span>
        </div>
      </div>

      {/* btn */}
      <button className="w-full rounded-xl bg-gradient-to-r from-[#D81B7E]  to-[#7C3AED] text-white font-medium py-3 mt-2">
        Add to Stack
      </button>
    </div>
  );

}
