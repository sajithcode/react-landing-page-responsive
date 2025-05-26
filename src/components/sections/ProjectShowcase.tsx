import { useState } from "react";
import { projects } from "../../utils/projects-data";
import { ProjectCard } from "../cards/ProjectCard";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "WordPress", "Figma", "Coding"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20">
      <Container className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our Featured Projects</Title>
          <Paragraph>
            Explore our portfolio of WordPress websites, Figma designs, and
            custom coding solutions. We bring your digital vision to life with
            creativity and technical expertise.
          </Paragraph>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center">
          <div className="inline-flex bg-box-bg border border-box-border rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
                    : "text-heading-3 hover:text-heading-1"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <Paragraph className="mb-6">
            Ready to start your next project? Let's discuss how we can help
            bring your ideas to life.
          </Paragraph>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};
