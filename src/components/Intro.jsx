import AnimatedText from "./AnimatedText";
import AvailabilityTag from "./AvailabilityTag";
import WelcomeMessage from "./WelcomeMessage";
import Descriptors from "./Descriptors";
import HeroCTA from "./HeroCTA";

function Intro() {
  return (
    <main className="flex-grow grid place-items-center min-h-[80vh]">
      <div className="w-full max-w-screen-xl px-8 mx-auto">
        <AvailabilityTag />
        <WelcomeMessage />
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold tracking-[-0.03em]">
          I'M JHON C. <br />
          <span className="text-darkRed block mt-4 h-16 md:h-20">
            <AnimatedText />
          </span>
        </h1>
        <Descriptors />
      </div>
      
      <HeroCTA />
    </main>
  );
}

export default Intro;
