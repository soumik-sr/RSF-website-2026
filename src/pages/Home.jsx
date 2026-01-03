import Breadcrumb from "../components/Breadcrumb/Breadcrumb.jsx";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About.jsx";
import EventSection from "../components/Events/EventsSection.jsx";
// import TalksWithExperts from "../components/TalksWithExperts/TalksWithExperts.jsx";
import Contact from "../components/Contact.jsx";
import Announcements from "../Announcement.jsx";
import TalkWithExperts from "../components/TalksWithExperts/TalksWithExperts.jsx";
// import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Breadcrumb />
      <Hero />
      <About />
      <EventSection />
      <TalkWithExperts />
      <Announcements />
      <Contact />
      {/* <EventSection /> */}
      {/* <Gallery /> */}
    </>
  );
}
