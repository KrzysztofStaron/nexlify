import { ReactNode } from "react";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: ReactNode;
  iconBgColor?: string;
}

export function IntegrationCard({ name, description, icon, iconBgColor = "bg-white" }: IntegrationCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
      <div
        className={`h-16 w-16 mx-auto mb-4 ${iconBgColor} rounded-lg p-3 shadow-sm group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-700 mt-2">{description}</p>
    </div>
  );
}
