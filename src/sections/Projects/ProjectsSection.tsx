const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 border-b-2 border-black max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8 border-b border-black pb-2">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold uppercase">Featured Projects</h2>
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#8b0000]">Case Studies</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="border border-gray-300 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-sans text-xs font-bold text-gray-500 uppercase mb-2">Platform Engineering</h4>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-3">Enterprise Agentic Workflow Engine</h3>
          <p className="font-['Playfair_Display'] italic text-gray-600 mb-4 border-l-2 border-[#8b0000] pl-3">
            "How do we move from simple prompts to autonomous multi-step execution?"
          </p>
          <div className="space-y-4 text-sm font-['Lora']">
            <div>
              <strong className="block font-sans text-xs uppercase font-bold text-black">The Problem</strong>
              <p>Manual data processing across disconnected enterprise systems was causing 40% delays in reporting.</p>
            </div>
            <div>
              <strong className="block font-sans text-xs uppercase font-bold text-black">My Role</strong>
              <p>Led the product definition and delivery of a multi-agent system orchestrator.</p>
            </div>
            <div className="bg-gray-100 p-3 mt-2 border border-gray-200">
              <strong className="block font-sans text-xs uppercase font-bold text-black mb-1">AI Approach</strong>
              <ul className="list-disc pl-4 space-y-1">
                <li>Implemented ReAct pattern for agent reasoning.</li>
                <li>Designed human-in-the-loop validation steps.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-gray-300 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-sans text-xs font-bold text-gray-500 uppercase mb-2">Generative AI</h4>
          <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-3">Knowledge Base RAG System</h3>
          <p className="font-['Playfair_Display'] italic text-gray-600 mb-4 border-l-2 border-[#8b0000] pl-3">
            "Solving the hallucination problem in internal technical support."
          </p>
          <div className="space-y-4 text-sm font-['Lora']">
            <div>
              <strong className="block font-sans text-xs uppercase font-bold text-black">The Problem</strong>
              <p>Support teams spent hours searching through fragmented PDF documentation.</p>
            </div>
            <div>
              <strong className="block font-sans text-xs uppercase font-bold text-black">My Role</strong>
              <p>Managed the roadmap for a RAG (Retrieval-Augmented Generation) chatbot implementation.</p>
            </div>
            <div className="bg-gray-100 p-3 mt-2 border border-gray-200">
              <strong className="block font-sans text-xs uppercase font-bold text-black mb-1">Impact</strong>
              <ul className="list-disc pl-4 space-y-1">
                <li>Reduced search time by 65%.</li>
                <li>Established evaluation metrics (context recall/precision).</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
