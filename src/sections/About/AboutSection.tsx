const AboutSection = () => {
  return (
    <section id="about" className="py-12 border-b-2 border-black max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        
        {/* Editorial Profile */}
        <div className="col-span-1 md:col-span-1 md:border-r border-black md:pr-8 mb-8 md:mb-0">
          <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase mb-4">Editorial<br/>Profile</h2>
          <div className="h-1 w-12 bg-[#8b0000] mb-6"></div>
          <img 
            src="/profile.png" 
            alt="Profile Avatar" 
            className="w-48 h-48 grayscale object-cover border border-black mb-4 "
          />
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mb-4">Prince Stanly Victor V</p>
          <ul className="font-['Playfair_Display'] italic text-lg space-y-2">
            <li>"Clarity before complexity."</li>
            <li>"Execution over hype."</li>
            <li>"Structure enables speed."</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-span-1 md:col-span-2 md:pl-12">
          <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-6">How I Build AI Products</h3>
          <div className="columns-1 md:columns-2 gap-8 space-y-6 font-['Lora'] text-gray-800 text-justify">
            <p>
              I approach product management with a builder's mindset. My background in Computer Science allows me to bridge the gap between technical feasibility and business value. I don't just manage tickets; I manage the realization of AI capabilities into usable features.
            </p>
            <p>
              In my current role, I lead the end-to-end delivery of Agentic AI platforms. This involves navigating the ambiguity of early-stage AI development and establishing the rigorous testing and deployment pipelines necessary for enterprise adoption.
            </p>
            <p>
              My philosophy is rooted in <strong>Structured Execution</strong>. AI projects are notoriously prone to scope creep and endless experimentation. I use Agile methodologies not as bureaucratic hurdles, but as guardrails to ensure we are constantly shipping value and learning from real user feedback.
            </p>
            <p>
              Ultimately, I believe that AI is leverage. Whether it is automating workflows with agents or generating content at scale, the technology must serve a clear human or business need.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
