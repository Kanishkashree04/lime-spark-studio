import { Building2, Handshake, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const strategicPartners = [
  { name: "Kaar Technologies", industry: "ERP Consulting and Implementation", partnership: "Strategic Partner" },
  { name: "Delaware", industry: "Global IT Consulting & Digital Transformation", partnership: "Strategic Partner" },
];

const majorClients = [
  { name: "VOLVO", industry: "Automotive and Manufacturing" },
  { name: "HARMAN", industry: "Connected Technologies & Audio Equipment" },
  { name: "SCHWING Stetter", industry: "Construction & Engineering Equipment" },
  { name: "7Cars-Autodoc", industry: "Automotive Service & Digital Automation" },
];

const clientAlliances = [
  { name: "Haas Automation Inc.", industry: "Global Manufacturing Solutions" },
];

const Partners = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Strategic Partners & <span className="text-primary">Client Alliances</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Collaborating with industry leaders to deliver exceptional value across the technology landscape
          </p>
        </div>

        {/* Strategic Partners */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <Handshake className="w-10 h-10 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Strategic Partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {strategicPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border-2 border-primary/40 hover:border-primary transition-all hover:scale-105 animate-fade-in shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                  <Building2 className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                <p className="text-muted-foreground mb-3">{partner.industry}</p>
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full text-sm text-primary font-semibold">
                  {partner.partnership}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Major Client Alliances */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-8 animate-fade-in">
            <Award className="w-10 h-10 text-primary mr-4" />
            <h2 className="text-3xl font-bold">Major Client Alliances</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorClients.map((client, index) => (
              <div
                key={index}
                className="bg-secondary p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.industry}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Alliances */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 animate-fade-in">Client Alliances</h2>
          <div className="max-w-md mx-auto">
            {clientAlliances.map((client, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                <p className="text-sm text-muted-foreground">{client.industry}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border animate-fade-in">
              <Building2 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Why Partner With Us</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Deep technical expertise in SAP and open-source technologies
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Proven track record with global enterprises
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Commitment to innovation and quality
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Collaborative approach to problem-solving
                </li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Handshake className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Strategic technology partnerships
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Client project collaborations
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Co-development initiatives
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  Knowledge sharing and innovation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border-2 border-primary/30 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our network of industry-leading partners and create impactful solutions together
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Start a Conversation
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Partners;
