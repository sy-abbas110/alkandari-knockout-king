import aboutImage from "@/assets/professional-portrait.jpg";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-uae-red rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4">
            THE EMIRATI POWERHOUSE
          </h2>
          <div className="h-1 w-32 bg-gradient-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 rounded-lg blur-xl group-hover:opacity-30 transition-opacity duration-500" />
            <img
              src={aboutImage}
              alt="Husain Al Kandari Portrait"
              className="relative rounded-lg w-full h-auto shadow-intense"
            />
            
            {/* UAE Flag Overlay */}
            <div className="absolute bottom-4 right-4 w-16 h-12 rounded shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 grid-rows-3 h-full">
                <div className="bg-uae-green" />
                <div className="bg-uae-white" />
                <div className="bg-uae-black" />
              </div>
              <div className="absolute left-0 top-0 w-1/3 h-full bg-uae-red" />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed">
              Husain Al Kandari is one of the <span className="text-gold font-bold">UAE's most explosive professional boxers</span> — an Emirati knockout artist representing the Arab world on the global stage.
            </p>
            
            <p className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed">
              With <span className="text-gold font-bold">7 professional victories, all by knockout</span>, Husain combines devastating power with tactical brilliance.
            </p>
            
            <p className="font-inter text-lg md:text-xl text-foreground/90 leading-relaxed">
              Born and raised in the UAE, he's on a mission to become the <span className="text-gold font-bold">first Emirati world champion</span> and inspire the next generation of Arab fighters.
            </p>

            <div className="pt-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-gold" />
              <div className="font-bebas text-2xl text-gold">
                UNBREAKABLE SPIRIT
              </div>
              <div className="flex-1 h-px bg-gradient-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
