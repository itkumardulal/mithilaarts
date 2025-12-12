import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Building2, Cloud, Globe, Users, Sparkles, Target, ArrowRight, GraduationCap, Palette, Video, BookOpen } from 'lucide-react';
import museumImage from '@/assets/museum-concept.jpg';

const Future = () => {
  const majorInitiatives = [
    {
      icon: Building2,
      title: "Museum of Mithila Heritage (MoM New York)",
      status: "Landmark Aspiration",
      description: "A dedicated institution envisioned as a permanent home for Mithila artworks, artifacts, and archival material. The museum would host exhibitions, artist residencies, and educational programs for students and researchers.",
      features: [
        "Preserve and display Mithila artworks and artifacts",
        "Host permanent 'Art for SDGs' exhibitions",
        "Provide space for artist residencies",
        "Educational programs for students and researchers",
        "Archive of oral histories and traditional techniques",
        "Performance and event space for cultural programs"
      ]
    },
    {
      icon: Globe,
      title: "Expansion of Global & World Tour Programs",
      status: "In Progress",
      description: "Scale the World Tour 2025 exhibitions to more cities and countries, in collaboration with embassies, cultural centers, and diaspora groups worldwide.",
      features: [
        "Expand to 10+ international cities",
        "Partner with embassies and cultural centers globally",
        "Develop long-term museum partnerships",
        "Integrate Mithila art into university curricula",
        "Create traveling exhibition infrastructure",
        "Build sustainable touring model"
      ]
    },
    {
      icon: Cloud,
      title: "Digital Heritage Archive",
      status: "In Development",
      description: "Build a comprehensive digital archive and virtual gallery of Mithila artworks and SDG-themed exhibitions, making heritage accessible to researchers and learners worldwide.",
      features: [
        "High-resolution artwork digitization",
        "Virtual gallery experiences",
        "Interactive learning modules",
        "Video documentation of techniques",
        "Oral history recordings",
        "Open-access research database"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educational Expansion",
      status: "Strategic Goal",
      description: "Launch online courses and educational packets for schools and community organizations, focusing on art, heritage, and sustainability education.",
      features: [
        "Online certification courses",
        "School curriculum packages",
        "Teacher training programs",
        "Youth education modules",
        "Community workshop kits",
        "SDG-aligned educational content"
      ]
    }
  ];

  const youthInitiatives = [
    {
      icon: Users,
      title: "Youth Leadership Programs",
      description: "Establish structured fellowship programs around cultural organizing and SDG advocacy through art, developing the next generation of heritage leaders."
    },
    {
      icon: Palette,
      title: "Artist Training & Mentorship",
      description: "Offer more structured training and mentorship for young and emerging Mithila artists in the diaspora and in South Asia."
    },
    {
      icon: BookOpen,
      title: "Cultural Ambassador Network",
      description: "Expand the Youth Ambassador Program to train young Maithils as cultural representatives in schools and communities globally."
    }
  ];

  const roadmap = [
    { year: "2025", milestone: "World Tour Launch", description: "Expand Art for SDGs exhibitions to multiple international cities" },
    { year: "2025-2026", milestone: "Digital Archive Phase 1", description: "Launch digital collection with 1,000+ digitized artworks and oral histories" },
    { year: "2026", milestone: "Education Platform", description: "Online courses and school curriculum packages available" },
    { year: "2027", milestone: "Museum Planning", description: "Finalize MoM New York location and architectural planning" },
    { year: "2028", milestone: "Youth Fellowship Launch", description: "First cohort of cultural leadership fellows" },
    { year: "2029-2030", milestone: "Museum Opening", description: "Grand opening of Museum of Mithila Heritage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Building Tomorrow</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Future <span className="gradient-text-cultural">Initiatives</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our ambitious vision for preserving and promoting Mithila heritage for generations 
              to come, including landmark institutions, global expansion, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Museum Vision - Featured */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
              <img 
                src={museumImage} 
                alt="Museum Concept" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider mb-2">Landmark Initiative</p>
                  <p className="text-white font-playfair text-2xl font-semibold">
                    Museum of Mithila Heritage (MoM New York)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Initiatives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Strategic Goals & Initiatives
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            These ambitious initiatives require significant resources and community support 
            to create lasting infrastructure for Mithila heritage preservation.
          </p>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            {majorInitiatives.map((initiative, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-sindoor flex items-center justify-center">
                        <initiative.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-2xl font-semibold text-foreground">
                          {initiative.title}
                        </h3>
                        <span className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full">
                          {initiative.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-4">Key Components</h4>
                    <ul className="space-y-3">
                      {initiative.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth & Community Goals */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-6">
            Youth & Community Goals
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Developing the next generation of cultural leaders and expanding support 
            for emerging artists in the diaspora and South Asia.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {youthInitiatives.map((initiative, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center group hover:shadow-elevated transition-all">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <initiative.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Our Roadmap
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {roadmap.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0 border-l-2 border-secondary/30">
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-secondary" />
                <div className="glass-card rounded-xl p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {item.milestone}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Envisioning the Future
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Museum Concept",
              "Digital Archive",
              "World Tour",
              "Youth Program",
              "Education Platform",
              "Artist Residency",
              "Research Center",
              "Global Network"
            ].map((item, index) => (
              <div key={index} className="aspect-square bg-muted rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/5 to-primary/5">
                  <p className="text-muted-foreground text-xs font-inter text-center px-2">
                    [{item} Concept]
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Help Us Build the Future
            </h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              These ambitious initiatives require significant resources and community support. 
              Your contribution, whether financial, in-kind, or through volunteering, 
              can help make these dreams a reality and ensure Mithila heritage thrives 
              for generations to come.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="bg-background text-secondary hover:bg-background/90 gap-2">
                <Link to="/contact">
                  Donate Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/contact">Become a Founding Partner</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Be the first to know about progress on our initiatives, fundraising campaigns, 
            milestone achievements, and ways to get involved.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Subscribe to Updates</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Future;