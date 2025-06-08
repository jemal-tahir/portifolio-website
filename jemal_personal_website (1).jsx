export default function JemalPortfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Jemal Tahir Mumed</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Multidisciplinary Finance & Data Professional | Public Sector Innovator | Mobile Developer
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-4 py-2 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700">
            View Projects
          </a>
          <a href="#contact" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50">
            Contact Me
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Gursum, Ethiopia | jemalt2020@gmail.com | +251957110001
        </div>
        <div className="flex justify-center gap-4 text-blue-600 mt-2">
          <a href="https://www.linkedin.com/in/jemal-tahir-mumed-33b39a1b7" target="_blank">LinkedIn</a>
          <a href="https://github.com/jemal-tahir-mumed" target="_blank">GitHub</a>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Professional Summary</h2>
        <p className="text-gray-700 max-w-4xl mx-auto">
          Multidisciplinary finance and data professional with over 7 years of experience in public sector finance, digital transformation, and agricultural development. Holding an MSc in Agribusiness & Value Chain Management, with advanced training in AI/ML, data analytics, and mobile technology. Expertise in bridging data science with real-world economic development, leveraging tools such as Python, Stata, SPSS, Excel, and Android development. Adept at driving performance improvements in public finance management, optimizing budget efficiency, and shaping policy with data-driven insights.
        </p>
      </section>

      {/* Core Competencies */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Core Competencies</h2>
        <ul className="grid md:grid-cols-2 gap-2 text-gray-700 list-disc list-inside">
          <li>Public Finance Management & Budgeting</li>
          <li>Predictive Analytics & Econometrics</li>
          <li>Machine Learning (Python, Scikit-learn, Pandas)</li>
          <li>Mobile App Development (Android)</li>
          <li>Agricultural Value Chain Optimization</li>
          <li>Policy Research & Financial Evaluation</li>
          <li>Digital Tools & Change Management</li>
          <li>Staff Training & Leadership</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">Featured Projects & Research</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl shadow p-4">
            <h3 className="text-xl font-semibold">AI-Based Yield Prediction Model</h3>
            <p className="text-gray-700">Developed a machine learning model to predict crop yields with 85% accuracy using Python and created a user-friendly UI for field workers.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow p-4">
            <h3 className="text-xl font-semibold">Financial Optimization System</h3>
            <p className="text-gray-700">Built a decision-support platform replacing paper-based reporting with Python/Stata, saving 10 hours weekly and improving budget transparency.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow p-4">
            <h3 className="text-xl font-semibold">Livestock Market Chain Analysis</h3>
            <p className="text-gray-700">MSc research analyzing inefficiencies in livestock trade; findings adopted by regional policymakers to improve market systems.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl shadow p-4">
            <h3 className="text-xl font-semibold">Android Portfolio App</h3>
            <p className="text-gray-700">Built an offline Android app showcasing personal profile, projects, resume download, and contact info using Java and XML.</p>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Resume</h2>
        <p className="text-gray-600 max-w-xl mx-auto">7+ years experience in finance, digital tools, and research. MSc in Agribusiness & Value Chain Mgmt. with hands-on project leadership and AI skills.</p>
        <a
          href="/Jemal_Tahir_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700"
        >
          Download Resume (PDF)</a>
        <p className="text-sm text-gray-500">Resume Source: Based on Jemal Tahir Mumed's academic and professional experience, including MSc thesis, public finance roles, and Udacity certifications.</p>
      </section>

      {/* Education Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold text-center">Education</h2>
        <ul className="text-gray-700 max-w-2xl mx-auto space-y-2">
          <li><strong>MSc in Agribusiness & Value Chain Management</strong> – Haramaya University, 2025 (GPA: 3.55)</li>
          <li><strong>BSc in Agribusiness & Value Chain Management</strong> – Haramaya University, 2017 (GPA: 3.47)</li>
          <li><strong>Udacity Nanodegree Programs:</strong> Data Analysis, AI Fundamentals, Android Development, Programming Fundamentals, Career Pathway & Self-Reflection</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-center">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-xl" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-xl" />
          <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded-xl" />
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Jemal Tahir Mumed. All rights reserved.
      </footer>
    </div>
  );
}
