import React, { useState } from 'react';

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{name?: string; email?: string} | null>(null);
  const [calendlyNotice, setCalendlyNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Send email via EmailJS
    // On success we show a themed, non-animated confirmation box instead of browser alert
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: 'service_3187hbq',
        template_id: 'template_dx6rom9',
        user_id: 'g6ZNM3Ox9QF5N-sWL', // your EmailJS public key
        template_params: {
          to_email: 'princestanlyvictor23@gmail.com',
          from_name: String(name || ''),
          from_email: String(email || ''),
          message: String(message || '')
        }
      })
    })
    .then((res) => {
      if (!res.ok) {
        return res.text().then((text) => {
          throw new Error(text || res.statusText);
        });
      }
      setSuccess(true);
      setSuccessInfo({ name: String(name || ''), email: String(email || '') });
      (e.target as HTMLFormElement).reset();
    })
    .catch((error) => {
      setSuccess(false);
      console.error('Error:', error);
    });
  };

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
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-black font-['Playfair_Display']" 
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-black font-['Playfair_Display']" 
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-widest mb-1">Inquiry</label>
                <textarea 
                  rows={4} 
                  name="message"
                  className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none focus:border-black font-['Playfair_Display']" 
                  placeholder="Regarding product opportunities..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-white py-4 font-sans font-bold uppercase tracking-widest hover:bg-[#8b0000] transition-colors"
              >
                Submit Correspondence
              </button>
            </form>

            {/* Success confirmation (newspaper-style, no animation) */}
            {success && successInfo && (
              <div className="mt-6 border-2 border-black bg-white p-6 max-w-xl mx-auto text-left">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-2">Letter Sent</h3>
                <p className="font-['Playfair_Display'] text-sm text-gray-700 mb-2">
                  Thank you{successInfo.name ? `, ${successInfo.name}` : ''}. Your message has been received.
                </p>
                <p className="font-['Playfair_Display'] text-sm text-gray-700 mb-4">
                  We'll contact you at <span className="font-bold">{successInfo.email}</span> when we reply.
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-4 py-2 border border-black text-sm font-sans uppercase tracking-widest hover:bg-[#f3f3f3]"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Calendly under-construction notice */}
            {calendlyNotice && (
              <div className="mt-6 border-2 border-black bg-white p-6 max-w-xl mx-auto text-left">
                <h3 className="font-['Playfair_Display'] text-lg font-bold mb-2">Calendly</h3>
                <p className="font-['Playfair_Display'] text-sm text-gray-700">Under construction — Coming soon.</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setCalendlyNotice(false)}
                    className="px-3 py-1 border border-black text-sm font-sans uppercase tracking-widest hover:bg-[#f3f3f3]"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-center gap-6 text-sm font-sans font-bold uppercase tracking-widest">
              <a href="https://www.linkedin.com/in/prince-stanly-victor-v/" className="flex items-center gap-2 hover:text-[#8b0000] hover-underline">
                <span>📍</span> LinkedIn
              </a>
              <a href="https://mail.google.com/mail/?view=cm&to=princestanlyvictor23@gmail.com" target="_blank" className="flex items-center gap-2 hover:text-[#8b0000] hover-underline">
                <span>✉️</span> Email
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCalendlyNotice(true);
                }}
                className="flex items-center gap-2 cursor-pointer text-gray-700"
              >
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
            <p className="font-['Playfair_Display']">Tamil Nadu, India</p>
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
