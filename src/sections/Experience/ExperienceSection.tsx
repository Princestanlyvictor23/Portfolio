const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 border-b-2 border-black max-w-7xl mx-auto px-4">
      <h2 className="font-['Playfair_Display'] text-4xl font-bold text-center mb-2">Career Timeline</h2>
      <div className="text-center font-sans text-xs font-bold uppercase tracking-widest text-gray-500 mb-12">Tracking The Journey</div>

      <div className="max-w-4xl mx-auto">
        
        {/* Role 1 - Current */}
        <div className="relative pl-8 md:pl-0 py-6 group">
          <div className="hidden md:block absolute left-1/2 w-px bg-gray-300 h-full top-0 -translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-5/12 text-left md:text-right md:pr-8 order-2 md:order-1">
              <h3 className="font-['Playfair_Display'] text-xl font-bold">Associate Delivery Manager</h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wider text-[#8b0000] mt-1">SNS Square</p>
              <p className="text-gray-600 italic mt-2 text-sm">Leading end-to-end delivery of Agentic AI platforms. Coordinating cross-functional engineering teams to ensure reliable production releases.</p>
            </div>
            
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-4 border-white rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1 md:mt-0 order-1"></div>
            
            <div className="w-full md:w-5/12 md:pl-8 text-left order-3 mt-2 md:mt-0">
              <span className="font-sans font-bold text-xs bg-gray-200 px-2 py-1">Current Role</span>
            </div>
          </div>
        </div>

        {/* Role 2 */}
        <div className="relative pl-8 md:pl-0 py-6 group">
          <div className="hidden md:block absolute left-1/2 w-px bg-gray-300 h-full top-0 -translate-x-1/2"></div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-5/12 text-left md:text-right md:pr-8 order-2 md:order-1">
              <span className="font-sans font-bold text-xs bg-gray-200 px-2 py-1">Current Role</span>
            </div>
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-4 border-white rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1 md:mt-0 order-1"></div>
            <div className="w-full md:w-5/12 md:pl-8 text-left order-3 mt-2 md:mt-0">
              <h3 className="font-['Playfair_Display'] text-xl font-bold">Associate Product Manager</h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wider text-[#8b0000] mt-1">SNS Innovation Hub</p>
              <p className="text-gray-600 italic mt-2 text-sm">Supported product execution across AI initiatives. Focused on planning, tracking, and delivery coordination.</p>
            </div>
          </div>
        </div>

        {/* Role 3 */}
        <div className="relative pl-8 md:pl-0 py-6 group">
          <div className="hidden md:block absolute left-1/2 w-px bg-gray-300 h-full top-0 -translate-x-1/2"></div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="w-full md:w-5/12 text-left md:text-right md:pr-8 order-2 md:order-1">
              <h3 className="font-['Playfair_Display'] text-xl font-bold">Technical Trainer</h3>
              <p className="font-sans text-sm font-bold uppercase tracking-wider text-[#8b0000] mt-1">DT Future Skills</p>
              <p className="text-gray-600 italic mt-2 text-sm">Delivered technical training sessions on AI concepts and software fundamentals.</p>
            </div>
            <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-gray-400 rounded-full -translate-x-[3px] md:-translate-x-1/2 mt-1 md:mt-0 order-1"></div>
            <div className="w-full md:w-5/12 md:pl-8 text-left order-3 mt-2 md:mt-0">
              <span className="font-sans font-bold text-xs text-gray-500">Full-time</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
