import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, TrendingUp, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Welcome to
              <span className="text-primary"> Slash Labs</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Empowering businesses through innovative SAP solutions and cutting-edge open-source development. 
              Based in Sivakasi, Tamil Nadu.
            </p>
            <p className="text-lg text-muted-foreground">
              Founded on January 16, 2024
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">What We Do</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We deliver innovative, reliable, and scalable digital solutions across SAP Technical Consulting 
            and Open Source Development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Database className="w-12 h-12 text-primary" />,
                title: "SAP Technical Consulting",
                description: "Enterprise-grade SAP ABAP development, system integration, performance optimization, and S/4HANA readiness assessments",
              },
              {
                icon: <Code2 className="w-12 h-12 text-primary" />,
                title: "Open Source Development",
                description: "Scalable web and mobile applications using modern frameworks like React, Node.js, Angular, and PostgreSQL",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Core Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Building scalable web and mobile applications",
              "Enterprise-grade SAP development and integration",
              "Innovation, collaboration, and continuous learning",
              "End-to-end project delivery with quality assurance",
              "Supporting digital transformation journeys",
              "Nurturing rural tech talent for global impact",
            ].map((focus, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-muted-foreground">{focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Major Open Source Projects</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Strategic Partners & Clients</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-primary mb-2">2024</div>
              <div className="text-muted-foreground">Established & Growing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-12 text-center border-2 border-primary/30 shadow-lg">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Slash Labs can elevate your SAP landscape or build your next digital solution
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
