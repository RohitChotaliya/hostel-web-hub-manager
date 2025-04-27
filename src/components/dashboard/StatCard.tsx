
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
  trend?: 'up' | 'down';
  trendValue?: string;
}

const StatCard = ({
  title,
  value,
  icon,
  className,
  trend,
  trendValue
}: StatCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="mt-1 text-2xl font-bold">{value}</h3>
            
            {trend && trendValue && (
              <p className={cn(
                "mt-1 text-xs font-medium flex items-center",
                trend === 'up' ? "text-green-600" : "text-red-600"
              )}>
                <span className={cn(
                  "inline-block mr-1",
                  trend === 'up' ? "rotate-0" : "rotate-180"
                )}>
                  ↑
                </span>
                {trendValue}
              </p>
            )}
          </div>
          
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
