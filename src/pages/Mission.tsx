import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Eye, Target, Heart, Lightbulb, Users, Globe, Shield, Leaf, GraduationCap, Handshake } from 'lucide-react';

const Mission = () => {
  const missionPillars = [
    {
      icon: Shield,
      title: "Preserve Heritage",
      description: "Preserve and promote Mithila heritage—art, literature, language, festivals, cuisine, and living traditions—within the United States and worldwide."
    },
    {
      icon: Target,
      title: "Art for Social Good",
      description: "Leverage art for social good by aligning programs with the United Nations SDGs, using visual storytelling to highlight issues such as gender equality, quality education, climate action, and life on land."
    },
    {
      icon: Users,
      title: "Empower Artists",
      description: "Empower artists, especially women and youth, by providing platforms, workshops, recognition, and economic opportunities for their creative contributions."
    },
    {
      icon: Globe,
      title: "Cross-Cultural Dialogue",
      description: "Foster cross-cultural dialogue among Nepali, Indian, and global communities, promoting harmony, inclusion, and shared understanding."
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Cultural Authenticity",
      description: "Preserving the genuine traditions, techniques, and spiritual essence of Mithila art while respecting its origins in the Mithila region of Nepal and India."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Adapting ancient wisdom to address contemporary challenges including climate change, gender equality, and sustainable development through SDG-aligned programming."
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Supporting Maithil artists, especially women who have been the primary custodians of this tradition for millennia, through fair practices and skill development."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building bridges with UN agencies, diplomatic missions, cultural institutions, and diaspora communities for collective impact."
    }
  ];

  const visionGoals = [
    "Mithila heritage recognized as a global cultural asset",
    "Museum of Mithila Heritage (MoM) in New York",
    "Self-sustaining artist cooperatives worldwide",
    "Digital archive accessible to researchers globally",
    "SDG-aligned programming reaching every continent",
    "Youth leadership programs for cultural ambassadors"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mission & <span className="gradient-text-primary">Vision</span>
            </h1>
      
            <p className="text-xl text-muted-foreground">
              Guided by ancient wisdom, driven by modern purpose—using art as a force for 
              creativity, sustainability, and community resilience.
            </p>
           <br/>
                      <img
      src="https://i.imgur.com/weZ3iPx.jpeg"
      alt="Mithila Art Cover"
      className="w-full h-full object-cover opacity-6"
    />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Mission Card */}
            <div className="relative group mb-12">
              <div className="absolute inset-0 bg-gradient-sindoor rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative glass-card rounded-3xl p-10 md:p-12">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To preserve, promote, and practice the art, culture, and heritage of the Mithila region 
                  by creating platforms for cultural exchange, supporting artist communities, and using 
                  traditional art forms to address contemporary global challenges through alignment with 
                  the United Nations Sustainable Development Goals.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {missionPillars.map((pillar, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <pillar.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{pillar.title}</h4>
                        <p className="text-sm text-muted-foreground">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-peacock rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative glass-card rounded-3xl p-10 md:p-12">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Mithila Center USA envisions a world where Mithila heritage is recognized as a global 
                  cultural asset—not only as an ancient tradition but as a contemporary force for creativity, 
                  sustainability, and community resilience. We aspire to build institutions, festivals, and 
                  educational programs that make Mithila art and culture accessible to children, families, 
                  policymakers, and international audiences, while grounding them in values of peace, equality, 
                  environmental stewardship, and human dignity.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {visionGoals.map((goal, index) => (
                    <div key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30 mithila-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every initiative, partnership, and program we undertake 
              in our mission to preserve and promote Mithila heritage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 text-center group hover:shadow-elevated transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-haldi mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
{/* SDG Alignment Section */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://i.imgur.com/7PZWNl6.jpeg"
              alt="SDG & Mithila Art Integration 1"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://i.imgur.com/lilSfZh.jpeg"
              alt="SDG & Mithila Art Integration 2"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
            Aligned with Global Goals
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our flagship program "Art for SDGs: The Mithila Heritage" directly connects traditional 
            art with the United Nations Sustainable Development Goals. Each year, we focus on specific 
            SDGs through themed exhibitions, workshops, and community programs:
          </p>
          <ul className="space-y-3 text-muted-foreground">
            {[
              "SDG 4 – Quality Education (2022)",
              "SDG 5 – Gender Equality (2023)",
              "SDG 13 – Climate Action (2024)",
              "SDG 15 – Life on Land (2025)"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 gap-2">
            <Link to="/art-for-sdgs">
              Learn About Art for SDGs
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 bg-gradient-peacock text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="font-playfair text-3xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Whether through donations, volunteering, or spreading awareness, you can help preserve 
            this ancient heritage for future generations while contributing to global sustainable development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="secondary" size="lg" className="bg-background text-secondary hover:bg-background/90">
              <Link to="/contact">Support Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;