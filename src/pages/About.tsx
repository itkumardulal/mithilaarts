import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users, Target, Globe, Heart, Building, Sparkles } from 'lucide-react';

const About = () => {

  // -----------------------------
  // IMAGES PROVIDED BY USER
  // -----------------------------
  const images = {
    hero: "https://i.imgur.com/6slZWn8.jpeg",            // Hero
    story: "https://i.imgur.com/jZZWeF9.jpeg",           // Main Story Section
    gallery: [
      "https://i.imgur.com/1JUU91a.jpeg",
      "https://i.imgur.com/lVogGfQ.jpeg",
      "https://i.imgur.com/WrYZKrh.jpeg",
      "https://i.imgur.com/fXsmjdt.jpeg",
      "https://i.imgur.com/31AWGD0.jpeg",
      "https://i.imgur.com/aR2ZDoe.jpeg",
    ]
  };

  // -----------------------------
  // TIMELINE DATA
  // -----------------------------
  const timeline = [
    {
      year: "Ancient Origins",
      title: "Birth of Mithila Art",
      description:
        "Mithila painting tradition begins in the ancient kingdom of Mithila, spanning present-day Nepal and Bihar, India. Legend traces it to King Janaka's court during the wedding of Sita and Rama, making it over 3,000 years old."
    },
    {
      year: "1934",
      title: "Global Discovery",
      description:
        "Following a major earthquake, British colonial officer William G. Archer discovers Mithila paintings on exposed walls, bringing international attention to this art form and sparking academic interest worldwide."
    },
    {
      year: "2019",
      title: "Mithila Festival USA Launched",
      description:
        "The inaugural Mithila Festival USA is organized, along with the groundbreaking exhibition 'Art for SDGs: The Mithila Heritage' at UN Headquarters in New York, in collaboration with the Permanent Mission of Nepal."
    },
    {
      year: "Present",
      title: "Global Cultural Force",
      description:
        "Today, Mithila Center USA works with UN agencies, diplomatic missions, NYC Mayor's Office, Queens Borough Hall, and educational institutions worldwide, using Mithila art as a tool for sustainable development and cultural diplomacy."
    }
  ];

  // -----------------------------
  // KEY FACTS
  // -----------------------------
  const keyFacts = [
    {
      icon: MapPin,
      title: "Location",
      description:
        "Based in New York, USA, with cultural connections spanning Nepal, India, and the global Maithil diaspora across North America and beyond."
    },
    {
      icon: Calendar,
      title: "Established",
      description:
        "Organizing major cultural programs since 2019, including annual festivals, UN exhibitions, and community events as a registered 501(c)(3) non-profit."
    },
    {
      icon: Target,
      title: "Focus Areas",
      description:
        "Art preservation, cultural education, UN SDG alignment, artist empowerment, and cross-cultural dialogue through festivals, exhibitions, and workshops."
    }
  ];

  const partners = [
    "Permanent Mission of Nepal to UN",
    "Consulate General of Nepal, New York",
    "NYC Mayor's Office",
    "Queens Borough Hall",
    "Flushing Town Hall",
    "Apan Foundation",
    "Nepalese American Foundation",
    "Madheshi/Terai Diaspora Associations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ------------------------- */}
      {/* HERO WITH COVER IMAGE */}
      {/* ------------------------- */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={images.hero}
            alt="About Mithila Center USA"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="gradient-text-primary">Mithila Center USA</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A nonprofit cultural organization based in New York, dedicated to preserving, promoting, 
              and globalizing the living heritage of the Mithila region of southern Nepal and northern India.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      {/* OUR STORY SECTION */}
      {/* ------------------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side Image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={images.story}
                alt="Mithila Community Gathering"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mithila Center USA (also known as Mithila Art & Culture Center) was established by
                  a passionate group of Maithil diaspora members who recognized the urgent need to 
                  preserve their ancestral art and culture in a rapidly globalizing world.
                </p>
                <p>
                  Through festivals, exhibitions, educational programs, and international collaborations,
                  the Center uses art and culture as a bridge between communities and as a platform for 
                  social impact. Since 2019, we have been organizing the Mithila Festival USA, major art 
                  exhibitions, and community events that bring together artists, scholars, diaspora 
                  communities, and global audiences.
                </p>
                <p>
                  Mithila art, also known as Madhubani painting, is one of the oldest art forms in the world, 
                  with a history spanning over three millennia. Traditionally created by women on the mud walls 
                  of their homes, these paintings depict mythology, nature, and daily life using natural dyes 
                  and distinctive geometric patterns.
                </p>
                <p>
                  Our flagship program, <strong>"Art for SDGs: The Mithila Heritage"</strong>, connects traditional 
                  Mithila/Madhubani art with the United Nations Sustainable Development Goals (SDGs), positioning 
                  culture as a driver for global awareness and change.
                </p>
              </div>

              <Button asChild className="mt-6 gap-2">
                <Link to="/mission">
                  Our Mission & Vision
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      {/* WHAT WE DO SECTION */}
      {/* ------------------------- */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground">
              We bridge ancient artistic traditions with contemporary global challenges through 
              multiple interconnected programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Sparkles,
                title: "Festivals & Events",
                description:
                  "Annual Mithila Festival USA celebrating Jur Sital, Folk King Salhesh Jayanti, and Maithil cultural traditions."
              },
              {
                icon: Globe,
                title: "UN & Diplomatic Engagement",
                description:
                  "Exhibitions at UN Headquarters, partnerships with Permanent Mission of Nepal, and cultural diplomacy initiatives."
              },
              {
                icon: Heart,
                title: "Artist Empowerment",
                description:
                  "Supporting women and youth artists through workshops, recognition programs, and economic opportunities."
              },
              {
                icon: Building,
                title: "Community Programs",
                description:
                  "Kids workshops, art competitions, expert panels, and educational programs connecting generations."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center group hover:shadow-elevated transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-sindoor mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      {/* TIMELINE */}
      {/* ------------------------- */}
      <section className="py-20 mithila-pattern">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-16">
            Our Journey Through Time
          </h2>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                <div className="glass-card rounded-xl p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      {/* KEY FACTS */}
      {/* ------------------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {keyFacts.map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center">
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      {/* PARTNERS */}
      {/* ------------------------- */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Our Partners & Collaborators
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We work with government bodies, cultural institutions, and community organizations 
              to amplify our impact.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {partners.map((partner, index) => (
                <div key={index} className="glass-card rounded-xl p-4 text-center">
                  <p className="text-sm font-medium text-foreground">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      {/* COMMUNITY GALLERY WITH YOUR IMAGES */}
      {/* ------------------------- */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-foreground text-center mb-12">
            Our Community in Action
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {images.gallery.map((src, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden">
                <img src={src} alt={`Community Event ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- */}
      {/* CALL TO ACTION */}
      {/* ------------------------- */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">Join Our Cultural Movement</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether through donations, volunteering, or spreading awareness, you can help preserve 
            this ancient heritage for future generations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link to="/contact">Get Involved</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/mission">Our Mission</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
