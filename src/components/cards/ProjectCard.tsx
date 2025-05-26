import { Paragraph } from "../shared/Paragraph";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export const ProjectCard = ({
  title,
  category,
  description,
  image,
  technologies,
  link,
}: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "WordPress":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300";
      case "Figma":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300";
      case "Coding":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  return (
    <div className="group rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
              category
            )}`}
          >
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-heading-1 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <Paragraph className="mb-4">{description}</Paragraph>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-body border border-box-border rounded-md text-heading-3"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={link}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
