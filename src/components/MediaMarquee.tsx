import { Card } from "@/components/ui/card";
import victoryImage from "@/assets/victory-uae-flag.jpg";
import inRingImage from "@/assets/in-ring-action.jpg";
import portraitImage from "@/assets/professional-portrait.jpg";
import crowdImage from "@/assets/crowd-celebration.jpg";
import fightVideo from "@/assets/fight-video.mp4";

const MediaMarquee = () => {
  const mediaItems = [
    { type: "image", src: victoryImage, alt: "Victory with UAE Flag" },
    { type: "image", src: inRingImage, alt: "In Ring Action" },
    { type: "video", src: fightVideo, alt: "Fight Highlights" },
    { type: "image", src: portraitImage, alt: "Professional Portrait" },
    { type: "image", src: crowdImage, alt: "Crowd Celebration" },
  ];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="relative">
        {/* Marquee Container */}
        <div className="flex gap-6 animate-marquee">
          {/* First set of items */}
          {mediaItems.map((item, index) => (
            <Card
              key={`first-${index}`}
              className="flex-shrink-0 w-[280px] h-[500px] overflow-hidden bg-card/50 backdrop-blur-sm border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </Card>
          ))}
          {/* Duplicate set for seamless loop */}
          {mediaItems.map((item, index) => (
            <Card
              key={`second-${index}`}
              className="flex-shrink-0 w-[280px] h-[500px] overflow-hidden bg-card/50 backdrop-blur-sm border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-gold"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
            </Card>
          ))}
        </div>

        {/* Gradient Overlays for fade effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default MediaMarquee;
