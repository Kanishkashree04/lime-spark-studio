import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">About <span className="text-primary">InnovateCorp</span></h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to revolutionize the industry with innovative solutions that drive real results
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20 animate-fade-in">
          <div className="bg-secondary rounded-2xl p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2015, InnovateCorp emerged from a simple yet powerful vision: to bridge the gap 
                between cutting-edge technology and practical business solutions. What started as a small team 
                of passionate innovators has grown into a leading provider of transformative products and services.
              </p>
              <p>
                Today, we serve thousands of clients worldwide, helping them navigate the complexities of digital 
                transformation and achieve sustainable growth. Our commitment to excellence and innovation remains 
                at the core of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Lightbulb className="w-10 h-10 text-primary" />,
                title: "Innovation",
                description: "We constantly push boundaries to deliver cutting-edge solutions",
              },
              {
                icon: <Target className="w-10 h-10 text-primary" />,
                title: "Focus",
                description: "We stay laser-focused on delivering value to our clients",
              },
              {
                icon: <Award className="w-10 h-10 text-primary" />,
                title: "Excellence",
                description: "We strive for excellence in every project we undertake",
              },
              {
                icon: <Users className="w-10 h-10 text-primary" />,
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnership",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary/10 rounded-2xl p-12 border border-primary/30 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
