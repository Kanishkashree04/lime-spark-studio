import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Code2, Lightbulb, Award, TrendingUp, Users, Target, Eye, Star } from 'lucide-react';
import { contentApi, WebsiteContent } from '../services/contentApi';

// Icon mapping for dynamic icons
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Database,
  Code2,
  Lightbulb,
  Award,
  TrendingUp,
  Users,
  Target,
  Eye,
  Star
};

const Home: React.FC = () => {
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const data = await contentApi.getContent();
        setContent(data);
      } catch (error) {
        console.error('Failed to load content:', error);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="error-container">
        <p>Failed to load content. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">{content.hero.title}</h1>
            <p className="hero-subtitle">{content.hero.subtitle}</p>
            {content.hero.foundedDate && (
              <p className="hero-founded">{content.hero.foundedDate}</p>
            )}
            <Link to="/contact" className="hero-cta">
              Get Started
              <ArrowRight className="cta-icon" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            We provide comprehensive SAP solutions across technical and functional domains
          </p>
          
          {/* Service Categories Overview */}
          <div className="service-categories">
            <div className="category-card">
              <div className="category-icon">
                <Database size={40} />
              </div>
              <h3 className="category-title">Technical Services</h3>
              <p className="category-description">
                ABAP development, system integration, and technical optimization
              </p>
              <div className="category-count">
                {content.whatWeDo.filter(s => s.category === 'technical').length} Services
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-icon">
                <Users size={40} />
              </div>
              <h3 className="category-title">Functional Services</h3>
              <p className="category-description">
                SAP modules: SD, FI/CO, MM and business process optimization
              </p>
              <div className="category-count">
                {content.whatWeDo.filter(s => s.category === 'functional').length} Services
              </div>
            </div>
          </div>
          
          {/* Featured Services Preview */}
          <div className="services-preview">
            <h3 className="preview-title">Featured Services</h3>
            <div className="services-grid">
              {content.whatWeDo.slice(0, 4).map((service) => {
                const IconComponent = iconMap[service.icon] || Star;
                return (
                  <div key={service.id} className="service-card">
                    <div className="service-icon">
                      <IconComponent size={48} />
                    </div>
                    <h4 className="service-title">{service.title}</h4>
                    <p className="service-description">{service.description}</p>
                    <div className={`service-category-badge ${service.category}`}>
                      {service.category === 'technical' ? 'Technical' : 'Functional'}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="services-cta">
              <Link to="/services" className="view-all-services">
                View All Services
                <ArrowRight className="cta-icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="focus-areas">
        <div className="container">
          <h2 className="section-title">Our Core Focus Areas</h2>
          <div className="focus-grid">
            {content.coreFocusAreas.map((focus, index) => (
              <div key={focus.id} className="focus-item">
                <div className="focus-number">{index + 1}</div>
                <p className="focus-text">{focus.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {content.stats.map((stat) => (
              <div key={stat.id} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{content.cta.title}</h2>
            <p className="cta-description">{content.cta.description}</p>
            <Link to="/contact" className="cta-button">
              {content.cta.buttonText}
              <ArrowRight className="cta-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;