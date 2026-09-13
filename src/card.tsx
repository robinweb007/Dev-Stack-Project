import { useState } from "react";
import { FaStar } from "react-icons/fa";
import type { Itype } from "./type";
interface CardProps {
  technologie: Itype;
  onAdd: (technology: Itype) => void;
  
}


export function Card({ technologie, onAdd }: CardProps) {
  const [selected, setselected] = useState(false);
  // toast add

  return (
    <div className="max-w-sm bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between space-y-4">
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

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {technologie?.name}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          {technologie?.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 text-sm">
        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md font-medium">
          {technologie?.category}
        </span>

        <span className="text-gray-500 font-medium">
          {technologie?.difficulty}
        </span>

        <div className="flex items-center space-x-1 font-bold text-gray-800">
          <span className="text-amber-400">
            <FaStar />
          </span>
          <span>{technologie?.rating}</span>
        </div>
      </div>

      <button
        onClick={() => {
          setselected(true);
          onAdd(technologie);

        }}
        disabled={selected === true ? true : false}
        className={`w-full rounded-xl ${
          selected
            ? "bg-gray-200 text-black"
            : "bg-gradient-to-r from-[#D81B7E] to-[#7C3AED] text-white"
        } font-medium py-3 rounded-xl transition-colors mt-2`}
      >
        {selected === true ? "Selected" : "Add to Stack"}
      </button>
    </div>
  );
}
