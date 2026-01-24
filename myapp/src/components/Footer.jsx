import React from "react";

const footerLinks = {
  "Explore top skills and certifications": {
    "In-demand Careers": [
      "Data Scientist",
      "Full Stack Web Developer",
      "Cloud Engineer",
      "Project Manager",
      "Game Developer",
      "All Career Accelerators",
    ],
    "Web Development": [
      "Web Development",
      "JavaScript",
      "React JS",
      "Angular",
      "Java",
    ],
    "IT Certifications": [
      "Amazon AWS",
      "AWS Certified Cloud Practitioner",
      "AZ-900: Microsoft Azure Fundamentals",
      "AWS Certified Solutions Architect - Associate",
      "Kubernetes",
    ],
    Leadership: [
      "Leadership",
      "Management Skills",
      "Project Management",
      "Personal Productivity",
      "Emotional Intelligence",
    ],
    "Certifications by Skill": [
      "Cybersecurity Certification",
      "Project Management Certification",
      "Cloud Certification",
      "Data Analytics Certification",
      "HR Management Certification",
      "See all Certifications",
    ],
    "Data Science": [
      "Data Science",
      "Python",
      "Machine Learning",
      "ChatGPT",
      "Deep Learning",
    ],
    Communication: [
      "Communication Skills",
      "Presentation Skills",
      "Public Speaking",
      "Writing",
      "PowerPoint",
    ],
    "Business Analytics & Intelligence": [
      "Microsoft Excel",
      "SQL",
      "Microsoft Power BI",
      "Data Analysis",
      "Business Analysis",
    ],
  },
  "About & Legal": {
    About: ["About us", "Careers", "Contact us", "Blog", "Investors"],
    "Discover Udemy": [
      "Get the app",
      "Teach on Udemy",
      "Plans and Pricing",
      "Affiliate",
      "Help and Support",
    ],
    "Udemy for Business": ["Udemy Business"],
    "Legal & Accessibility": [
      "Accessibility statement",
      "Privacy policy",
      "Sitemap",
      "Terms",
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Top text */}
        <div className="md:col-span-4 text-gray-400 mb-6">
          Top companies choose{" "}
          <span className="text-indigo-400">Udemy Business</span> to build
          in-demand career skills.
        </div>

        {/* Footer Links */}
        {Object.keys(footerLinks["Explore top skills and certifications"]).map(
          (section) => (
            <div key={section}>
              <h3 className="font-semibold text-white mb-2">{section}</h3>
              <ul className="space-y-1">
                {footerLinks["Explore top skills and certifications"][
                  section
                ].map((link) => (
                  <li key={link} className="hover:underline cursor-pointer">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-6 py-4 text-gray-400 flex justify-between items-center max-w-7xl mx-auto px-6">
        <span>© 2025 Udemy, Inc.</span>
        <div className="flex items-center gap-4">
          <span className="hover:underline cursor-pointer">
            Cookie settings
          </span>
          <span className="hover:underline cursor-pointer">English</span>
        </div>
      </div>
    </footer>
  );
}
