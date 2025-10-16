import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Database, Code2, TrendingUp, Users, Target, Eye, Star, Settings, BookOpen } from 'lucide-react';
import { contentApi, WebsiteContent } from '../services/contentApi';

// Icon mapping for dynamic icons
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Database,
  Code2,
  TrendingUp,
  Users,
  Target,
  Eye,
  Star,
  Settings,
  BookOpen
};

const Services: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Set initial active category based on URL parameter
  const getInitialCategory = (): 'all' | 'technical' | 'functional' => {
    if (category === 'technical') return 'technical';
    if (category === 'functional') return 'functional';
    return 'all';
  };
  
  const [activeCategory, setActiveCategory] = useState<'all' | 'technical' | 'functional'>(getInitialCategory);

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

  // Update active category when URL parameter changes
  useEffect(() => {
    setActiveCategory(getInitialCategory());
  }, [category]);

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

  // Get services from dedicated fields first, fallback to whatWeDo with category filter
  const technicalServices = content.technicalServices?.length > 0 
    ? content.technicalServices 
    : content.whatWeDo.filter(service => service.category === 'technical');
  const functionalServices = content.functionalServices?.length > 0 
    ? content.functionalServices 
    : content.whatWeDo.filter(service => service.category === 'functional');

  const getFilteredServices = () => {
    switch (activeCategory) {
      case 'technical':
        return technicalServices;
      case 'functional':
        return functionalServices;
      default:
        return content.whatWeDo;
    }
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Comprehensive SAP solutions covering both technical development and functional expertise 
              to drive your business transformation
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="services-filter">
        <div className="container">
          <div className="filter-tabs">
            <Link 
              to="/services"
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
            >
              All Services ({content.whatWeDo.length})
            </Link>
            <Link 
              to="/services/technical"
              className={`filter-tab ${activeCategory === 'technical' ? 'active' : ''}`}
            >
              Technical ({technicalServices.length})
            </Link>
            <Link 
              to="/services/functional"
              className={`filter-tab ${activeCategory === 'functional' ? 'active' : ''}`}
            >
              Functional ({functionalServices.length})
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          {activeCategory === 'all' && (
            <>
              {/* Technical Services Section */}
              <div className="services-category">
                <div className="category-header">
                  <h2 className="category-title">
                    <Settings className="category-icon" />
                    Technical Services
                  </h2>
                  <p className="category-description">
                    Development, integration, and technical optimization services
                  </p>
                </div>
                <div className="services-grid">
              {technicalServices.map((service) => {
                const IconComponent = iconMap[service.icon] || Star;
                return (
                  <div key={service.id} className="service-card">
                    <div className="service-icon">
                      <IconComponent size={48} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    {/* Enhanced content for technical services */}
                    {'technologies' in service && service.technologies && service.technologies.length > 0 && (
                      <div className="service-tech-stack">
                        <h4 className="tech-label">Technologies:</h4>
                        <div className="tech-tags">
                          {service.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {'features' in service && service.features && service.features.length > 0 && (
                      <div className="service-features">
                        <h4 className="features-label">Key Features:</h4>
                        <ul className="features-list">
                          {service.features.map((feature, index) => (
                            <li key={index} className="feature-item">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="service-category-badge technical">Technical</div>
                  </div>
                );
              })}
                </div>
              </div>

              {/* Functional Services Section */}
              <div className="services-category">
                <div className="category-header">
                  <h2 className="category-title">
                    <BookOpen className="category-icon" />
                    Functional Services
                  </h2>
                  <p className="category-description">
                    Business process optimization and SAP functional module expertise
                  </p>
                </div>
                <div className="services-grid">
              {functionalServices.map((service) => {
                const IconComponent = iconMap[service.icon] || Star;
                const getBusinessAreaLabel = (area: string) => {
                  const labels = {
                    sales: 'Sales & Distribution',
                    finance: 'Finance & Control',
                    material: 'Material Management',
                    other: 'Other'
                  };
                  return labels[area as keyof typeof labels] || area;
                };
                
                const getBusinessAreaColor = (area: string) => {
                  const colors = {
                    sales: 'sales-area',
                    finance: 'finance-area',
                    material: 'material-area',
                    other: 'other-area'
                  };
                  return colors[area as keyof typeof colors] || 'other-area';
                };
                
                return (
                  <div key={service.id} className="service-card">
                    <div className="service-icon">
                      <IconComponent size={48} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    {/* Enhanced content for functional services */}
                    {'businessArea' in service && service.businessArea && (
                      <div className="business-area">
                        <span className={`business-area-badge ${getBusinessAreaColor(service.businessArea)}`}>
                          {getBusinessAreaLabel(service.businessArea)}
                        </span>
                      </div>
                    )}
                    
                    {'modules' in service && service.modules && service.modules.length > 0 && (
                      <div className="service-modules">
                        <h4 className="modules-label">Modules:</h4>
                        <ul className="modules-list">
                          {service.modules.map((module, index) => (
                            <li key={index} className="module-item">{module}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="service-category-badge functional">Functional</div>
                  </div>
                );
              })}
                </div>
              </div>
            </>
          )}

          {activeCategory !== 'all' && (
            <div className="services-grid">
              {getFilteredServices().map((service) => {
                const IconComponent = iconMap[service.icon] || Star;
                
                // Helper functions for functional services
                const getBusinessAreaLabel = (area: string) => {
                  const labels = {
                    sales: 'Sales & Distribution',
                    finance: 'Finance & Control',
                    material: 'Material Management',
                    other: 'Other'
                  };
                  return labels[area as keyof typeof labels] || area;
                };
                
                const getBusinessAreaColor = (area: string) => {
                  const colors = {
                    sales: 'sales-area',
                    finance: 'finance-area',
                    material: 'material-area',
                    other: 'other-area'
                  };
                  return colors[area as keyof typeof colors] || 'other-area';
                };
                
                return (
                  <div key={service.id} className="service-card">
                    <div className="service-icon">
                      <IconComponent size={48} />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    {/* Enhanced content for technical services */}
                    {activeCategory === 'technical' && 'technologies' in service && service.technologies && service.technologies.length > 0 && (
                      <div className="service-tech-stack">
                        <h4 className="tech-label">Technologies:</h4>
                        <div className="tech-tags">
                          {service.technologies.map((tech, index) => (
                            <span key={index} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeCategory === 'technical' && 'features' in service && service.features && service.features.length > 0 && (
                      <div className="service-features">
                        <h4 className="features-label">Key Features:</h4>
                        <ul className="features-list">
                          {service.features.map((feature, index) => (
                            <li key={index} className="feature-item">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Enhanced content for functional services */}
                    {activeCategory === 'functional' && 'businessArea' in service && service.businessArea && (
                      <div className="business-area">
                        <span className={`business-area-badge ${getBusinessAreaColor(service.businessArea)}`}>
                          {getBusinessAreaLabel(service.businessArea)}
                        </span>
                      </div>
                    )}
                    
                    {activeCategory === 'functional' && 'modules' in service && service.modules && service.modules.length > 0 && (
                      <div className="service-modules">
                        <h4 className="modules-label">Modules:</h4>
                        <ul className="modules-list">
                          {service.modules.map((module, index) => (
                            <li key={index} className="module-item">{module}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className={`service-category-badge ${activeCategory}`}>
                      {activeCategory === 'technical' ? 'Technical' : 'Functional'}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Let's discuss how our technical and functional expertise can help transform your business
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">
                Contact Us
              </a>
              <a href="/about" className="cta-button secondary">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;