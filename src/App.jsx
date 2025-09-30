import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import SectionWrapper from "./sections/SectionWrapper";
import moran from "./assets/images/moran_2.jpeg";
import moran2 from "./assets/images/moran_1.jpeg";
import moran3 from "./assets/images/moran_4_showcase.jpeg";
import rona from "./assets/images/rona.png";

import Section1p5 from "./sections/Section1.5";
import GenericSection from "./sections/GenericSection";
import ReferralsSlider from "./sections/RefferalsSlider";
import "animate.css/animate.min.css";

import ScrollAnimation from "react-animate-on-scroll";
import ImpotantToKnow from "./sections/ImportantToKnow";
import ExternalLinks from "./sections/ExternalLinks";
import Section4 from "./sections/Section4";
import Topbar from "./components/Topbar";
import FloatingImage from "./components/FloatingImage";
import { useEffect, useState } from "react";

export const TwoPhoto = ({
  p1,
  p2,
  centeredOne = false,
  centeredTwo = false,
  animateIn = "fadeIn",
  speed = 1,
  className = "",
  gridColumns,
  overlay = "transparent",
  p3,
}) => {
  if (!animateIn) {
    return (
      <div
        className={"relative grid grid-cols-2 " + className}
        style={gridColumns ? { gridTemplateColumns: gridColumns } : {}}
      >
        <img src={p1} className={"image_1 " + (centeredOne ? "centered_image" : "")} />
        <div className={`absolute top-0 left-0 bottom-0 right-0`} />
        <img src={p2} className={"image_1 " + (centeredTwo ? "centered_image" : "")} />
        {p3 && <img src={p3} className={"image_1 " + (centeredTwo ? "centered_image" : "")} />}
      </div>
    );
  }
  return (
    <div
      className={"relative grid grid-cols-2 " + className}
      style={gridColumns ? { gridTemplateColumns: gridColumns } : {}}
    >
      <ScrollAnimation animateIn={animateIn} duration={2 * speed}>
        <img src={p1} className={"image_1 " + (centeredOne ? "centered_image" : "")} />
      </ScrollAnimation>
      <div className={`absolute top-0 left-0 bottom-0 right-0`} />
      <ScrollAnimation animateIn={animateIn} delay={4 * speed} duration={4 * speed}>
        <img src={p2} className={"image_1 " + (centeredTwo ? "centered_image" : "")} />
      </ScrollAnimation>
      {p3 && (
        <ScrollAnimation animateIn={animateIn} delay={4 * speed} duration={4 * speed}>
          <img src={p3} className={"image_1 " + (centeredTwo ? "centered_image" : "")} />
        </ScrollAnimation>
      )}
    </div>
  );
};

// קורס הכנה ללידה רונה עזריה
function App() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SectionWrapper>
        <Topbar />
        {/* <div className='relative grid'>
        <img src={moran} className="image_2" />
        <div className='absolute block top-0 bottom-0 left-0 right-0 bg-[rgba(183,131,131,0.2)]' />
      </div> */}
        <Section1p5 />
        <Section1 />

        <ScrollAnimation animateIn="fadeIn" className="relative" delay={0} duration={4}>
          <img src={moran} className="image_1" />
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-[rgba(144,57,99,0.2)]" />
        </ScrollAnimation>
        <Section2 />
        <ImpotantToKnow />
        <TwoPhoto p1={moran2} className="gap-2 m-[20px]" p2={moran3} />
        <Section4 />

        <div
          className={`animate__animated ${atTop ? "animate__fadeIn" : "animate__fadeOut"}`}
          style={{ animationDuration: "0.5s" }} // 👈 ensures fade timing
        >
          <FloatingImage src={rona} offset={[-40, 0]} />
        </div>

        <ReferralsSlider />
        <GenericSection className="bg-[var(--main-brown)]">
          <br />
          <ExternalLinks />
          <br />
          <div className="p-2 mx-auto w-fit">© {new Date().getFullYear()} כל הזכויות שמורות לרונה עזריה</div>
        </GenericSection>
      </SectionWrapper>
    </>
  );
}

export default App;
