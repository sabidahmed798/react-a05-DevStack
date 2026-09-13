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

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="w-full h-65 rounded-2xl border border-gray-200 bg-white p-6">
      {/* Heading */}
      <h2 className="text-[20px] font-bold text-[#0F172A]">Your Stack</h2>

      {/* Selected Count */}
      {stack.length === 0 ? (
        <p className="mt-2 text-[14px] text-[#94A3B8]">
          No technologies selected yet.
        </p>
      ) : (
        <p className="mt-2 text-[14px] text-[#94A3B8]">
          {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
          Selected
        </p>
      )}

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="mt-6 flex h-[112px] items-center justify-center rounded-2xl border border-dashed border-[#E2E8F0] bg-white">
          <p className="text-[15px] font-medium text-[#CBD5E1]">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-6 space-y-3">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex min-h-[66px] items-center rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-9 w-9 object-contain"
                  />
                </div>

                {/* Name + Category */}
                <div className="ml-2 min-w-0 flex-1">
                  <h3 className="truncate text-[12px] font-bold text-[#0F172A]">
                    {technology.name}
                  </h3>

                  <p className="mt-0.5 text-[9px] font-medium text-[#94A3B8]">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center text-[26px] font-light leading-none text-[#CBD5E1] transition duration-200 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-7 w-full cursor-pointer rounded-xl border border-[#F1CACA] bg-white py-2.5 text-[14px] font-semibold text-[#E05A5A] transition duration-200 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;
