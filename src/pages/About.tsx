import { Target, Eye, Lightbulb, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">About <span className="text-primary">Slash Labs</span></h1>
          <p className="text-xl text-muted-foreground">
            A professional technology solutions company based in Sivakasi, Tamil Nadu, committed to 
            delivering innovative, reliable, and scalable digital solutions.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Founded on January 16, 2024</p>
        </div>

        {/* Vision */}
        <section className="mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-10 border-2 border-primary/30 shadow-lg">
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              "To bring rural tech talents to the global technology stage, empowering them to create impactful 
              solutions while delivering innovative SAP and open-source solutions that drive operational efficiency, 
              seamless digital integration, and measurable business value worldwide."
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16 animate-fade-in">
          <div className="bg-secondary rounded-2xl p-10 border border-border">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-primary mr-4" />
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              "To harness deep technical expertise and creative problem-solving to deliver high-performance IT solutions, including:
            </p>
            <ul className="space-y-3">
              {[
                "Scalable web and mobile applications using open-source frameworks",
                "Custom SAP ABAP development and seamless system integration",
                "Performance optimization and S/4HANA readiness",
                "End-to-end project delivery with strong quality assurance",
              ].map((item, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              We are committed to nurturing rural tech talent, fostering innovation, and enabling organizations 
              to achieve sustainable growth, digital coherence, and transformative business outcomes."
            </p>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Core Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb className="w-10 h-10 text-primary" />,
                title: "Innovation & Collaboration",
                description: "Encouraging innovation, collaboration, and continuous learning in everything we do",
              },
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: "Quality Assurance",
                description: "End-to-end project delivery with strong quality assurance and attention to detail",
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-primary" />,
                title: "Digital Transformation",
                description: "Supporting clients through comprehensive digital transformation journeys",
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Rural Tech Talent",
                description: "Bringing rural tech talents to the global technology stage",
              },
              {
                icon: <Target className="w-10 h-10 text-primary" />,
                title: "Enterprise Solutions",
                description: "Delivering enterprise-grade SAP development and integration services",
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-primary" />,
                title: "Open Source Excellence",
                description: "Building scalable applications using cutting-edge open-source frameworks",
              },
            ].map((focus, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{focus.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{focus.title}</h3>
                <p className="text-sm text-muted-foreground">{focus.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location Banner */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Proudly Based in Sivakasi, Tamil Nadu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine deep local expertise with a global perspective on technical best practices, 
            serving as the technical backbone for businesses worldwide.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
