interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div>
      <div className="rounded-xl px-4 border  border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
        {/* Icon  Badge */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-9 w-9 object-contain"
            />
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-500">
            {technology.badge}
          </span>
        </div>

        {/* Name */}
        <h2 className="text-base font-bold text-[#0F172A]">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="mt-2 min-h-[60px] text-[11px] leading-5 text-gray-500">
          {technology.description}
        </p>

        {/* Category + Difficulty + Rating */}
        <div className="mt-4 flex items-center justify-between gap-2 text-[10px] text-gray-500">
          <span className="rounded-full bg-gray-100 px-2 py-1">
            {technology.category}
          </span>

          <span className="truncate">{technology.difficulty}</span>

          <span className="flex items-center gap-1 font-medium text-gray-700">
            <span className="text-yellow-500">★</span>
            {technology.rating}
          </span>
        </div>

        {/* Add To Stack */}
        <button
          type="button"
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`mt-4 w-full rounded-md py-2 text-[11px] font-medium transition duration-300 ${
            isAdded
              ? "cursor-not-allowed bg-green-100 text-green-700"
              : "cursor-pointer bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
