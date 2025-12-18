const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#f5f4f0] px-6 py-16 border-t-4 border-black"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Editorial Profile Box */}
        <div className="md:col-span-1">
          <div className="border-2 border-black p-6 bg-white">
            <h3 className="text-sm font-bold uppercase tracking-wide border-b-2 border-black pb-2 mb-4">
              Editorial Profile
            </h3>
            <div className="space-y-3">
              <div className="border-l-4 border-black pl-3">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-600">Portfolio Author</p>
                <p className="text-sm font-bold">Prince Stanly Victor</p>
              </div>
              <div className="text-xs space-y-2 text-gray-700">
                <p className="italic">"Clarity before complexity"</p>
                <p>"Execution over ideals"</p>
                <p>"Structure enables speed"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-6 text-black">
            How I Build AI Products
          </h2>
          
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p>
              My approach to product management with a builder's mindset is rooted in <strong>Structured Execution</strong>. This philosophy allows me to bridge the gap between technical realities and business value. I don't just gather requirements and run standups—I understand the AI stack at a working level so we can deliver meaningful products faster.
            </p>
            
            <p>
              In my current role building products for SNS Innovation Hub, I've navigated the challenges of multi-stage AI development—managing expectations, aligning competing priorities, and establishing patterns across stakeholders. Whether it's defining inference architecture, negotiating with dev teams, or simplifying complex features, my value is bringing real results from start to finish.
            </p>

            <p>
              I believe that AI is a knowledge multiplier. But for it to be useful, the technology must serve a clear framework. That's where my focus lies: making AI meet users where they are, ensuring usability, and delivering business outcomes—not just technical demos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
