import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const desktopImage = "/img/pizza2.jpg";
  const mobileImage = "/img/pizza.jpg";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-[100vh]"
        style={{
          backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
          La pizza più buona del mondo
        </h1>
      </div>
    </div>
  );
};

export default Hero;
