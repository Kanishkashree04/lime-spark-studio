import { Building2, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const partners = [
  { name: "TechCorp Global", industry: "Technology", partnership: "Strategic Partner" },
  { name: "DataSync Solutions", industry: "Data Analytics", partnership: "Integration Partner" },
  { name: "CloudWave Inc", industry: "Cloud Services", partnership: "Technology Partner" },
  { name: "SecureNet Systems", industry: "Cybersecurity", partnership: "Security Partner" },
  { name: "Innovation Labs", industry: "R&D", partnership: "Research Partner" },
  { name: "GlobalTrade LLC", industry: "Enterprise", partnership: "Enterprise Partner" },
];

const Partners = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Partners</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Collaborating with industry leaders to deliver exceptional value
          </p>
        </div>

        {/* Partnership Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border animate-fade-in">
              <Building2 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Why Partner With Us</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Access to cutting-edge technology and resources
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Collaborative innovation opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Shared growth and success
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Extended market reach
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Handshake className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Partnership Types</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Strategic Technology Partners
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Integration Partners
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Reseller Partners
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  Research & Development Partners
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partners List */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Trusted Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{partner.industry}</p>
                <div className="inline-block px-3 py-1 bg-primary/20 rounded-full text-xs text-primary font-medium">
                  {partner.partnership}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-12 text-center border border-primary/30 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of industry-leading partners and unlock new opportunities for growth
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Become a Partner
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Partners;
