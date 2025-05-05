
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import CustomCTA from "../home/CustomCTA";
import Mission from "./Mission";
import OurTeam from "./OurTeam";
import HowWeWork from "./HowWeWork";
import IntellisyncSolutions from "./IntellisyncSolutions";


export default function About() {
  return (
    <>
      <Header />
      <Mission />
      <OurTeam />
      <HowWeWork />
      <IntellisyncSolutions />
      <CustomCTA />
      <Footer />
    </>
  );
}
