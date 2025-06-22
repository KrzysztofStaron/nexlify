import { ReactNode } from "react";

interface QuickFeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

export function QuickFeatureCard({ title, description, icon, gradient }: QuickFeatureCardProps) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div
        className={`bg-gradient-to-br ${gradient} p-2 sm:p-3 rounded-lg sm:rounded-xl w-fit mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{title}</div>
      <div className="text-gray-600 text-xs sm:text-sm">{description}</div>
    </div>
  );
}
