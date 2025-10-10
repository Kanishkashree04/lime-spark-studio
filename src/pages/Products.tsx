import { Package, Cpu, Cloud, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    icon: <Cpu className="w-12 h-12 text-primary" />,
    name: "SmartCore Platform",
    description: "Advanced analytics and automation platform that streamlines your operations",
    features: ["Real-time Analytics", "AI-Powered Insights", "Automated Workflows"],
  },
  {
    icon: <Cloud className="w-12 h-12 text-primary" />,
    name: "CloudSync Pro",
    description: "Seamless cloud integration solution for enterprise-level data management",
    features: ["Multi-Cloud Support", "99.9% Uptime", "Advanced Security"],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    name: "MobileFirst Suite",
    description: "Complete mobile solution for modern businesses on the go",
    features: ["Cross-Platform", "Offline Mode", "Push Notifications"],
  },
  {
    icon: <Package className="w-12 h-12 text-primary" />,
    name: "Enterprise Pack",
    description: "All-in-one solution combining our best products for maximum efficiency",
    features: ["All Features Included", "Priority Support", "Custom Integration"],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our suite of innovative products designed to propel your business forward
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{product.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              <div className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-12 text-center border border-primary/30 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can tailor our products to meet your specific business requirements
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
