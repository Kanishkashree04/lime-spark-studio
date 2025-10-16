import React, { useState, useEffect } from 'react';
import { Mail, Globe, MapPin, Phone, MessageSquare, Star } from 'lucide-react';
import { contentApi, WebsiteContent } from '../services/contentApi';

// Icon mapping for dynamic icons
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Mail,
  Globe,
  MapPin,
  Phone,
  MessageSquare,
  Star
};

const Contact: React.FC = () => {
  const [content, setContent] = useState<WebsiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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

  const { contact } = content;

  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1 className="page-title">{contact.header.title}</h1>
          <p className="page-subtitle">{contact.header.subtitle}</p>
        </div>
      </section>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="section-title">Get in Touch</h2>
              <div className="contact-info-cards">
                {contact.contactInfo.map((info) => {
                  const IconComponent = iconMap[info.icon] || Star;
                  
                  const content = info.link ? (
                    <a href={info.link} className="contact-link">
                      {info.content}
                    </a>
                  ) : (
                    <span className="contact-text">{info.content}</span>
                  );

                  return (
                    <div key={info.id} className="contact-info-card">
                      <div className="contact-info-icon">
                        <IconComponent size={24} />
                      </div>
                      <div className="contact-info-content">
                        <h3 className="contact-info-title">{info.title}</h3>
                        {content}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">{contact.form.title}</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  {contact.form.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;