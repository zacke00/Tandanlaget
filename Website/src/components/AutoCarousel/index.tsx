import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";

const slides = [
  "It's important to maintain your smile — confidence starts here.",
  "Regular checkups prevent long-term issues.",
  "A healthy mouth = a healthy life.",
  "Join us — take part in making health fun!",
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
