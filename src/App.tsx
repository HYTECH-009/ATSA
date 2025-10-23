import { Zap, Shield, CheckCircle, Facebook, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <nav className="container mx-auto px-6">
          <div className="bg-[#3d4f5c] text-white rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/dfefwe.png" alt="ATSA Logo" className="w-14 h-14 object-contain" style={{mixBlendMode: 'lighten'}} />
              <span className="text-xl font-bold">ATSA</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#products" className="hover:text-gray-300 transition">Products</a>
              <a href="#services" className="hover:text-gray-300 transition">Services</a>
              <a href="#materials" className="hover:text-gray-300 transition">Materials</a>
              <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-6 py-32 mt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-[#3d4f5c] mb-6">
            Precision Manufacturing in Stainless Steel
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Since 1992, ATSA has been leading the industry with over 30 years of expertise in stainless steel fabrication and precision metalwork.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Specializing in aluminum, inox, stainless steel, welding, cutting, bending, and mechanical works.
          </p>
          <button className="bg-[#3d4f5c] text-white px-8 py-3 rounded hover:bg-[#2d3f4c] transition">
            Request a Quote
          </button>
        </div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3d4f5c] mb-12 text-center">Our Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="/Gemini_Generated_Image_5tsbvd5tsbvd5tsb.png" alt="Stainless Steel Monument" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Custom Metal Monument</h3>
                <p className="text-gray-600">Elegant stainless steel sculptural monument featuring precision welding and polished finish, showcasing our expertise in artistic metalwork.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="/Gemini_Generated_Image_exjfxaexjfxaexjf.png" alt="Spiral Staircase" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Spiral Staircase</h3>
                <p className="text-gray-600">Premium stainless steel spiral staircase with curved railings, demonstrating our advanced bending and welding capabilities for architectural projects.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="/Gemini_Generated_Image_jfyylnjfyylnjfyy.png" alt="Service Kiosk" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Custom Service Kiosk</h3>
                <p className="text-gray-600">Modern outdoor service kiosk with durable metal frame and protective panels, ideal for food service and retail applications.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="/Gemini_Generated_Image_tpz6nstpz6nstpz6.png" alt="Commercial Refrigerator" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Commercial Refrigerator</h3>
                <p className="text-gray-600">Industrial-grade stainless steel refrigeration unit with glass doors, built to strict hygiene standards for commercial kitchens.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="/unnamed.png" alt="Pizza Oven" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#3d4f5c] mb-2">Professional Pizza Oven</h3>
                <p className="text-gray-600">Custom-built brick pizza oven with stainless steel housing and storage cabinet, combining traditional cooking with modern design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3d4f5c] mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Zap className="w-12 h-12 text-[#3d4f5c] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#3d4f5c]">Welding</h3>
              <p className="text-gray-600">
                Expert welding services ensuring strong, durable bonds for all metal types.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-[#3d4f5c] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#3d4f5c]">Cutting & Bending</h3>
              <p className="text-gray-600">
                Precision cutting and bending services for complex metal forming requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CheckCircle className="w-12 h-12 text-[#3d4f5c] mb-4" />
              <h3 className="text-xl font-bold mb-3 text-[#3d4f5c]">Mechanical Works</h3>
              <p className="text-gray-600">
                Comprehensive mechanical fabrication and assembly services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#3d4f5c] mb-12 text-center">Materials We Work With</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Stainless Steel (Inox)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Aluminum</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Carbon Steel</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Galvanized Steel (Galva)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#3d4f5c] flex-shrink-0" />
                <span className="text-lg text-gray-700">Various Metal Alloys</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#3d4f5c] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your manufacturing needs and receive a detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:+96171981996" className="bg-white text-[#3d4f5c] px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
              +961 71 981 996
            </a>
            <a href="tel:+2250150191162" className="bg-white text-[#3d4f5c] px-8 py-3 rounded hover:bg-gray-100 transition font-medium">
              +225 01 50 19 11 62
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-500">
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-6 justify-center">
              <a
                href="https://www.instagram.com/ats_a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#3d4f5c] px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/ATSA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-[#3d4f5c] px-6 py-3 rounded hover:bg-gray-100 transition"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2d3f4c] text-gray-300 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 1992-2024 ATSA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
