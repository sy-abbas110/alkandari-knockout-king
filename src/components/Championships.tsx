import { Medal, Trophy, Award } from "lucide-react";

interface Achievement {
  tournament: string;
  year: number;
  medal: "gold" | "silver" | "bronze" | "competed";
}

const achievements: Achievement[] = [
  { tournament: "Sheikh Muhammad bin Hamind Sharqi Tournament", year: 2017, medal: "silver" },
  { tournament: "Open Boxing Tournament Abu Dhabi", year: 2018, medal: "bronze" },
  { tournament: "Al Batal Fight Night", year: 2018, medal: "gold" },
  { tournament: "TK MMA Boxing Championship", year: 2018, medal: "gold" },
  { tournament: "Round 10 Boxing Tournament", year: 2018, medal: "gold" },
  { tournament: "Year of Zayed Boxing Tournament", year: 2018, medal: "gold" },
  { tournament: "ASBC Championship", year: 2018, medal: "silver" },
  { tournament: "Zayed Sports Tournament", year: 2023, medal: "gold" },
  { tournament: "UAE Open Boxing Championship Abu Dhabi", year: 2023, medal: "gold" },
  { tournament: "World Combat Games Riyadh", year: 2023, medal: "bronze" },
  { tournament: "Ju Jitsu Tournament for Army", year: 2023, medal: "competed" },
];

const getMedalColor = (medal: string) => {
  switch (medal) {
    case "gold":
      return "text-gold border-gold/40 bg-gold/5";
    case "silver":
      return "text-foreground/80 border-foreground/30 bg-foreground/5";
    case "bronze":
      return "text-orange-400 border-orange-400/30 bg-orange-400/5";
    default:
      return "text-muted-foreground border-muted/30 bg-muted/5";
  }
};

const getMedalIcon = (medal: string) => {
  switch (medal) {
    case "gold":
      return <Trophy className="w-6 h-6" />;
    case "silver":
      return <Medal className="w-6 h-6" />;
    case "bronze":
      return <Award className="w-6 h-6" />;
    default:
      return <Award className="w-6 h-6" />;
  }
};

const Championships = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(45_100%_51%_/_0.03)_0%,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4">
            BUILT THROUGH VICTORY
          </h2>
          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-6" />
          <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A decade of dominance in amateur competition, forged through countless battles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`
                group p-6 rounded-lg border-2 transition-all duration-300
                hover:scale-105 hover:shadow-glow
                ${getMedalColor(achievement.medal)}
              `}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {getMedalIcon(achievement.medal)}
                </div>
                <div className="flex-1">
                  <h3 className="font-inter font-bold text-base md:text-lg text-foreground mb-2 leading-tight">
                    {achievement.tournament}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bebas text-2xl text-gold">
                      {achievement.year}
                    </span>
                    <span className="font-inter text-xs uppercase tracking-wider text-muted-foreground">
                      {achievement.medal}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-bebas text-3xl md:text-4xl text-gold">
            11 MAJOR TOURNAMENTS • 7 GOLD MEDALS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Championships;
