import { MapPin, Flag } from "lucide-react";

interface Location {
  name: string;
  description: string;
  icon: "home" | "training" | "competition" | "goal";
}

const locations: Location[] = [
  {
    name: "UAE",
    description: "Home Base • Abu Dhabi",
    icon: "home",
  },
  {
    name: "Kazakhstan",
    description: "International Training Camp",
    icon: "training",
  },
  {
    name: "Turkey",
    description: "Competition & Development",
    icon: "competition",
  },
  {
    name: "World Stage",
    description: "Championship Vision",
    icon: "goal",
  },
];

const getIconBg = (icon: string) => {
  switch (icon) {
    case "home":
      return "bg-uae-red";
    case "training":
      return "bg-card border-2 border-gold";
    case "competition":
      return "bg-card border-2 border-foreground/30";
    case "goal":
      return "bg-gradient-gold";
    default:
      return "bg-card";
  }
};

const Journey = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-uae-green rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4">
            FROM ABU DHABI TO THE WORLD
          </h2>
          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-6" />
          <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of dedication, sacrifice, and unwavering determination
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Journey Path */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-uae-red via-gold to-gold hidden md:block" />

            {/* Journey Points */}
            <div className="space-y-12">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-6
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* Content */}
                  <div className={`
                    flex-1
                    ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}
                    text-left
                  `}>
                    <h3 className="font-bebas text-3xl md:text-4xl text-foreground mb-2">
                      {location.name}
                    </h3>
                    <p className="font-inter text-base md:text-lg text-muted-foreground">
                      {location.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className={`
                    relative shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full
                    flex items-center justify-center
                    ${getIconBg(location.icon)}
                    shadow-glow
                    group hover:scale-110 transition-transform duration-300
                  `}>
                    {location.icon === "goal" ? (
                      <Flag className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    ) : (
                      <MapPin className="w-6 h-6 md:w-8 md:h-8 text-gold" />
                    )}
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-16 text-center p-8 rounded-lg bg-card border-2 border-gold/20">
            <p className="font-bebas text-2xl md:text-3xl text-gold mb-4">
              DESTINATION: WORLD CHAMPION
            </p>
            <p className="font-inter text-base md:text-lg text-muted-foreground">
              Every step, every fight, every sacrifice brings the vision closer to reality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
