import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Pricing = () => {
  const workProcess = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description:
        "We start with a free consultation to understand your vision, goals, and project requirements.",
      features: [
        "Free initial consultation",
        "Project scope analysis",
        "Timeline estimation",
        "Technology recommendations",
      ],
    },
    {
      step: "02",
      title: "Design & Development",
      description:
        "Our team creates stunning designs and develops robust solutions tailored to your needs.",
      features: [
        "Custom UI/UX design",
        "Responsive development",
        "Quality assurance testing",
        "Regular progress updates",
      ],
      featured: true,
    },
    {
      step: "03",
      title: "Launch & Support",
      description:
        "We deploy your project and provide ongoing support to ensure everything runs smoothly.",
      features: [
        "Professional deployment",
        "Performance optimization",
        "Training & documentation",
        "Ongoing maintenance",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <Container className="text-center">
        <Title>How We Work</Title>
        <Paragraph className="mt-4 max-w-2xl mx-auto">
          Our streamlined process ensures your project is delivered on time,
          within budget, and exceeds your expectations.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workProcess.map((process, key) => (
            <div key={key} className="relative group h-full">
              <div
                className={`${
                  process.featured
                    ? "bg-gradient-to-r from-blue-600 to-violet-600"
                    : "bg-box-border"
                } p-1 rounded-3xl h-full`}
              >
                <div
                  className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow
                                p-8 flex flex-col h-full relative"
                >
                  {process.featured && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary
                                                    text-white text-xs font-bold uppercase tracking-wider
                                                    px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"
                    >
                      Most Popular
                    </div>
                  )}{" "}
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-heading-1 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-heading-3 mb-6">{process.description}</p>
                  <ul className="flex-1 space-y-3 text-left text-heading-3">
                    {process.features.map((feature, keyFeatures) => (
                      <li key={keyFeatures} className="flex items-center gap-3">
                        <span className="w-5 h-5 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-green-600 dark:text-green-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 pt-8 border-t border-box-border">
          <h3 className="text-2xl font-semibold text-heading-1 mb-4">
            Ready to Get Started?
          </h3>
          <Paragraph className="mb-6 max-w-2xl mx-auto">
            Every project is unique, so we provide custom quotes based on your
            specific requirements. Contact us for a free consultation and
            detailed proposal.
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="transform transition-transform duration-300 hover:scale-105 text-white px-8 py-3">
              Get Free Quote
            </Button>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary  rounded-full font-medium hover:bg-primary hover:text-white  transition-all duration-300"
            >
              View Portfolio
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
        </div>
      </Container>
    </section>
  );
};
