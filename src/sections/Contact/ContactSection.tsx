const ContactSection = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-4">Letter to the Editor</h2>
          <p className="font-['Playfair_Display'] italic text-xl text-gray-600 mb-8">
            "Open to meaningful conversations around AI product delivery."
          </p>
          
          <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form className="space-y-6 text-left">
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-black font-['Playfair_Display']" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest mb-1">Inquiry</label>
                <textarea 
                  rows={4} 
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-black font-['Playfair_Display']" 
                  placeholder="Regarding product opportunities..."
                ></textarea>
              </div>
              <button 
                type="button" 
                className="w-full bg-black text-white py-4 font-sans font-bold uppercase tracking-widest hover:bg-[#8b0000] transition-colors"
              >
                Submit Correspondence
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-center gap-6 text-sm font-sans font-bold uppercase tracking-widest">
              <a href="#" className="flex items-center gap-2 hover:text-[#8b0000] hover-underline">
                <span>📍</span> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-[#8b0000] hover-underline">
                <span>✉️</span> Email
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-[#8b0000] hover-underline">
                <span>📅</span> Calendly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t-4 border-[#8b0000]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-['Playfair_Display'] text-2xl font-bold mb-4">The Product Dispatch</h4>
            <p className="text-gray-400 text-sm font-['Playfair_Display']">
              Editorial portfolio of Prince Stanly Victor V.<br/>
              Building the future of AI, one sprint at a time.
            </p>
          </div>
          <div className="md:text-center">
            <span className="block font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Location</span>
            <p className="font-['Playfair_Display']">Bengaluru, India</p>
          </div>
          <div className="md:text-right">
            <span className="block font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Copyright</span>
            <p className="font-['Playfair_Display'] text-sm text-gray-400">© 2025 Prince Stanly Victor V.<br/>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
