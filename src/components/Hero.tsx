import { Button } from "@/components/ui/button";
import { Instagram, Play } from "lucide-react";
import heroImage from "@/assets/hero-boxing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Husain Al Kandari Boxing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      </div>

      {/* UAE Flag Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
        <div className="grid grid-cols-1 grid-rows-3 h-full">
          <div className="bg-uae-green" />
          <div className="bg-uae-white" />
          <div className="bg-uae-black" />
        </div>
        <div className="absolute left-0 top-0 w-1/3 h-full bg-uae-red" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="font-bebas text-7xl md:text-9xl lg:text-[12rem] leading-none text-foreground mb-4 animate-fade-in tracking-wider">
          HUSAIN AL KANDARI
        </h1>
        
        <div className="flex items-center justify-center gap-3 mb-8 animate-slide-up">
          <div className="h-1 w-12 bg-gradient-gold" />
          <p className="font-inter text-xl md:text-2xl lg:text-3xl font-bold text-foreground tracking-wide">
            UAE'S KNOCKOUT KING
          </p>
          <div className="h-1 w-12 bg-gradient-gold" />
        </div>

        <div className="font-bebas text-3xl md:text-5xl lg:text-6xl text-gold mb-12 animate-slide-up flex flex-wrap items-center justify-center gap-4 md:gap-8">
          <span className="inline-flex items-center gap-2">
            7-0
            <span className="text-sm text-muted-foreground">WINS</span>
          </span>
          <span className="text-foreground">|</span>
          <span className="inline-flex items-center gap-2">
            7 KOs
            <span className="text-sm text-muted-foreground">KNOCKOUTS</span>
          </span>
          <span className="text-foreground">|</span>
          <span className="inline-flex items-center gap-2">
            100%
            <span className="text-sm text-muted-foreground">FINISH RATE</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button
            size="lg"
            className="bg-gradient-gold text-primary font-bebas text-2xl px-8 py-6 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://instagram.com/alkandarii95', '_blank')}
          >
            <Instagram className="mr-2 h-5 w-5" />
            FOLLOW MY JOURNEY
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gold text-gold font-bebas text-2xl px-8 py-6 h-auto hover:bg-gold hover:text-primary transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5 fill-current" />
            VIEW FIGHT HIGHLIGHTS
          </Button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
