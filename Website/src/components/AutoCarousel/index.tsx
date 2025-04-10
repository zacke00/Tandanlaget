import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const slides = [
  "Det är viktigt att behålla ditt leende – självförtroendet börjar där.",
  "Regelbundna kontroller förebygger långsiktiga problem.",
  "En frisk mun = ett friskt liv.",
  "Häng med – gör hälsa roligt tillsammans med oss!",
];

const AutoCarousel = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 16,
      },
      renderMode: "performance",
    }
  );

  // Autoplay effect
  useEffect(() => {
    if (!slider) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3500);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider max-w-2xl mx-auto mt-12">
      {slides.map((text, i) => (
        <div
          key={i}
          className="keen-slider__slide p-6 text-center text-[#00579E] text-lg font-medium bg-white/80 rounded-xl shadow-md transition-all duration-500"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
