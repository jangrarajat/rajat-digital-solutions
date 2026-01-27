export default function Portfolio() {
  const projects = [
    {
      title: "Local Shop Business Website",
      desc: "Complete website + Google Maps listing setup for a local retail shop to bring customers online.",
      tech: "HTML, CSS, SEO, Google Business",
      link: "#",
    },
    {
      title: "Doctor Clinic Website",
      desc: "Professional clinic website with services, appointment info, and Google search visibility.",
      tech: "React, Tailwind, SEO",
      link: "#",
    },
    {
      title: "Small Business Digital Setup",
      desc: "Helped a small business go online with website, contact integration and local search presence.",
      tech: "Website + Maps + Local SEO",
      link: "#",
    },
  ];

  return (
    <div className="bg-primary text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          My Recent Work
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Here are some businesses I’ve helped move online and grow with
          professional websites and Google presence.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-3 text-accent">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <p className="text-sm text-gray-500 mb-4">
                <span className="text-white font-medium">Tech Used:</span>{" "}
                {project.tech}
              </p>
              <a
                href={project.link}
                className="inline-block mt-auto text-accent border border-accent px-4 py-2 rounded hover:bg-accent hover:text-black transition"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
