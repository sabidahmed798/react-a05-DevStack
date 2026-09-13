import { useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

import technologies from "../data/technologies.json";

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

const Technologies = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  // =====================================
  // ADD TO STACK
  // =====================================
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    // Duplicate warning
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);

      return;
    }

    // Add technology
    setStack((previousStack) => [...previousStack, technology]);

    // Success toast
    toast.success(`${technology.name} added to your stack!`);
  };

  // =====================================
  // REMOVE ONE
  // =====================================
  const handleRemove = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack((previousStack) => previousStack.filter((item) => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  // =====================================
  // REMOVE ALL
  // =====================================
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty!");

      return;
    }

    setStack([]);

    toast.error("All technologies removed!");
  };

  return (
    <section className="min-h-screen bg-white px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Technology Stack
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Explore technologies and build your ideal development stack.
          </p>
        </div>

        {/* Cards + Sidebar */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isAdded={stack.some((item) => item.id === technology.id)}
              />
            ))}
          </div>

          {/* Your Stack Sidebar */}
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
