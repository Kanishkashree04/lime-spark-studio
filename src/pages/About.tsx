import React, { useState, useEffect } from 'react';
import { Lightbulb, Award, TrendingUp, Users, Target, Eye, Star, Cart, Heart } from 'lucide-react';
import { contentApi, WebsiteContent } from '../services/contentApi';

// Icon mapping for dynamic icons
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Lightbulb,
  Award,
  TrendingUp,
  Users,
  Target,
  Eye,
  Star
};

const About: React.FC = () => {
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

  const { about } = content;

  return (
    <div className="about">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <h1 className="page-title">{about.header.title}</h1>
          <p className="page-subtitle">{about.header.subtitle}</p>
          <p className="founded-date">{about.header.foundedDate}</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-vision">
        <div className="container">
          <div className="vision-content">
            <h2 className="section-title">{about.vision.title}</h2>
            <p className="vision-text">{about.vision.content}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <h2 className="section-title">{about.mission.title}</h2>
          <p className="mission-intro">{about.mission.intro}</p>
          
          <ul className="mission-points">
            {about.mission.points.map((point, index) => (
              <li key={index} className="mission-point">
                {point}
              </li>
            ))}
          </ul>
          
          <p className="mission-conclusion">{about.mission.conclusion}</p>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="about-focus-areas">
        <div className="container">
          <h2 className="section-title">Our Focus Areas</h2>
          <div className="focus-areas-grid">
            {about.focusAreas.map((focus) => {
              const IconComponent = iconMap[focus.icon] || Star;
              return (
                <div key={focus.id} className="focus-area-card">
                  <div className="focus-icon">
                    <IconComponent size={40} />
                  </div>
                  <h3 className="focus-title">{focus.title}</h3>
                  <p className="focus-description">{focus.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="about-location">
        <div className="container">
          <div className="location-content">
            <h2 className="section-title">{about.location.title}</h2>
            <p className="location-description">{about.location.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;