import { useState, useEffect } from 'react';

export default function StatsSection() {
  // Define your target numbers
  const stats = [
    { value: 50000, label: "Students Helped" },
    { value: 500, label: "Universities" },
    { value: 10, label: "Scholarships", isMoney: true },
    { value: 98, label: "Success Rate", isPercent: true }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              target={stat.value}
              label={stat.label}
              isMoney={stat.isMoney}
              isPercent={stat.isPercent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ target, label, isMoney = false, isPercent = false }) {
  const [count, setCount] = useState(0);
  const duration = 2000; // Animation duration in ms
  const steps = 50; // Number of steps in the animation

  useEffect(() => {
    let currentStep = 0;
    const increment = target / steps;
    const intervalTime = duration / steps;

    const timer = setInterval(() => {
      currentStep++;
      const newCount = Math.min(Math.floor(increment * currentStep), target);
      setCount(newCount);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  // Format the number based on props
  const formattedNumber = () => {
    if (isMoney && count >= 1) return `$${count.toLocaleString()}M+`;
    if (isPercent) return `${count}%`;
    if (target >= 1000) return `${count.toLocaleString()}+`;
    return `${count}+`;
  };

  return (
    <div className="p-4">
      <p className="text-4xl font-bold text-primary text-purple-500 mb-2">
        {formattedNumber()}
      </p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}