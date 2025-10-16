import React, { useState, useEffect } from 'react';
import { ExternalLink, Tag, Calendar, Cpu } from 'lucide-react';
import { contentApi } from '../services/contentApi';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: string;
  price?: string;
  icon?: string;
  keyHighlights?: string[];
  technicalStack?: string;
  status: 'active' | 'inactive' | 'draft';
  dateAdded: string;
  dateUpdated?: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const activeProducts = await contentApi.getActiveProducts();
        setProducts(activeProducts || []);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  // Get unique categories
  const categories = ['', ...Array.from(new Set(products.map(p => p.category)))];
  
  // Filter products by category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="products">
      {/* Header Section */}
      <section className="products-header">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            Discover our innovative software solutions designed to transform your business operations
          </p>
        </div>
      </section>

      {/* Filter Section */}
      {categories.length > 2 && (
        <section className="products-filter">
          <div className="container">
            <div className="filter-controls">
              <label className="filter-label">Filter by category:</label>
              <select 
                className="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No products available at the moment. Please check back later.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-header">
                    <div className="product-icon-container">
                      {product.icon ? (
                        product.icon.startsWith('http') || product.icon.startsWith('<svg') ? (
                          product.icon.startsWith('<svg') ? (
                            <div 
                              className="product-icon-svg" 
                              dangerouslySetInnerHTML={{ __html: product.icon }}
                            />
                          ) : (
                            <img src={product.icon} alt={`${product.name} icon`} className="product-icon-image" />
                          )
                        ) : (
                          <span className="product-icon-emoji">{product.icon}</span>
                        )
                      ) : (
                        <div className="product-icon-default">
                          <ExternalLink size={32} />
                        </div>
                      )}
                    </div>
                    <div className="product-category-badge">
                      <Tag size={14} />
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="product-content">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-subtitle">{product.subtitle}</p>
                    <p className="product-description">{product.description}</p>
                    
                    {product.keyHighlights && product.keyHighlights.length > 0 && (
                      <div className="product-highlights">
                        <h4 className="highlights-title">Key Features:</h4>
                        <ul className="highlights-list">
                          {product.keyHighlights.map((highlight, index) => (
                            <li key={index} className="highlight-item">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {product.technicalStack && (
                      <div className="product-tech-stack">
                        <div className="tech-stack-header">
                          <Cpu size={16} />
                          <span className="tech-stack-label">Technology Stack:</span>
                        </div>
                        <p className="tech-stack-content">{product.technicalStack}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="product-footer">
                    <div className="product-meta">
                      <div className="product-date">
                        <Calendar size={14} />
                        <span>Added {product.dateAdded}</span>
                      </div>
                      {product.price && (
                        <div className="product-price">
                          <span className="price-label">Pricing:</span>
                          <span className="price-value">{product.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;