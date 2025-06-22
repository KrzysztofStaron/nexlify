interface StatusIndicatorProps {
  service: string;
  status: "connected" | "active" | "synced" | "ready";
  color: "green" | "blue" | "purple" | "orange";
}

export function StatusIndicator({ service, status, color }: StatusIndicatorProps) {
  const colorClasses = {
    green: {
      container: "bg-green-50 border-green-200",
      dot: "bg-green-500",
      text: "text-green-700",
      pulse: "bg-green-400",
    },
    blue: {
      container: "bg-blue-50 border-blue-200",
      dot: "bg-blue-500",
      text: "text-blue-700",
      pulse: "bg-blue-400",
    },
    purple: {
      container: "bg-purple-50 border-purple-200",
      dot: "bg-purple-500",
      text: "text-purple-700",
      pulse: "bg-purple-400",
    },
    orange: {
      container: "bg-orange-50 border-orange-200",
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
    <div className={`${colors.container} px-3 py-2.5 rounded-xl border shadow-sm`}>
      <div className="flex items-center gap-3">
        {/* Status dot with pulse animation */}
        <div className="relative flex-shrink-0">
          <div className={`h-2.5 w-2.5 ${colors.dot} rounded-full`}></div>
          <div className={`absolute inset-0 h-2.5 w-2.5 ${colors.pulse} rounded-full animate-ping opacity-60`}></div>
        </div>

        {/* Service and status text */}
        <div className="flex flex-col min-w-0">
          <span className={`text-xs font-semibold ${colors.text} truncate`}>{service}</span>
          <span className={`text-xs ${colors.text} opacity-70 font-medium`}>{statusText[status]}</span>
        </div>
      </div>
    </div>
  );
}
