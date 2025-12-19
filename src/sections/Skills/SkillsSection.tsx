const SkillsSection = () => {
  return (
    <>
      {/* Skills Classifieds */}
      <section id="skills" className="py-12 border-b-2 border-black max-w-7xl mx-auto px-4">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold text-center uppercase mb-1">Classifieds: Skills & Expertise</h2>
        <div className="text-center font-sans text-xs uppercase tracking-widest text-gray-500 mb-8 border-b border-black pb-2">Available for immediate application</div>

        <div className="columns-1 sm:columns-2 md:columns-4 gap-4 space-y-4">
          
          {/* Category 1 */}
          <div className="break-inside-avoid border border-black p-4 bg-white">
            <h4 className="font-sans text-sm font-black bg-black text-white px-2 py-1 inline-block uppercase mb-3">AI & Agentic</h4>
            <ul className="text-sm font-['Playfair_Display'] leading-relaxed space-y-1">
              <li>Agentic AI Development</li>
              <li>Generative AI Platforms</li>
              <li>Workflow Orchestration</li>
              <li>RAG Architectures</li>
              <li>Prompt Engineering Strategies</li>
            </ul>
          </div>

          {/* Category 2 */}
          <div className="break-inside-avoid border border-black p-4 bg-white">
            <h4 className="font-sans text-sm font-black bg-black text-white px-2 py-1 inline-block uppercase mb-3">Delivery</h4>
            <ul className="text-sm font-['Playfair_Display'] leading-relaxed space-y-1">
              <li>Agile Project Management</li>
              <li>Scrum Framework</li>
              <li>Sprint Planning</li>
              <li>Dependency Management</li>
              <li>Risk Mitigation</li>
            </ul>
          </div>

          {/* Category 3 */}
          <div className="break-inside-avoid border border-black p-4 bg-white">
            <h4 className="font-sans text-sm font-black bg-black text-white px-2 py-1 inline-block uppercase mb-3">Product</h4>
            <ul className="text-sm font-['Playfair_Display'] leading-relaxed space-y-1">
              <li>Product Roadmapping</li>
              <li>Feature Prioritization</li>
              <li>Stakeholder Management</li>
              <li>User Story Definition</li>
              <li>KPI Tracking</li>
            </ul>
          </div>

          {/* Category 4 */}
          <div className="break-inside-avoid border border-black p-4 bg-white">
            <h4 className="font-sans text-sm font-black bg-black text-white px-2 py-1 inline-block uppercase mb-3">Tools</h4>
            <ul className="text-sm font-['Playfair_Display'] leading-relaxed space-y-1">
              <li>Jira / Confluence</li>
              <li>Salesforce Agentforce</li>
              <li>Databricks</li>
              <li>Python (Foundational)</li>
              <li>Tableau</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 border-b-2 border-black bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-2xl font-bold mb-6 text-center">Official Records & Certifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-black font-sans text-xs uppercase tracking-widest">
                  <th className="py-2">Certification Name</th>
                  <th className="py-2">Issuing Body</th>
                  <th className="py-2">Date</th>
                  <th className="py-2 text-right">Link</th>
                </tr>
              </thead>
              <tbody className="font-['Playfair_Display'] text-sm">
                <tr className="border-b border-gray-300">
                  <td className="py-3 font-bold">Databricks Certified Generative AI Engineer Associate</td>
                  <td className="py-3 text-gray-600">Databricks</td>
                  <td className="py-3">Dec 2025</td>
                  <td className="py-3 text-right"><a href="https://credentials.databricks.com/a5a90d91-e5c8-4419-a58b-9215f70c9e22" className="text-[#8b0000] hover-underline">View →</a></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 font-bold">Salesforce Certified Agentforce Specialist</td>
                  <td className="py-3 text-gray-600">Salesforce</td>
                  <td className="py-3">Apr 2025</td>
                  <td className="py-3 text-right"><a href="https://www.salesforce.com/trailblazer/princestanlyvictor" className="text-[#8b0000] hover-underline">View →</a></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 font-bold">Agile with Atlassian Jira</td>
                  <td className="py-3 text-gray-600">Atlassian</td>
                  <td className="py-3">Jun 2025</td>
                  <td className="py-3 text-right"><a href="https://www.coursera.org/account/accomplishments/verify/C46DCFB93JZ8" className="text-[#8b0000] hover-underline">View →</a></td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 font-bold">Google Project Management</td>
                  <td className="py-3 text-gray-600">Google</td>
                  <td className="py-3">Feb 2025</td>
                  <td className="py-3 text-right"><a href="https://www.coursera.org/account/accomplishments/specialization/RSZ3XUUWVUFG" className="text-[#8b0000] hover-underline">View →</a></td>
                </tr>
                <tr>
                  <td className="py-3 font-bold">Certified Scrum Master</td>
                  <td className="py-3 text-gray-600">Udemy</td>
                  <td className="py-3">Jan 2025</td>
                  <td className="py-3 text-right"><a href="https://www.udemy.com/certificate/UC-9fe815fd-e693-4938-8626-a2c6bd4f31d5/" className="text-[#8b0000] hover-underline">View →</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
