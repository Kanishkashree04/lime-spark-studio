import { Wrench, Code, HeadphonesIcon, Rocket, Settings, BarChart } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "Custom Development",
    description: "Tailored software solutions built to your exact specifications using cutting-edge technologies",
  },
  {
    icon: <Wrench className="w-12 h-12 text-primary" />,
    title: "System Integration",
    description: "Seamlessly connect your existing systems and tools for optimal workflow efficiency",
  },
  {
    icon: <HeadphonesIcon className="w-12 h-12 text-primary" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support to ensure your operations never miss a beat",
  },
  {
    icon: <Rocket className="w-12 h-12 text-primary" />,
    title: "Digital Transformation",
    description: "Complete digital overhaul to modernize your business and boost productivity",
  },
  {
    icon: <Settings className="w-12 h-12 text-primary" />,
    title: "Maintenance & Updates",
    description: "Regular system maintenance and updates to keep your software running smoothly",
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Analytics & Insights",
    description: "Data-driven insights and reporting to help you make informed business decisions",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive solutions and support to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="bg-secondary rounded-2xl p-12 border border-border animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs" },
              { step: "02", title: "Planning", desc: "Strategic roadmap creation" },
              { step: "03", title: "Execution", desc: "Implementing solutions" },
              { step: "04", title: "Support", desc: "Ongoing optimization" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-3">{item.step}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
