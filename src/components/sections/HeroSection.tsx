import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroArtwork from "@/assets/hero-mithila-artwork.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#fff5f0] via-[#fffde0] to-[#e0f7fa]">
      {/* Background abstract shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 lg:w-60 lg:h-60 bg-peacock/20 rounded-full blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 lg:w-80 lg:h-80 bg-sindoor/20 rounded-full blur-3xl"
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Main container */}
      <div className="container mx-auto px-6 lg:px-20 h-full flex flex-col lg:flex-row items-center justify-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex flex-col gap-6 lg:gap-10 text-center lg:text-left"
        >
       <div className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-2 rounded-full bg-gradient-to-r from-haldi/30 via-sindoor/30 to-peacock/30 backdrop-blur-sm border border-white/20 text-sm lg:text-base font-medium max-w-xs lg:max-w-sm w-auto">
  Preserving 3000 Years of Heritage
</div>


          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight lg:leading-[1.1]">
            The Living Art of <span className="text-gradient">Mithila Heritage</span>
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg lg:max-w-xl leading-relaxed">
            Bridging ancient Nepali artistry with global sustainability goals.
            Explore timeless cultural treasures through immersive experiences.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <Button
              variant="hero"
              size="lg"
              className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
              onClick={() => navigate("/programs")}
            >
              Explore Programs <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6" />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="flex items-center gap-2 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4"
              onClick={() => navigate("/art-for-sdgs")}
            >
              <Play className="w-4 h-4 lg:w-5 lg:h-5" /> Watch Story
            </Button>
          </div>
        </motion.div>

        {/* Right Artwork with floating cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center items-center w-full max-w-md lg:max-w-2xl"
        >
          {/* Main Artwork */}
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
            <img
              src={heroArtwork}
              alt="Mithila Artwork"
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Floating Info Cards */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 bg-white/30 backdrop-blur-md px-4 py-3 lg:px-6 lg:py-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-3"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-peacock flex items-center justify-center text-lg lg:text-xl">
              🎨
            </div>
            <div>
              <p className="font-playfair font-semibold text-sm lg:text-base">Master Artists</p>
              <p className="text-xs lg:text-sm text-muted-foreground">Living Tradition</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-8 -right-6 bg-white/30 backdrop-blur-md px-3 py-2 lg:px-4 lg:py-3 rounded-xl border border-white/20 shadow-lg flex items-center gap-2"
          >
            <span className="text-lg lg:text-xl">✦</span>
            <span className="text-xs lg:text-sm font-medium">UNESCO Heritage</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
