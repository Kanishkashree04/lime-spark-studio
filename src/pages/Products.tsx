import { Car, Users, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    icon: <Car className="w-12 h-12 text-primary" />,
    name: "7Cars-Autodoc",
    subtitle: "Car Service & Workshop Management Platform",
    description: "Comprehensive car service and workshop management system designed to help service centers manage bookings, inventory, and payments efficiently.",
    features: [
      "Vehicle registration and service tracking",
      "Diagnostic reports and pricing management",
      "Real-time analytics and revenue reports",
      "Payment integration and notifications",
    ],
    tech: "Node.js, Express.js, React.js, PostgreSQL, AWS S3, Firebase",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    name: "ActorsConnect",
    subtitle: "Professional Networking for Entertainment Industry",
    description: "Specialized networking platform connecting actors, casting directors, and production houses for seamless talent discovery and casting workflows.",
    features: [
      "Professional profiles with headshots and showreels",
      "Casting management and audition scheduling",
      "In-app messaging and reminders",
      "Admin verification and analytics",
    ],
    tech: "React.js, Node.js, PostgreSQL, Cloudinary, ElasticSearch",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    name: "Payroll Management System",
    subtitle: "HR & Employee Administration",
    description: "Complete HR and payroll automation solution for SMEs managing attendance, salary computation, tax deductions, and compliance.",
    features: [
      "Employee master data and attendance tracking",
      "Automatic salary generation and payslips",
      "PF, ESI, and tax calculation automation",
      "Admin dashboards for HR operations",
    ],
    tech: "React.js, Node.js, MongoDB",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-primary" />,
    name: "Crackers ERP",
    subtitle: "Inventory & Billing for Fireworks Sellers",
    description: "Specialized enterprise solution for fireworks sellers in Sivakasi, streamlining stock management, order processing, and sales billing.",
    features: [
      "Stock tracking and order handling",
      "Automatic WhatsApp & Email invoicing",
      "Safety documentation and compliance",
      "Real-time dashboards and reporting",
    ],
    tech: "Angular, Node.js, PostgreSQL",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Open Source <span className="text-primary">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Slash Labs' Open Source Division focuses on developing high-impact digital products using 
            cutting-edge frameworks and open technologies. We've successfully completed four major projects since inception.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card p-8 md:p-10 rounded-2xl border-2 border-border hover:border-primary/50 transition-all animate-fade-in shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center">
                    {product.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary font-semibold mb-4">{product.subtitle}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-secondary p-4 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Technical Stack: </span>
                      <span className="text-muted-foreground">{product.tech}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border-2 border-primary/30 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can develop tailored open-source solutions to meet your specific business requirements
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
