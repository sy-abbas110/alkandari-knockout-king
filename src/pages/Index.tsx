import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Championships from "@/components/Championships";
import Journey from "@/components/Journey";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <StatsBar />
      <About />
      <Championships />
      <Journey />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
