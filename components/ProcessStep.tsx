import { ReactNode } from "react";

interface ProcessStepProps {
  title: string;
  description: string;
  example: string;
  exampleLabel: string;
  icon: ReactNode;
  gradient: string;
}

export function ProcessStep({ title, description, example, exampleLabel, icon, gradient }: ProcessStepProps) {
  return (
    <div
      className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className="bg-white/90 backdrop-blur-sm text-gray-900 rounded-full p-3 flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-800 mb-3">{description}</p>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg text-sm text-gray-700">
            <strong className="text-gray-900">{exampleLabel}:</strong> {example}
          </div>
        </div>
      </div>
    </div>
  );
}
