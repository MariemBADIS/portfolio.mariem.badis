import { Navbar } from "./components/Navbar";
import { HeroSect } from "./components/HeroSect";
import { AboutMe } from "./components/AboutMe";
import { SkillsSection } from "./components/SkillsSection";
import { ContactUs } from "./components/contactUs";
import { ScrollArrow } from "./components/ScrollArrow";
function App() {
  return (
    <>
        <div className="bg-deepBlue flex flex-col w-full h-full font-sora overflow-x-hidden relative">
          <Navbar />
          <HeroSect />
          <AboutMe />
          <SkillsSection />
          <ContactUs />
          <ScrollArrow />
        </div>
    </>
  );
}
export default App;