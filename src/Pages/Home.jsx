import "../App.css";

import Navbar from "../components/navbar";
import TrainingPrograms from "../Pages/TrainingPrograms";
import CareerJourney from "../components/CareerJourney";
import AudienceSection from "../components/AudienceSection";
import FeaturedJobs from "../components/FeaturedJobs";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <CareerJourney />

      <AudienceSection />

      <FeaturedJobs />

      <TrainingPrograms />

      <FinalCTA />
    </>
  );
}

export default Home;