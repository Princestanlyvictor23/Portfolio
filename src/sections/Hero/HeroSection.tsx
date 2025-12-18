const HeroSection = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section id="hero" className="bg-[#f9f7f1]">
      {/* Masthead */}
      <header className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <div className="border-b border-black pb-1 mb-1 flex justify-between items-end text-xs font-bold uppercase tracking-widest font-sans text-gray-600">
          <span>{currentDate}</span>
          <span>Tamil Nadu, India</span>
          <span>Free Edition</span>
        </div>
        <div className="border-t-2 border-b-2 border-black py-6 text-center">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-8xl font-black tracking-tight text-black uppercase leading-none">
            The Product Dispatch
          </h1>
          <p className="font-['Playfair_Display'] italic mt-3 text-lg md:text-xl text-gray-800">
            Analyzing the Intersection of Product Management, Delivery, and Artificial Intelligence
          </p>
        </div>
        <div className="border-t border-black pt-1 mt-1 flex justify-center text-xs font-bold uppercase tracking-widest font-sans">
          <span>By Prince Stanly Victor V</span>
        </div>
      </header>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 border-b-2 border-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Headline Area */}
          <div className="lg:col-span-8 lg:pr-8 lg:border-r border-black">
            <span className="inline-block px-2 py-1 mb-4 text-xs font-bold text-white bg-[#8b0000] uppercase tracking-widest">
              Breaking News
            </span>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold leading-tight mb-6 text-black">
              AI Delivery & Product Manager Building Agentic and Generative AI Platforms
            </h2>
            <h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-gray-700 italic mb-6 leading-relaxed">
              "Turning AI ideas into reliable, scalable products through structured execution."
            </h3>
            
            <div className="flex items-center space-x-4 text-sm font-sans text-gray-500 mb-8">
              <span className="font-bold text-black uppercase">Bengaluru</span>
              <span>•</span>
              <span>2+ Years Experience</span>
              <span>•</span>
              <span>500+ Connections</span>
            </div>

            <div className="prose prose-lg text-gray-800 font-['Lora'] text-justify">
              <p className="drop-cap mb-4">
                In an era defined by rapid technological shifts, the ability to translate complex Artificial Intelligence capabilities into tangible, scalable products is paramount. Prince Stanly Victor V, based in Bengaluru, stands at this critical juncture, combining product thinking with structured delivery execution.
              </p>
              <p className="mb-4">
                Specializing in <strong>Agentic AI</strong> and <strong>Generative AI systems</strong>, Prince helps organizations move beyond the hype cycle. His approach focuses on clarity before complexity—ensuring that AI adoption drives measurable business outcomes through rigorous end-to-end delivery management.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#projects" className="inline-block border-2 border-black px-6 py-3 font-sans font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                Read Full Report
              </a>
              <a href="#contact" className="inline-block bg-[#8b0000] text-white px-6 py-3 font-sans font-bold uppercase tracking-widest hover:bg-black transition-colors">
                Contact Author
              </a>
            </div>
          </div>

          {/* Sidebar / Top Stories */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Story 1 */}
            <div className="border-b border-gray-300 pb-6">
              <h4 className="font-sans text-xs font-bold text-[#8b0000] uppercase tracking-widest mb-2">Focus Area</h4>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2 hover:underline cursor-pointer">Agentic AI Platforms</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Moving beyond chatbots to autonomous agents that execute complex workflows. Designing systems where AI takes action, not just generates text.
              </p>
            </div>

            {/* Story 2 */}
            <div className="border-b border-gray-300 pb-6">
              <h4 className="font-sans text-xs font-bold text-[#8b0000] uppercase tracking-widest mb-2">Technology</h4>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2 hover:underline cursor-pointer">Generative AI Systems</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Implementing scalable LLM applications. Validating trust signals like Databricks GenAI Associate and Salesforce Agentforce.
              </p>
            </div>

            {/* Story 3 */}
            <div className="pb-6">
              <h4 className="font-sans text-xs font-bold text-[#8b0000] uppercase tracking-widest mb-2">Methodology</h4>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-2 hover:underline cursor-pointer">Agile Delivery</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bringing order to chaos. Utilizing Scrum and Agile frameworks to ensure predictable delivery in high-ambiguity AI projects.
              </p>
            </div>
            
            {/* Trust Signals Box */}
            <div className="bg-gray-200 p-6 border border-gray-400 mt-auto">
              <h4 className="font-['Playfair_Display'] font-bold text-lg mb-4 text-center border-b border-black pb-2">Verified Credentials</h4>
              <ul className="space-y-3 text-sm font-sans">
                <li className="flex items-start gap-2">
                  <span className="text-[#8b0000]">★</span>
                  <span>Databricks Certified GenAI Engineer Associate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b0000]">★</span>
                  <span>Salesforce Certified Agentforce Specialist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8b0000]">★</span>
                  <span>Google Project Management</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
