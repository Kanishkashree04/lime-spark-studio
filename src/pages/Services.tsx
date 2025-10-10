import { Code, Workflow, Zap, Cloud, Settings, BarChart } from "lucide-react";

const services = [
  {
    icon: <Code className="w-12 h-12 text-primary" />,
    title: "SAP ABAP Development & Customization",
    description: "Custom reports and interfaces, enhancements (BAdIs, User Exits), forms (Smart Forms, Adobe Forms), and workflow implementation",
  },
  {
    icon: <Workflow className="w-12 h-12 text-primary" />,
    title: "System Integration & Connectivity",
    description: "SAP PI/PO, REST/SOAP integrations ensuring unified data flow across all enterprise systems",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Performance Tuning & Optimization",
    description: "Database access optimization, custom code efficiency improvements, and architecture enhancements for speed and reliability",
  },
  {
    icon: <Cloud className="w-12 h-12 text-primary" />,
    title: "S/4HANA Readiness & Migration",
    description: "S/4HANA readiness assessments, custom code remediation using ATC tools, and cloud integration with SAP BTP enablement",
  },
  {
    icon: <Settings className="w-12 h-12 text-primary" />,
    title: "Custom Development & Enhancement",
    description: "Tailored SAP development solutions built to your exact specifications with focus on scalability and maintainability",
  },
  {
    icon: <BarChart className="w-12 h-12 text-primary" />,
    title: "Technical Optimization & Support",
    description: "Ongoing technical support, system monitoring, and continuous optimization to ensure maximum ROI on SAP investment",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            SAP Technical <span className="text-primary">Consulting</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Slash Labs is a specialized IT solutions provider dedicated to optimizing enterprise resource 
            planning (ERP) landscapes. We combine deep local expertise with global technical best practices 
            to transform and enhance your SAP ecosystem.
          </p>
        </div>

        {/* Intro Section */}
        <section className="mb-16 animate-fade-in">
          <div className="bg-card rounded-2xl p-10 border-2 border-primary/30 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              We serve as the technical backbone for enterprise systems, ensuring they are robust, scalable, 
              and fully aligned with business objectives. Our core strength lies in transforming SAP ecosystems 
              to enable maximum return on investment through tailored development and strategic system management.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Core SAP Technical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Capabilities */}
        <section className="mb-16 animate-fade-in">
          <div className="bg-secondary rounded-2xl p-10 border border-border">
            <h2 className="text-3xl font-bold mb-8 text-center">Advanced SAP Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">S/4HANA Readiness</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Comprehensive readiness assessments</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Custom code remediation using ATC tools</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Migration planning and execution</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Cloud & Integration</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">SAP BTP enablement and setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Cloud integration architecture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">Hybrid landscape optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center animate-fade-in border-2 border-primary/30">
          <h2 className="text-3xl font-bold mb-4">Why Choose Slash Labs for SAP?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We combine technical excellence with strategic thinking to ensure your SAP systems deliver 
            maximum business value. Our team brings deep expertise in ABAP development, system integration, 
            and performance optimization to every project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-card p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-primary">Technical Excellence</h4>
              <p className="text-sm text-muted-foreground">Deep ABAP expertise and SAP best practices</p>
            </div>
            <div className="bg-card p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-primary">Business Focus</h4>
              <p className="text-sm text-muted-foreground">Solutions aligned with your strategic goals</p>
            </div>
            <div className="bg-card p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-primary">Proven Results</h4>
              <p className="text-sm text-muted-foreground">Track record with global enterprises</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
