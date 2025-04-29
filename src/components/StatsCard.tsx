
import { cn } from "@/lib/utils";

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatsCard = ({ value, label, icon, className }: StatsCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-lg bg-card flex items-center gap-4 shadow-md",
      className
    )}>
      {icon && <div className="text-vachan-orange">{icon}</div>}
      <div>
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
};

export default StatsCard;
