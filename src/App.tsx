import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CTA } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { ProjectShowcase } from "./components/sections/ProjectShowcase";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="UI/UX Arts">
      <Hero />
      <Brands />
      <Services />
      <ProjectShowcase />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  );
}

export default App;
