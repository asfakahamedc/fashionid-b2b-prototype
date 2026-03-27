import React, { useState, useEffect } from 'react';
import { 
  Factory, 
  ShieldCheck, 
  Truck, 
  BarChart3, 
  ChevronRight, 
  MessageCircle, 
  X,
  Globe2,
  Clock,
  CheckCircle2,
  PackageCheck,
  Mail,
  Phone,
  MapPin,
  Lock,
  CloudDownload
} from 'lucide-react';

function App() {
  // Handle hash-based scroll from sub-pages (e.g. /#lead-capture-section)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: '',
    volume: ''
  });

  const [isFocused, setIsFocused] = useState('');
  const [lightboxImage, setLightboxImage] = useState(null);

  const images = {
    denim: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=80",
    knits: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80",
    lingerie: "https://images.unsplash.com/photo-1599395914652-32a23075c2e0?w=1200&q=80",
    woven: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=1200&q=80"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950 font-sans relative selection:bg-yellow-400 selection:text-stone-950">
      
      {/* 1. Global Components - Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/8801308665483" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[100] transition-transform hover:-translate-y-1 group flex items-center justify-center"
        id="whatsapp-widget"
        data-testid="whatsapp-widget"
      >
        <div className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
          <img src="/whatsapp.svg" alt="WhatsApp" className="w-10 h-10 hover:scale-105 transition-transform" />
        </div>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-stone-950 text-white font-semibold text-sm py-1.5 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-stone-800 shadow-xl">
          Chat with us
        </span>
      </a>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[100] bg-charcoal-900/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          id="lightbox-modal"
          data-testid="lightbox-modal"
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxImage(null);
            }}
          >
            <X className="w-10 h-10" />
          </button>
          <img 
            src={lightboxImage} 
            alt="High-resolution production" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-900" id="main-header" data-testid="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center" id="logo" data-testid="logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero-section'); }}>
                <img src="/logo.png" alt="FashionID Logo" className="h-10 w-auto object-contain" style={{ filter: 'brightness(0)' }} />
              </a>
            </div>
            
            {/* Nav Links */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('competencies-section')} className="text-stone-600 hover:text-stone-950 transition-colors text-sm font-bold tracking-wide uppercase underline decoration-2 underline-offset-8 decoration-transparent hover:decoration-yellow-400">Services</button>
              <button onClick={() => scrollToSection('showcase-section')} className="text-stone-600 hover:text-stone-950 transition-colors text-sm font-bold tracking-wide uppercase underline decoration-2 underline-offset-8 decoration-transparent hover:decoration-yellow-400">Products</button>
              <button onClick={() => scrollToSection('compliance-section')} className="text-stone-600 hover:text-stone-950 transition-colors text-sm font-bold tracking-wide uppercase underline decoration-2 underline-offset-8 decoration-transparent hover:decoration-yellow-400">Compliance</button>
            </nav>

            <div>
              <button 
                onClick={() => scrollToSection('lead-capture-section')}
                className="bg-yellow-400 hover:bg-yellow-500 text-stone-950 px-6 py-2.5 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[2px] hover:translate-x-[2px] transition-all border-2 border-stone-950 text-sm font-black uppercase tracking-wide"
                id="nav-cta-btn" 
                data-testid="nav-cta-btn"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: The Hero */}
        <section className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden" id="hero-section" data-testid="hero-section">
          {/* Real factory floor background — NOT a gradient */}
          <div className="absolute inset-0">
            <img src="/hero-texture.png" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-stone-50/85"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-stone-950 mb-8 leading-tight font-display uppercase font-black"
              id="hero-h1"
              data-testid="hero-h1"
            >
              Turnkey Apparel Production<br className="hidden sm:block" /> for Global Brands.
            </h1>
            <p 
              className="mt-4 max-w-2xl mx-auto text-xl text-stone-700 font-medium mb-10 leading-relaxed"
              id="hero-subheadline"
              data-testid="hero-subheadline"
            >
              Scale your fashion brand with Bangladesh’s premier sourcing and manufacturing partner. 100% Export Quality.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollToSection('lead-capture-section')}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 text-base font-black text-stone-950 uppercase tracking-widest bg-yellow-400 hover:bg-yellow-500 transition-all border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[4px] hover:translate-x-[4px]"
                id="hero-cta-primary"
                data-testid="hero-cta-primary"
              >
                Calculate Production Timeline
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Trust Strip */}
        <section className="border-y border-stone-900 bg-stone-100" id="authority-section" data-testid="authority-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-900">
              <div className="px-4" id="stat-experience" data-testid="stat-experience">
                <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2 tracking-tighter drop-shadow-[2px_2px_0px_rgba(28,25,23,1)]">15+</div>
                <div className="text-xs md:text-sm text-stone-950 font-black uppercase tracking-widest">Years Experience</div>
              </div>
              <div className="px-4" id="stat-capacity" data-testid="stat-capacity">
                <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2 tracking-tighter drop-shadow-[2px_2px_0px_rgba(28,25,23,1)]">2M+</div>
                <div className="text-xs md:text-sm text-stone-950 font-black uppercase tracking-widest">Pieces/Month</div>
              </div>
              <div className="px-4" id="stat-shipping" data-testid="stat-shipping">
                <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2 tracking-tighter drop-shadow-[2px_2px_0px_rgba(28,25,23,1)]">100%</div>
                <div className="text-xs md:text-sm text-stone-950 font-black uppercase tracking-widest">Export Quality</div>
              </div>
              <div className="px-4 border-r-0" id="stat-categories" data-testid="stat-categories">
                <div className="text-4xl md:text-5xl font-black text-yellow-500 mb-2 tracking-tighter drop-shadow-[2px_2px_0px_rgba(28,25,23,1)]">Global</div>
                <div className="text-xs md:text-sm text-stone-950 font-black uppercase tracking-widest">Shipping & Logistics</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Pain/Solution Matrix */}
        <section className="py-24 bg-stone-50 border-b border-stone-900" id="pain-solution-section" data-testid="pain-solution-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-black mb-4 text-stone-950 tracking-tight font-display uppercase font-black" id="matrix-h2" data-testid="matrix-h2">Why Switch to FashionID?</h2>
              <div className="w-20 h-2 bg-yellow-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-white border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative overflow-hidden group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] transition-all">
                <div className="absolute top-0 left-0 w-full h-2 bg-stone-200 group-hover:bg-yellow-400 transition-colors"></div>
                <Globe2 className="w-10 h-10 text-stone-950 mb-6 group-hover:text-yellow-500 transition-colors" />
                <div className="mb-6">
                  <span className="text-xs font-black tracking-widest text-stone-500 uppercase">The Pain</span>
                  <h3 className="text-xl font-black text-stone-950 mt-1 leading-tight font-display uppercase font-black">Language Barriers & Delays</h3>
                </div>
                <div className="pt-6 border-t border-stone-200">
                  <span className="text-xs font-black tracking-widest text-yellow-500 uppercase drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]">Our Solution</span>
                  <p className="text-stone-700 font-medium mt-3 text-sm leading-relaxed">
                    English-fluent merchandising team providing proactive, weekly production lifecycle updates. You never have to ask "where is my order?"
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-white border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative overflow-hidden group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] transition-all">
                <div className="absolute top-0 left-0 w-full h-2 bg-stone-200 group-hover:bg-yellow-400 transition-colors"></div>
                <ShieldCheck className="w-10 h-10 text-stone-950 mb-6 group-hover:text-yellow-500 transition-colors" />
                <div className="mb-6">
                  <span className="text-xs font-black tracking-widest text-stone-500 uppercase">The Pain</span>
                  <h3 className="text-xl font-black text-stone-950 mt-1 leading-tight font-display uppercase font-black">Inconsistent Quality</h3>
                </div>
                <div className="pt-6 border-t border-stone-200">
                  <span className="text-xs font-black tracking-widest text-yellow-500 uppercase drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]">Our Solution</span>
                  <p className="text-stone-700 font-medium mt-3 text-sm leading-relaxed">
                    Embedded, end-to-end QC protocols from raw material procurement to final packing. AQL 2.5 standards strictly enforced.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-white border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative overflow-hidden group hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] transition-all">
                <div className="absolute top-0 left-0 w-full h-2 bg-stone-200 group-hover:bg-yellow-400 transition-colors"></div>
                <Clock className="w-10 h-10 text-stone-950 mb-6 group-hover:text-yellow-500 transition-colors" />
                <div className="mb-6">
                  <span className="text-xs font-black tracking-widest text-stone-500 uppercase">The Pain</span>
                  <h3 className="text-xl font-black text-stone-950 mt-1 leading-tight font-display uppercase font-black">Missed Deadlines</h3>
                </div>
                <div className="pt-6 border-t border-stone-200">
                  <span className="text-xs font-black tracking-widest text-yellow-500 uppercase drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]">Our Solution</span>
                  <p className="text-stone-700 font-medium mt-3 text-sm leading-relaxed">
                    Vertically aligned supply chains and prioritized factory scheduling ensuring your garments hit the vessel on time, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Capabilities (The What We Do Grid) */}
        <section className="py-24 bg-stone-100 border-b border-stone-900" id="competencies-section" data-testid="competencies-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-black mb-4 text-stone-950 tracking-tight font-display uppercase font-black" id="competencies-h2" data-testid="competencies-h2">Capabilities & Services.</h2>
              <div className="w-20 h-2 bg-yellow-400 rounded-sm"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-white border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] hover:-translate-y-1 transition-all" id="comp-card-sourcing" data-testid="comp-card-sourcing">
                <Factory className="w-10 h-10 text-yellow-500 mb-6 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" />
                <h3 className="text-xl font-black text-stone-950 mb-4 tracking-tight font-display uppercase font-black">Strategic Sourcing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Global premium fabric networks</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Ethical raw material focus</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Trims & accessory procurement</li>
                </ul>
              </div>
              
              {/* Card 2 */}
              <div className="p-8 bg-white border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] hover:-translate-y-1 transition-all" id="comp-card-manufacturing" data-testid="comp-card-manufacturing">
                <BarChart3 className="w-10 h-10 text-yellow-500 mb-6 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" />
                <h3 className="text-xl font-black text-stone-950 mb-4 tracking-tight font-display uppercase font-black">Contract Mfg</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> High-capacity production lines</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Automated sizing precision</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Specialized machinery hubs</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-white border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] hover:-translate-y-1 transition-all" id="comp-card-qc" data-testid="comp-card-qc">
                <ShieldCheck className="w-10 h-10 text-yellow-500 mb-6 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" />
                <h3 className="text-xl font-black text-stone-950 mb-4 tracking-tight font-display uppercase font-black">Quality Control</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Integrated assembly inspections</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> AQL 2.5 defect-free guarantee</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Pre-shipment audit protocols</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="p-8 bg-white border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] hover:-translate-y-1 transition-all" id="comp-card-logistics" data-testid="comp-card-logistics">
                <Truck className="w-10 h-10 text-yellow-500 mb-6 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" />
                <h3 className="text-xl font-black text-stone-950 mb-4 tracking-tight font-display uppercase font-black">Global Logistics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Complete export docs</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Freight consolidation</li>
                  <li className="flex items-start text-sm text-stone-700 font-medium"><CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 shrink-0 drop-shadow-sm"/> Door-to-door tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Product Showcase (3x3 Hover-Reveal Grid) */}
        <section className="py-24 bg-stone-50 border-b border-stone-900" id="showcase-section" data-testid="showcase-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-black mb-4 text-stone-950 tracking-tight font-display uppercase font-black" id="showcase-h2" data-testid="showcase-h2">Production Capabilities.</h2>
              <div className="w-20 h-2 bg-yellow-400 rounded-sm"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800" alt="Denims" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">1. Denims (Pants & Jackets)</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Precision-engineered denim washes and fits. High-volume export capability strictly adhering to global denim fabric standards.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=800" alt="Shirts" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">2. Shirts (Casual & Formal)</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Turnkey shirting production featuring flawless automated stitching and premium yarn-dyed fabric sourcing.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" alt="T-shirts" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">3. T-shirts</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Specializing in 100% combed cotton, sustainable blends, and enzyme-washed jersey knits for everyday wear.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="/polo-shirt.png" alt="Polos" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">4. Polos</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Premium pique and interlock knit polos built for lasting durability and sharp, corporate-ready aesthetics.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800" alt="Jackets" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">5. Jackets (Winter & Fashion)</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Advanced outerwear manufacturing featuring water-resistant shells, insulated linings, and technical zippers.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&q=80&w=800" alt="Lingeries" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">6. Lingeries</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Delicately constructed intimates meeting the highest global AQL standards for comfort, stretch, and fit.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 7 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" alt="Uniforms" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">7. Uniform (Corporate & Ind.)</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Rugged, functional workwear and polished corporate apparel designed for extreme durability and daily use.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800" alt="Cotton Pants" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">8. Cotton Pants</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Premium chinos and twill trousers featuring automated sizing precision and reinforced seams.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 9 */}
              <div className="group relative h-72 rounded-sm border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden cursor-pointer duration-300">
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800" alt="Cargo/Sweat Pants" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent group-hover:bg-yellow-400/95 transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-black text-white group-hover:text-stone-950 tracking-wider mb-2 drop-shadow-md group-hover:drop-shadow-none transition-colors font-display uppercase font-black">9. Cargo/Sweat Pants</h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-sm text-stone-900 font-bold mb-4 leading-relaxed">Heavyweight fleece and functional multi-pocket cargo designs built for modern streetwear and athleisure.</p>
                    <button onClick={() => scrollToSection('lead-capture-section')} className="inline-flex items-center text-stone-950 font-black text-sm uppercase tracking-widest border-b-2 border-stone-950 hover:pl-2 transition-all">
                      Inquire <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Compliance & Infrastructure */}
        <section className="py-24 bg-stone-50 border-y border-stone-900" id="compliance-section" data-testid="compliance-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-4 text-stone-950 tracking-tight font-display uppercase font-black" id="compliance-h2" data-testid="compliance-h2">Global Compliance Standards.</h2>
                <div className="w-20 h-2 bg-yellow-400 rounded-sm mb-8"></div>
                <p className="text-stone-700 mb-8 leading-relaxed font-medium">
                  We guarantee that all partner factories are fully compliant with rigorous international labor, structural, and safety standards. Full operational transparency at every step.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-stone-950 font-black border-b border-stone-200 pb-4">
                    <PackageCheck className="w-6 h-6 text-yellow-500 mr-3 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" /> WRAP Certified Facilities
                  </li>
                  <li className="flex items-center text-stone-950 font-black border-b border-stone-200 pb-4">
                    <PackageCheck className="w-6 h-6 text-yellow-500 mr-3 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" /> BSCI Social Compliance
                  </li>
                  <li className="flex items-center text-stone-950 font-black border-b border-stone-200 pb-4">
                    <PackageCheck className="w-6 h-6 text-yellow-500 mr-3 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" /> OEKO-TEX® Standard 100
                  </li>
                  <li className="flex items-center text-stone-950 font-black border-b border-stone-200 pb-4">
                    <PackageCheck className="w-6 h-6 text-yellow-500 mr-3 drop-shadow-[1px_1px_0px_rgba(28,25,23,1)]" /> Sedex Member (SMETA)
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full bg-white border-[6px] border-stone-950 shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] overflow-hidden flex items-center justify-center p-12">
                   <div className="text-center">
                     <ShieldCheck className="w-32 h-32 text-yellow-400 drop-shadow-[2px_2px_0px_rgba(28,25,23,1)] mx-auto mb-6 opacity-100" />
                     <h3 className="text-3xl font-black text-stone-950 tracking-widest leading-tight font-display uppercase font-black">100%<br/>VERIFIED</h3>
                     <p className="text-stone-500 font-bold text-sm mt-2 uppercase tracking-widest">Ethical Supply Chain</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: The Leadership */}
        <section className="py-24 bg-stone-50 border-b border-stone-900" id="leadership-section" data-testid="leadership-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-16">
              <h2 className="text-4xl font-black mb-4 text-stone-950 tracking-tight font-display uppercase font-black" id="leadership-h2" data-testid="leadership-h2">The Team Behind the Trade.</h2>
              <div className="w-20 h-2 bg-yellow-400 rounded-sm mx-auto mb-6"></div>
              <p className="text-stone-700 max-w-2xl mx-auto font-medium">People buy from people. When wiring overseas, you need to know exactly who is managing your capital and your brand's reputation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Arif */}
              <div className="text-center group" id="leader-arif" data-testid="leader-arif">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-[4px] border-stone-950 mb-6 bg-stone-100 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] transition-all">
                  <img src="/Mohammad Arif Akram.svg" alt="Arif Akram" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105" />
                </div>
                <h3 className="text-2xl font-black text-stone-950 font-display uppercase font-black">Arif Akram</h3>
                <p className="text-yellow-600 text-sm font-black mb-4 uppercase tracking-widest drop-shadow-sm">Managing Director</p>
                <p className="text-stone-600 text-sm italic font-medium">"15 years bridging the gap between Western brands and BD manufacturing infrastructure."</p>
              </div>

              {/* Adnan */}
              <div className="text-center group" id="leader-adnan" data-testid="leader-adnan">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-[4px] border-stone-950 mb-6 bg-stone-100 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] transition-all">
                  <img src="/Mohammad Adnan Akram.svg" alt="Adnan Akram" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105" />
                </div>
                <h3 className="text-2xl font-black text-stone-950 font-display uppercase font-black">Adnan Akram</h3>
                <p className="text-yellow-600 text-sm font-black mb-4 uppercase tracking-widest drop-shadow-sm">Head of Operations</p>
                <p className="text-stone-600 text-sm italic font-medium">"Ensuring AQL 2.5 standards are met across 12 distinct partner factory floors daily."</p>
              </div>

               {/* Azam */}
               <div className="text-center group" id="leader-azam" data-testid="leader-azam">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-[4px] border-stone-950 mb-6 bg-stone-100 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] group-hover:-translate-y-2 group-hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] transition-all">
                  <img src="/Mohammad Azam Akram.svg" alt="Azam Akram" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105" />
                </div>
                <h3 className="text-2xl font-black text-stone-950 font-display uppercase font-black">Azam Akram</h3>
                <p className="text-yellow-600 text-sm font-black mb-4 uppercase tracking-widest drop-shadow-sm">Logistics Director</p>
                <p className="text-stone-600 text-sm italic font-medium">"Navigating port authorities and freight lines to eliminate weeks of delivery friction."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7.5: FAQ (AEO Zero-Click) */}
        <section className="py-24 bg-stone-50 border-y border-stone-900" id="faq-section" data-testid="faq-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-stone-950 tracking-tighter mb-12 border-b-4 border-stone-950 pb-4 inline-block font-display uppercase font-black">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white border-2 border-stone-950 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] cursor-pointer transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:border-yellow-400">
                <h3 className="font-black text-stone-950 mb-2 font-display uppercase font-black">What is the standard MOQ for garment manufacturing in Bangladesh?</h3>
                <p className="text-sm text-stone-600 font-medium leading-relaxed">Standard MOQs vary by garment type: 3,000 pieces for denim, 1,000 pieces for knitwear (t-shirts, polos), and 2,000 pieces for woven garments. FashionID offers reduced MOQs of 300-500 pieces for new brand sample development at adjusted unit pricing.</p>
              </div>
              <div className="bg-white border-2 border-stone-950 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] cursor-pointer transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:border-yellow-400">
                <h3 className="font-black text-stone-950 mb-2 font-display uppercase font-black">How long does shipping take from Chittagong port to Europe?</h3>
                <p className="text-sm text-stone-600 font-medium leading-relaxed">Sea freight from Chittagong port to major European ports (Rotterdam, Hamburg, Felixstowe) typically takes 25-35 days. Door-to-door including customs clearance averages 35-45 days. Air freight reduces transit to 5-7 days at a significantly higher cost per kg.</p>
              </div>
              <div className="bg-white border-2 border-stone-950 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] cursor-pointer transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:border-yellow-400">
                <h3 className="font-black text-stone-950 mb-2 font-display uppercase font-black">How do I start a production run with a Bangladeshi factory?</h3>
                <p className="text-sm text-stone-600 font-medium leading-relaxed">Submit your tech pack and MOQ requirements through our RFQ form. Our team will respond within 24 hours with a feasibility assessment, indicative pricing, and a production timeline. After approving a physical pre-production sample, bulk production begins with a standard 60-120 day ex-factory window.</p>
              </div>
              <div className="bg-white border-2 border-stone-950 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] cursor-pointer transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:border-yellow-400">
                <h3 className="font-black text-stone-950 mb-2 font-display uppercase font-black">What quality control standards does FashionID enforce?</h3>
                <p className="text-sm text-stone-600 font-medium leading-relaxed">All production runs are subject to AQL 2.5 (Acceptable Quality Level) inspection standards. We conduct inline inspections during production, a pre-shipment final random inspection (FRI), and optional third-party audits through SGS, Bureau Veritas, or Intertek upon buyer request.</p>
              </div>
              <div className="bg-white border-2 border-stone-950 p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] cursor-pointer transition-all duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:border-yellow-400">
                <h3 className="font-black text-stone-950 mb-2 font-display uppercase font-black">Does FashionID protect my brand's intellectual property?</h3>
                <p className="text-sm text-stone-600 font-medium leading-relaxed">Yes. All tech packs, CADs, and brand assets are protected under our <a href="/nda.html" className="text-yellow-600 underline hover:text-stone-950 transition-colors">strict NDA framework</a>. We bind all partner factories to the same confidentiality terms and prohibit unauthorized overruns or B-grade stock sales.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: The Lead Generation Engine */}
        <section className="py-32 bg-stone-950 border-y border-stone-900 relative" id="lead-capture-section" data-testid="lead-capture-section">
          {/* Decorative background element */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(250,204,21,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <h2 className="text-4xl md:text-5xl font-black mb-10 text-white tracking-tighter text-center font-display uppercase font-black" id="form-heading" data-testid="form-heading">Start Production Setup</h2>

            <div className="bg-stone-50 rounded-sm shadow-[12px_12px_0px_0px_rgba(250,204,21,0.6)] p-8 md:p-16 border-[4px] border-stone-800 relative overflow-hidden">
              
              <div className="absolute top-0 left-0 w-full h-3 bg-yellow-400"></div>

              <form 
                className="space-y-6" 
                id="production-inquiry-form" 
                data-testid="production-inquiry-form"
                onSubmit={(e) => { e.preventDefault(); console.log('Form Submitted', formData); }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-stone-950">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      data-testid="input-name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setIsFocused('name')}
                      onBlur={() => setIsFocused('')}
                      className={`focused-input w-full bg-stone-50 border-2 ${isFocused === 'name' ? 'border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]' : 'border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]'} text-stone-950 font-bold px-4 py-4 rounded-sm transition-all focus:outline-none`}
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-stone-950">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      data-testid="input-email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setIsFocused('email')}
                      onBlur={() => setIsFocused('')}
                      className={`focused-input w-full bg-stone-50 border-2 ${isFocused === 'email' ? 'border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]' : 'border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]'} text-stone-950 font-bold px-4 py-4 rounded-sm transition-all focus:outline-none`}
                      placeholder="jane@apparelco.com"
                      required
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-black uppercase tracking-widest text-stone-950">Company / Brand Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    data-testid="input-company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused('company')}
                    onBlur={() => setIsFocused('')}
                    className={`focused-input w-full bg-stone-50 border-2 ${isFocused === 'company' ? 'border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]' : 'border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]'} text-stone-950 font-bold px-4 py-4 rounded-sm transition-all focus:outline-none`}
                    placeholder="Acme Fashion Ltd."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Dropdown 1 */}
                  <div className="space-y-2">
                    <label htmlFor="category" className="text-xs font-black uppercase tracking-widest text-stone-950">What are you looking to produce?</label>
                    <div className="relative">
                      <select 
                        id="category" 
                        name="category"
                        data-testid="select-category"
                        value={formData.category}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused('category')}
                        onBlur={() => setIsFocused('')}
                        className={`focused-input appearance-none w-full bg-stone-50 border-2 ${isFocused === 'category' ? 'border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]' : 'border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]'} text-stone-950 font-bold px-4 py-4 rounded-sm transition-all focus:outline-none`}
                        required
                      >
                        <option value="" disabled>Select a category</option>
                        <option value="Denims">Denims (Pants & Jackets)</option>
                        <option value="Shirts">Shirts (Casual & Formal)</option>
                        <option value="T-shirts">T-shirts</option>
                        <option value="Polos">Polos</option>
                        <option value="Jackets">Jackets (Winter & Fashion)</option>
                        <option value="Lingeries">Lingeries</option>
                        <option value="Uniforms">Uniforms (Corporate & Industrial)</option>
                        <option value="Cotton Pants">Cotton Pants</option>
                        <option value="Cargo/Sweat Pants">Cargo / Sweat Pants</option>
                        <option value="Other">Other / Multiple</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-900">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Dropdown 2 */}
                  <div className="space-y-2">
                    <label htmlFor="volume" className="text-xs font-black uppercase tracking-widest text-stone-950">Estimated Order Quantity (MOQ)</label>
                    <div className="relative">
                      <select 
                        id="volume" 
                        name="volume"
                        data-testid="select-volume"
                        value={formData.volume}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused('volume')}
                        onBlur={() => setIsFocused('')}
                        className={`focused-input appearance-none w-full bg-stone-50 border-2 ${isFocused === 'volume' ? 'border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]' : 'border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]'} text-stone-950 font-bold px-4 py-4 rounded-sm transition-all focus:outline-none`}
                        required
                      >
                        <option value="" disabled>Select volume range</option>
                        <option value="Under 5k">&lt; 5k Units</option>
                        <option value="5k-20k">5k - 20k Units</option>
                        <option value="20k-50k">20k - 50k Units</option>
                        <option value="50k+">50k+ Units</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-900">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    id="submit-inquiry-btn"
                    data-testid="submit-inquiry-btn"
                    className="w-full group bg-yellow-400 hover:bg-yellow-500 text-stone-950 font-black uppercase tracking-widest text-lg py-5 px-8 flex items-center justify-center border-2 border-stone-950 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[2px] transition-all"
                  >
                    Get Pricing & Timelines
                    <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="mt-5 flex items-center justify-center text-xs text-stone-500 font-bold uppercase tracking-widest gap-1" id="form-disclaimer" data-testid="form-disclaimer">
                    <Lock className="w-3 h-3" /> 
                    <span>Protected by our <a href="/nda.html" className="underline hover:text-yellow-600 transition-colors">Strict NDA Framework</a>.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

      </main>
      
      {/* 9. Section 9: The Footer */}
      <footer className="bg-stone-950 border-t-[12px] border-yellow-400 pt-16 pb-8" id="main-footer" data-testid="main-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Column 1: Logo & Info */}
            <div>
              <a href="#" className="flex items-center mb-6" onClick={(e) => { e.preventDefault(); scrollToSection('hero-section'); }}>
                <img src="/logo.png" alt="FashionID Logo" className="h-12 w-auto object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              </a>
              <p className="text-stone-300 font-medium text-sm mb-8 leading-relaxed">
                Bangladesh’s premier sourcing, development, and manufacturing partner for global apparel brands.
              </p>

              <a 
                href="/CompanyProfile.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                download 
                className="bg-yellow-400 hover:bg-yellow-500 text-stone-950 font-black uppercase tracking-widest py-3 px-6 inline-flex items-center transition-all border border-stone-900 shadow-[4px_4px_0px_0px_rgba(250,204,21,0.5)] mt-2"
              >
                <CloudDownload className="w-5 h-5 mr-3" />
                Download Company Profile
              </a>
            </div>

            {/* Column 2: Useful Links */}
            <div className="md:pl-12">
              <h4 className="text-white text-lg font-black uppercase tracking-widest mb-8 border-b-2 border-stone-800 pb-2 inline-block">Useful Links</h4>
              <ul className="space-y-4">
                <li><a href="/blog.html" className="text-stone-300 font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs">Blogs</a></li>
                <li><a href="/denim-manufacturing.html" className="text-stone-300 font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs">Denim Manufacturing</a></li>
                <li><a href="/knitwear-production.html" className="text-stone-300 font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs">Knitwear Production</a></li>
                <li><a href="/compliance-and-sustainability.html" className="text-stone-300 font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs">Compliance & Sustainability</a></li>
                <li><a href="/team.html" className="text-stone-300 font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs">Leadership Team</a></li>
                <li><a href="https://maps.app.goo.gl/4dwf3Gcyd6HVpsLB8" target="_blank" rel="noopener noreferrer" className="text-stone-300 font-bold hover:text-yellow-400 transition-colors uppercase tracking-widest text-xs">Visit Us On Google Map</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div>
              <h4 className="text-white text-lg font-black uppercase tracking-widest mb-8 border-b-2 border-stone-800 pb-2 inline-block">Contact Us</h4>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Phone className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="font-black uppercase tracking-widest text-white text-xs mb-1">Phone</p>
                    <p className="text-stone-300 text-sm font-medium">+8801308665483</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="font-black uppercase tracking-widest text-white text-xs mb-1">Email Us</p>
                    <p className="text-stone-300 text-sm font-medium hover:text-yellow-400 transition-colors cursor-pointer">info@fashionidcompany.com</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="font-black uppercase tracking-widest text-white text-xs mb-1">Corporate Office</p>
                    <p className="text-stone-300 text-sm font-medium leading-relaxed">
                      17th PBL Tower (13th floor), Gulshan Circle,<br/>
                      Gulshan-2, Dhaka-1212, Bangladesh.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <MapPin className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div className="ml-4">
                    <p className="font-black uppercase tracking-widest text-white text-xs mb-1">Buying House</p>
                    <p className="text-stone-300 text-sm font-medium leading-relaxed">
                      House-20 (Ground Floor), Road-01, Sector-05,<br/>
                      Uttara, Dhaka-1230, Bangladesh.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-bold uppercase tracking-widest">
            <p>&copy; {new Date().getFullYear()} Fashionid Company. All rights reserved.</p>
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a href="/privacy.html" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="/terms.html" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="/nda.html" className="hover:text-yellow-400 transition-colors">NDA Framework</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
