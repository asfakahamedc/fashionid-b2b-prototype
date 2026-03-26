import React, { useState } from 'react';
import { Factory, ShieldCheck, Truck, BarChart3, ChevronRight } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    volume: ''
  });

  const [isFocused, setIsFocused] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-capture-section');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-charcoal-900 text-white font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 glass-panel border-b border-charcoal-400/20" id="main-header" data-testid="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tighter" id="logo" data-testid="logo">
                FASHION<span className="text-accent">ID</span>
              </span>
            </div>
            <div>
              <button 
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded text-sm font-semibold transition-colors duration-200"
                id="nav-cta-btn" 
                data-testid="nav-cta-btn"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: The Hero */}
        <section className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden" id="hero-section" data-testid="hero-section">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8"
              id="hero-h1"
              data-testid="hero-h1"
            >
              Turnkey Apparel Production<br className="hidden sm:block" /> for Global Brands.
            </h1>
            <p 
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10"
              id="hero-subheadline"
              data-testid="hero-subheadline"
            >
              Scale your fashion brand with Bangladesh’s premier sourcing, development, and manufacturing partner. 100% Export Quality. Zero Sourcing Headaches.
            </p>
            
            <div className="flex flex-col items-center justify-center space-y-4">
              <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-accent hover:bg-accent-hover rounded overflow-hidden transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
                id="hero-cta-primary"
                data-testid="calculate-timeline-btn"
              >
                Calculate Production Timeline
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 font-medium" id="hero-microcopy" data-testid="hero-microcopy">
                No commitment required. Response in 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Social Proof Authority Bar */}
        <section className="border-y border-charcoal-400/20 bg-charcoal-800/50" id="authority-section" data-testid="authority-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-charcoal-400/20">
              <div className="px-4" id="stat-experience" data-testid="stat-experience">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Years Experience</div>
              </div>
              <div className="px-4" id="stat-capacity" data-testid="stat-capacity">
                <div className="text-3xl font-bold text-white mb-1">2M+</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Pieces/Month</div>
              </div>
              <div className="px-4" id="stat-shipping" data-testid="stat-shipping">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Global Shipping</div>
              </div>
              <div className="px-4 border-r-0" id="stat-qc" data-testid="stat-qc">
                <div className="text-3xl font-bold text-white mb-1">AQL 2.5</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">End-to-End QC</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Core Competencies */}
        <section className="py-24 bg-charcoal-900" id="competencies-section" data-testid="competencies-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4" id="competencies-h2" data-testid="competencies-h2">Our Capabilities. Your Advantage.</h2>
              <div className="w-20 h-1 bg-accent rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="p-6 rounded-lg glass-panel hover:-translate-y-1 transition-transform" id="comp-card-sourcing" data-testid="comp-card-sourcing">
                <Factory className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold set-white mb-3">Strategic Sourcing</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Access established networks for premium fabrics and trims. We secure the best ethical raw materials at scale.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="p-6 rounded-lg glass-panel hover:-translate-y-1 transition-transform" id="comp-card-manufacturing" data-testid="comp-card-manufacturing">
                <BarChart3 className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Contract Manufacturing</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  High-capacity production lines optimized for diverse product types. Automated infrastructure ensures precision sizing.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 rounded-lg glass-panel hover:-translate-y-1 transition-transform" id="comp-card-qc" data-testid="comp-card-qc">
                <ShieldCheck className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Quality Control</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Rigorous multi-stage inspections integrated directly into the assembly line. Defect-free guaranteed.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 rounded-lg glass-panel hover:-translate-y-1 transition-transform" id="comp-card-logistics" data-testid="comp-card-logistics">
                <Truck className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Logistics & Consolidation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Complete handling of export documentation and freight forwarding. Door-to-door delivery tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Product Showcase */}
        <section className="py-24 bg-charcoal-800" id="showcase-section" data-testid="showcase-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4" id="showcase-h2" data-testid="showcase-h2">Production Excellence</h2>
              <div className="w-20 h-1 bg-accent rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
              {/* Denim */}
              <div className="relative group overflow-hidden rounded-lg md:col-span-8 group" id="showcase-img-denim" data-testid="showcase-img-denim">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80" alt="Denim Production" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white">Denim Heavyweights</h3>
                </div>
              </div>

              {/* Knits */}
              <div className="relative group overflow-hidden rounded-lg md:col-span-4" id="showcase-img-knits" data-testid="showcase-img-knits">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80" alt="Knits Production" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white">Premium Knits</h3>
                </div>
              </div>

              {/* Lingerie */}
              <div className="relative group overflow-hidden rounded-lg md:col-span-5" id="showcase-img-lingerie" data-testid="showcase-img-lingerie">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1599395914652-32a23075c2e0?w=600&q=80" alt="Lingerie Production" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white">Intimates & Lingerie</h3>
                </div>
              </div>

              {/* Woven */}
              <div className="relative group overflow-hidden rounded-lg md:col-span-7" id="showcase-img-woven" data-testid="showcase-img-woven">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80" alt="Woven Apparel" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white">Woven Garments</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: The Lead Capture Funnel */}
        <section className="py-32 relative" id="lead-capture-section" data-testid="lead-capture-section">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="glass-panel rounded-xl shadow-2xl p-8 md:p-12 border border-charcoal-400/30 relative overflow-hidden">
              
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-3" id="form-heading" data-testid="form-heading">Start Production Setup</h2>
                <p className="text-gray-400 text-sm">Fill out the details below. Our development team will review and respond with a detailed timeline within 24 hours.</p>
              </div>

              <form 
                className="space-y-6" 
                id="production-inquiry-form" 
                data-testid="production-inquiry-form"
                onSubmit={(e) => { e.preventDefault(); console.log('Form Submitted', formData); }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      data-testid="input-name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setIsFocused('name')}
                      onBlur={() => setIsFocused('')}
                      className={`focused-input w-full bg-charcoal-900 border ${isFocused === 'name' ? 'border-accent' : 'border-charcoal-400/50'} text-white px-4 py-3 rounded-md transition-colors`}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      data-testid="input-email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused('')}
                      className={`focused-input w-full bg-charcoal-900 border ${isFocused === 'email' ? 'border-accent' : 'border-charcoal-400/50'} text-white px-4 py-3 rounded-md transition-colors`}
                      placeholder="jane@apparelco.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dropdown 1 */}
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-semibold text-gray-300">Product Category</label>
                    <div className="relative">
                      <select 
                        id="category" 
                        name="category"
                        data-testid="select-category"
                        value={formData.category}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused('category')}
                        onBlur={() => setIsFocused('')}
                        className={`focused-input appearance-none w-full bg-charcoal-900 border ${isFocused === 'category' ? 'border-accent' : 'border-charcoal-400/50'} text-white px-4 py-3 rounded-md transition-colors`}
                        required
                      >
                        <option value="" disabled>Select a category</option>
                        <option value="Denims">Denims</option>
                        <option value="Shirts">Shirts</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Lingerie">Lingerie</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown 2 */}
                  <div className="space-y-2">
                    <label htmlFor="volume" className="text-sm font-semibold text-gray-300">Estimated Volume (Units)</label>
                    <div className="relative">
                      <select 
                        id="volume" 
                        name="volume"
                        data-testid="select-volume"
                        value={formData.volume}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused('volume')}
                        onBlur={() => setIsFocused('')}
                        className={`focused-input appearance-none w-full bg-charcoal-900 border ${isFocused === 'volume' ? 'border-accent' : 'border-charcoal-400/50'} text-white px-4 py-3 rounded-md transition-colors`}
                        required
                      >
                        <option value="" disabled>Select volume range</option>
                        <option value="Under 5k">Under 5k</option>
                        <option value="5k-20k">5k-20k</option>
                        <option value="20k-50k">20k-50k</option>
                        <option value="50k+">50k+</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit"
                    id="submit-inquiry-btn"
                    data-testid="submit-inquiry-btn"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-charcoal-900 shadow-[0_0_15px_rgba(14,165,233,0.2)] transition-all hover:-translate-y-0.5"
                  >
                    Request Pricing & Specs
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-4" id="form-disclaimer" data-testid="form-disclaimer">
                    Your data is secure. We never share your information with third parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-charcoal-900 py-8 border-t border-charcoal-400/20 text-center text-sm text-gray-500" id="main-footer" data-testid="main-footer">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Fashionid Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
