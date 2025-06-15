import AnimatedText from "./AnimatedText";

function Intro() {
  return (
    <main className="flex-grow grid place-items-center min-h-[80vh]">
      <div className="w-full max-w-screen-xl px-8 mx-auto"> 
        <h1 className="text-4xl md:text-6xl font-extrabold">
          I'M JHON CADAVID, <br />
          <span className="text-cstRed block mt-4 h-16 md:h-20">
            <AnimatedText />
          </span>
        </h1>
      </div>
    </main>
  );
}

export default Intro;
