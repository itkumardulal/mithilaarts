import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Star, FileText, Building, Trophy, Scroll, Crown, Users } from 'lucide-react';

const Recognition = () => {
  const proclamations = [
    {
      entity: "NYC Mayor's Office",
      type: "Mayoral Proclamation",
      title: "Mithila Culture and Festival Day",
      description:
        "Official proclamation declaring 'Mithila Culture and Festival Day' to celebrate South Asian heritage and recognize the impact of Mithila Festival USA.",
      year: "Multiple Years",
      significance: "Citywide recognition of Maithil cultural contributions",
      image: "https://i.imgur.com/FVXUrx4.jpeg" // NYC Mayor image
    },
    {
      entity: "U.S. Congress",
      type: "Congressional Proclamation",
      title: "Honoring Mithila Festival USA",
      description:
        "Presented by Congresswoman Grace Meng during the 2021 festival, acknowledging its contribution to cultural promotion and community engagement.",
      year: "2021",
      significance: "Federal recognition of cultural impact",
      image: "https://i.imgur.com/C6bBY95.jpeg" // Congress image
    }
  ];

  const officialEvents = [
    {
      title: "NYC Mayor's Residence Reception",
      description:
        "Official receptions at the NYC Mayor's residence highlighting the Center’s cultural and SDG-focused work.",
      icon: Building
    },
    {
      title: "Queens Borough Hall Events",
      description:
        "Programs and events hosted at Queens Borough Hall demonstrating support for Mithila heritage preservation.",
      icon: Building
    },
    {
      title: "UN Headquarters Exhibitions",
      description:
        "Multiple exhibitions at the UN Headquarters in partnership with the Permanent Mission of Nepal.",
      icon: Award
    }
  ];

  const partnerships = [
    { name: "Permanent Mission of Nepal to UN", type: "Diplomatic" },
    { name: "Consulate General of Nepal, New York", type: "Government" },
    { name: "Apan Foundation", type: "Foundation" },
    { name: "Nepalese American Foundation", type: "Community" },
    { name: "Flushing Town Hall", type: "Cultural Institution" },
    { name: "Madheshi/Terai Diaspora Associations", type: "Community" }
  ];

  const mediaFeatures = [
    { outlet: "Abir Pothi", topic: "Art for SDGs program coverage", type: "Art Media" },
    { outlet: "NEPYORK", topic: "Mithila Festival USA coverage", type: "Diaspora Media" },
    { outlet: "enepalese", topic: "Community event features", type: "Diaspora Media" },
    { outlet: "Patch", topic: "Local community coverage", type: "Local News" },
    { outlet: "OnlineKhabar", topic: "Cultural programming features", type: "Nepal Media" },
    { outlet: "Nepalism.com", topic: "SDG and art education coverage", type: "Diaspora Media" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Trophy className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium">Celebrating Excellence</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Recognition & <span className="gradient-text-primary">Honors</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mithila Center USA has earned recognition from federal, state, and city government
              institutions for cultural preservation and SDG-aligned programming.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-2xl overflow-hidden relative">
              <img
                src="https://i.imgur.com/C6bBY95.jpeg"
                alt="Recognition Ceremony"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay flex items-end p-8">
                <p className="text-white font-playfair text-xl">
                  Honoring leadership and cultural contributions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Government Proclamations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-6">
            Government Proclamations
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Official recognition from federal, state, and city governments acknowledging our cultural
            impact and community leadership.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {proclamations.map((proc, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-haldi flex items-center justify-center">
                        <Scroll className="w-7 h-7 text-accent-foreground" />
                      </div>
                      <div>
                        <span className="text-sm text-primary font-medium">{proc.year}</span>
                        <h3 className="font-playfair text-xl font-semibold">{proc.entity}</h3>
                      </div>
                    </div>

                    <p className="text-secondary font-medium mb-2">
                      {proc.type}: {proc.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {proc.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary">{proc.significance}</span>
                    </div>
                  </div>

                  {/* Proclamation Image */}
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src={proc.image}
                      alt={proc.entity}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            Official Events & Receptions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {officialEvents.map((event, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 group hover:shadow-elevated transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <event.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-muted-foreground text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-6">
            Key Partnerships
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our work is strengthened by partnerships with government bodies, cultural institutions,
            foundations, and community organizations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center group hover:bg-primary/5 transition-colors"
              >
                <Users className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-playfair font-semibold text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">Media Coverage</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold">{item.outlet}</p>
                  <p className="text-sm text-muted-foreground">{item.topic}</p>
                  <p className="text-xs text-primary mt-1">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            Recognition Moments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "Congressional Recognition",
              "Mayor's Proclamation",
              "UN Exhibition Opening",
              "Award Ceremony",
              "VIP Reception",
              "Community Honor",
              "Artist Recognition",
              "Partnership Signing"
            ].map((label, index) => (
              <div key={index} className="aspect-square bg-muted rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/5 to-primary/5">
                  <p className="text-muted-foreground text-xs text-center px-2">[{label} Photo]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-gradient-sindoor text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <blockquote className="font-playfair text-2xl md:text-3xl italic mb-8 leading-relaxed">
              "The Mithila Center USA has done remarkable work in preserving an ancient art form
              while making it relevant to global challenges."
            </blockquote>
            <p className="text-lg opacity-90">— Cultural Heritage Foundation</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Partner With an Award-Winning Organization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our recognition makes us an ideal partner for cultural, educational, and global
            engagement programs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Explore Partnership</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recognition;
