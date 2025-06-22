import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

export function FeatureCard({ title, description, icon, gradient }: FeatureCardProps) {
  return (
    <div
      className={`group bg-gradient-to-br ${gradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-200`}
    >
      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
}
