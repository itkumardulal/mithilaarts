import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroArtwork from '@/assets/hero-mithila-artwork.jpg';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Stats animation
  const stats = [
    { value: 3000, label: 'Years of Heritage', suffix: '+' },
    { value: 50, label: 'Global Events', suffix: '+' },
    { value: 4, label: 'UN SDGs' },
  ];
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, i) => {
            let start = 0;
            const duration = 2000;
            const increment = stat.value / (duration / 30);

            const interval = setInterval(() => {
              start += increment;
              if (start >= stat.value) {
                start = stat.value;
                clearInterval(interval);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[i] = Math.floor(start);
                return newCounters;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff5f0] via-[#fffde0] to-[#e0f7fa] rice-paper-texture py-28 lg:py-36">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-28 h-28 rounded-full bg-sindoor/10 blur-2xl animate-float" />
        <div className="absolute bottom-36 right-20 w-40 h-40 rounded-full bg-haldi/20 blur-3xl animate-float-slow" />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-peacock/10 blur-2xl animate-float"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Decorative Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sindoor via-haldi to-peacock" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-haldi/20 border border-haldi/30">
              <span className="w-2 h-2 rounded-full bg-haldi animate-pulse" />
              <span className="text-sm font-inter text-earth font-medium">
                Preserving 3000 Years of Heritage
              </span>
            </div>

            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              <span className="block text-foreground">The Living Art of</span>
              <span className="block gradient-text-primary">Mithila Heritage</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground font-inter leading-relaxed max-w-xl">
              Bridging ancient Nepali artistry with global sustainability goals. Experience
              the timeless beauty of Janakpur's cultural treasures through art, education, and
              international diplomacy.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => navigate('/programs')}
              >
                Explore Our Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="group gap-3"
                onClick={() => navigate('/art-for-sdgs')}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-primary">
                    {counters[index]}
                    {stat.suffix || ''}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Artwork */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 sm:-inset-6 border-2 border-haldi/30 rounded-3xl" />
              <div className="absolute -inset-2 sm:-inset-4 border border-sindoor/20 rounded-2xl" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={heroArtwork}
                  alt="Traditional Mithila Madhubani artwork"
                  className="w-full h-auto object-cover animate-fade-in"
                />

                {/* Floating accent elements */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm shadow-card">
                  <span className="text-sm font-inter font-medium text-earth">
                    ✦ UNESCO Heritage
                  </span>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -bottom-5 -left-5 px-5 py-3 rounded-xl bg-card shadow-elevated border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-peacock flex items-center justify-center">
                    <span className="text-secondary-foreground text-lg">🎨</span>
                  </div>
                  <div>
                    <p className="font-playfair font-semibold text-foreground">Master Artists</p>
                    <p className="text-sm text-muted-foreground">Traditional Craftspeople</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-inter tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};
