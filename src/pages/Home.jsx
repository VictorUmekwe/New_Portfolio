import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/projects";
import Services from "../components/Services";

const Home = () => {
  return (
    <main className="min-h-screen w-full p-2 md:p-4  text-white">
      {/* Main container for the home page */}
      <div className="max-w-7xl mx-auto ">
        <Hero />
        {/* Other components can go here, e.g., About, Projects, etc. */}
        <About/>
        <Projects/>
        <Services/>
        <Contact/>
      </div>
     
    </main>
  );
};

export default Home;
