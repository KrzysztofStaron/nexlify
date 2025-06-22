import { ReactNode } from "react";

interface TargetUserCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

export function TargetUserCard({ title, description, icon, gradient }: TargetUserCardProps) {
  return (
    <div className="text-center group">
      <div
        className={`bg-gradient-to-br ${gradient} p-6 rounded-full w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
