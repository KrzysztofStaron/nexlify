interface StatusIndicatorProps {
  service: string;
  status: "connected" | "active" | "synced" | "ready";
  color: "green" | "blue" | "purple" | "orange";
}

export function StatusIndicator({ service, status, color }: StatusIndicatorProps) {
  const colorClasses = {
    green: {
      bg: "bg-green-100",
      dot: "bg-green-500",
      text: "text-green-700",
      pulse: "bg-green-400",
    },
    blue: {
      bg: "bg-blue-100",
      dot: "bg-blue-500",
      text: "text-blue-700",
      pulse: "bg-blue-400",
    },
    purple: {
      bg: "bg-purple-100",
      dot: "bg-purple-500",
      text: "text-purple-700",
      pulse: "bg-purple-400",
    },
    orange: {
      bg: "bg-orange-100",
      dot: "bg-orange-500",
      text: "text-orange-700",
      pulse: "bg-orange-400",
    },
  };

  const colors = colorClasses[color];

  const statusText = {
    connected: "Connected",
    active: "Active",
    synced: "Synced",
    ready: "Ready",
  };

  return (
    <div className={`${colors.bg} px-3 py-2 rounded-lg border border-${color}-200`}>
      <div className="flex items-center gap-2">
        {/* Status dot with pulse animation */}
        <div className="relative">
          <div className={`h-2 w-2 ${colors.dot} rounded-full`}></div>
          <div className={`absolute inset-0 h-2 w-2 ${colors.pulse} rounded-full animate-ping opacity-75`}></div>
        </div>

        {/* Service and status text */}
        <div className="flex flex-col">
          <span className={`text-xs font-medium ${colors.text}`}>{service}</span>
          <span className={`text-xs ${colors.text} opacity-80`}>{statusText[status]}</span>
        </div>
      </div>
    </div>
  );
}
