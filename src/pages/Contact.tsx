import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Globe, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Slash Labs. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Contact <span className="text-primary">Slash Labs</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss how we can elevate your SAP landscape or build your next digital solution. 
            Reach out to our consulting team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email",
                content: "contact@slashlabs.tech",
                link: "mailto:contact@slashlabs.tech",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Website",
                content: "www.slashlabs.tech",
                link: "https://www.slashlabs.tech",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Location",
                content: "Sivakasi, Tamil Nadu, India",
                link: null,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border-2 border-border hover:border-primary/50 transition-all animate-fade-in shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-muted-foreground hover:text-primary transition-colors block break-words"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card p-8 md:p-10 rounded-xl border-2 border-border animate-fade-in shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="bg-background border-border"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project or inquiry..."
                  rows={6}
                  required
                  className="bg-background border-border"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center animate-fade-in border-2 border-primary/30">
          <h2 className="text-3xl font-bold mb-4">Founded January 16, 2024</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Based in Sivakasi, Tamil Nadu, Slash Labs combines deep local expertise with a global perspective 
            on technical best practices, serving as the technical backbone for businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
