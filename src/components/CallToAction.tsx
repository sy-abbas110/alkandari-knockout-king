import { Button } from "@/components/ui/button";
import { Instagram, Mail, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-uae-red/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold mb-8 shadow-glow">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-6">
            WITNESS HISTORY IN THE MAKING
          </h2>
          
          <div className="h-1 w-32 bg-gradient-gold mx-auto mb-8" />

          {/* Description */}
          <p className="font-inter text-xl md:text-2xl text-foreground/90 mb-4 leading-relaxed">
            Follow Husain's journey to becoming the <span className="text-gold font-bold">first Emirati boxing world champion</span>.
          </p>
          
          <p className="font-inter text-lg md:text-xl text-muted-foreground mb-12">
            Join <span className="text-gold font-bold">140,000+ fans</span> supporting Arab boxing's brightest star.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-gold text-primary font-bebas text-2xl px-10 py-7 h-auto hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => window.open('https://instagram.com/alkandarii95', '_blank')}
            >
              <Instagram className="mr-2 h-6 w-6" />
              FOLLOW ON INSTAGRAM
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground/30 text-foreground font-bebas text-2xl px-10 py-7 h-auto hover:bg-card hover:border-gold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Mail className="mr-2 h-6 w-6" />
              CONTACT FOR SPONSORSHIP
            </Button>
          </div>

          {/* Stats Reminder */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-12 border-t border-gold/20">
            <div>
              <div className="font-bebas text-4xl md:text-5xl text-gold mb-2">7-0</div>
              <div className="font-inter text-sm text-muted-foreground uppercase tracking-wider">Undefeated</div>
            </div>
            <div>
              <div className="font-bebas text-4xl md:text-5xl text-gold mb-2">7 KOs</div>
              <div className="font-inter text-sm text-muted-foreground uppercase tracking-wider">Perfect Record</div>
            </div>
            <div>
              <div className="font-bebas text-4xl md:text-5xl text-gold mb-2">100%</div>
              <div className="font-inter text-sm text-muted-foreground uppercase tracking-wider">Finish Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
