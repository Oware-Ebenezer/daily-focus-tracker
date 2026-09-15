import { Card } from "@/components/Card";
import { StatValue } from "@/components/StatValue";

export const StatTile = ({ label, value, className = "" }) => {
  return (
    <Card className={`p-4 ${className}`}>
      <StatValue label={label} value={value} />
    </Card>
  );
};
