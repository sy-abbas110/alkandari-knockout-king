import { useEffect, useState } from "react";
import { Trophy, Target, TrendingUp, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({ icon, value, suffix = "", label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
          setHasAnimated(true);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, hasAnimated]);

  return (
    <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-card border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold group">
      <div className="text-gold group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="font-bebas text-5xl md:text-6xl text-gold animate-counter">
        {count}{suffix}
      </div>
      <div className="font-inter text-sm md:text-base text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const StatsBar = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(45_100%_51%_/_0.05)_0%,_transparent_100%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-foreground mb-2">
            UNDEFEATED RECORD
          </h2>
          <div className="h-1 w-24 bg-gradient-gold mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          <StatItem
            icon={<Trophy className="w-10 h-10 md:w-12 md:h-12" />}
            value={7}
            label="Professional Wins"
            delay={0}
          />
          <StatItem
            icon={<Target className="w-10 h-10 md:w-12 md:h-12" />}
            value={7}
            label="Knockouts"
            delay={200}
          />
          <StatItem
            icon={<TrendingUp className="w-10 h-10 md:w-12 md:h-12" />}
            value={100}
            suffix="%"
            label="KO Rate"
            delay={400}
          />
          <StatItem
            icon={<Users className="w-10 h-10 md:w-12 md:h-12" />}
            value={140}
            suffix="K+"
            label="Instagram Followers"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
