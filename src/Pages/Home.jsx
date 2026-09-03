import Navbar from "../components/navbar";
import TrainingPrograms from "../components/TrainingPrograms";
import CareerJourney from "../components/CareerJourney";
import AudienceSection from "../components/AudienceSection";
import FeaturedJobs from "../components/FeaturedJobs";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CareerJourney />
        <AudienceSection />
        <FeaturedJobs />
        <TrainingPrograms />
        <FinalCTA />
      </main>

      
    </>
  );
}

export default Home;